import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  mensaje= new Subject();

  constructor() { }

  /* Mandamos un producto al carrito. Lo usa el producto item*/
  enviarMensaje(producto:Producto){
    this.mensaje.next(producto);
  }

  recibirMensaje():Observable<any>{
    return this.mensaje.asObservable();
  }
}
