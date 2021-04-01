import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
/* import { NgxSpinnerService } from 'ngx-spinner'; */
import { CarritoItemModel } from 'src/app/modelos/carrito-item';
import { Producto } from 'src/app/modelos/producto';
import { MessageService } from 'src/app/services/message.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carritoItems = [];
  total: number = 0;
  /* PayPal */
  public payPalConfig?: IPayPalConfig;

  constructor(private mensajeService: MessageService,
              private storageService: StorageService,
              private modalService: NgbModal
              ) { }

  ngOnInit(): void {
    /* PayPal */
    this.initConfig();

    //LocalStorage
    /* Si no existe un carrito en el storage*/
    if (this.storageService.existeCarrito()) {
      this.carritoItems = this.storageService.obtenerCarrito();
    }
    this.recibirProducto();
    this.total = this.SumaTotal();
  }

  //==================================================
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      /* ID de la aplicacion creada en PayPal importada de enviorement*/
      clientId: environment.clienteId,
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        //Total a pagar -> value
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'EUR',
            //La suma total del carrito
            value: this.SumaTotal().toString(),
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: this.SumaTotal().toString()
              }
            }
          },
          //Aqui sumamos cada elemento de carrito, esperando a que sea igual
          items:this.recibirListaProductos()
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },

      onApprove: (data, actions) => {
        /* this.spinner.show(); */
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      /* Aqui aceptamos la compra */
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', 
        JSON.stringify(data));
        this.abrirModal(
          data.purchase_units[0].items,
          data.purchase_units[0].amount.value
        );
        this.vaciarCarrito();
        /* this.spinner.hide(); */
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        
      },
      onError: err => {
        console.log('OnError', err);
        
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
        
      },
    };
  }


  recibirProducto() {
    this.mensajeService.recibirMensaje()
      .subscribe((producto: Producto) => {

        let existe = false;
        this.carritoItems.forEach(item => {
          if (item.productoId === producto.id) {
            existe = true;
            item.cantidad = item.cantidad + 1;
          }
        });
        if (!existe) {
          const carritoItem = new CarritoItemModel(producto);
          this.carritoItems.push(carritoItem);
        }
        //Llamando la suma
        this.total = this.SumaTotal();
        //Guardando en el storage, lo enviamos
        this.storageService.enviarCarrito(this.carritoItems);
      });
  }

  /* Llenar el carrito que se enviara a PayPal */
  /* en items guardamos, variable item, recorremos el carrito
    vamos convierton cada item en un item de paypal y luego
    lo guardamos en el arreglo de items*/

  recibirListaProductos(){
    const items: any[]=[];
    let item = {};
    this.carritoItems.forEach((resp:CarritoItemModel)=>{
      item={
        name: resp.productoNombre,
        quantity:resp.cantidad,
        unit_amount: {
          value:resp.productoPrecio,
          currency_code:'EUR'
        }
      };
      items.push(item);
    });
    return items;
  }



  SumaTotal() {
    let total = 0;
    this.carritoItems.forEach(item => {
      total += item.cantidad * item.productoPrecio;
    });
    return +total.toFixed(2);

  }

  vaciarCarrito() {
    this.carritoItems = [];
    this.total = 0;
    //lo eliminamos del localStorage
    this.storageService.eliminarCarrito();
  }

  borrarItem(i: number) {
    /* Si tenemos que la cantidad es mayor a 1, eliminar uno por uno */
    if (this.carritoItems[i].cantidad > 1) {
      this.carritoItems[i].cantidad--;
    } else {
      //De la posicion i elimina un elemento
      this.carritoItems.splice(i, 1);
    }
    //Cambiamos el total
    this.total = this.SumaTotal();
    //enviamos el nuevo carrito
    this.storageService.enviarCarrito(this.carritoItems);
  }

  abrirModal(items,amount){

    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.items = items;
    modalRef.componentInstance.amount= amount;
  }


}
