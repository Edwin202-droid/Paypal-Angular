import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

  @Input() productoItem: Producto;

  constructor(private mensajeService:MessageService) { }

  ngOnInit() {
  }

  agregarAlCarrito(){
    this.mensajeService.enviarMensaje(this.productoItem);
  }

}
