import { Component, Input, OnInit } from '@angular/core';
import { CarritoItemModel } from 'src/app/modelos/carrito-item';

@Component({
  selector: 'app-carrito-item',
  templateUrl: './carrito-item.component.html',
  styleUrls: ['./carrito-item.component.css']
})
export class CarritoItemComponent implements OnInit {
  //Lo que recibo del padre: El modelo
  @Input()carritoItem:CarritoItemModel;

  constructor() { }

  ngOnInit() {
  }

}
