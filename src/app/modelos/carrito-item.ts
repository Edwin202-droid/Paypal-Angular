import { Producto } from "./producto";

/* El modelo del carrito depende del modelo producto */

export class CarritoItemModel{
    productoId: number;
    productoNombre:string;
    productoPrecio:number;
    cantidad:number;

    constructor(producto:Producto){
        this.productoId=producto.id;
        this.productoNombre=producto.nombre;
        this.productoPrecio=producto.precio;
        /* Por defecto es 1 */
        this.cantidad=1;
    }
}