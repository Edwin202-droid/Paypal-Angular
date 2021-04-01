import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos:Producto[]=[];

  constructor(private productoService:ProductoService) { }

  ngOnInit() {
    this.mostrarProductos();
  }

  mostrarProductos(){
    this.productos= this.productoService.cargarProductos();
  }

}
