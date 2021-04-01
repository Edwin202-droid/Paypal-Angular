import { Injectable } from '@angular/core';
import { CarritoItemModel } from '../modelos/carrito-item';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  existeCarrito(){
    return localStorage.getItem('carrito') != null;
  }
  enviarCarrito(carrito:CarritoItemModel[]){
    localStorage.setItem('carrito',JSON.stringify(carrito))
  }
  obtenerCarrito():CarritoItemModel[]{
    return JSON.parse(localStorage.getItem('carrito'));
  }
  eliminarCarrito(){
    localStorage.removeItem('carrito');
  }
}
