
export class Producto{

    id: number;
    nombre:string;
    descripcion:string;
    precio:number;
    imagenUrl: string;

    constructor(id,nombre,descripcion,precio,imagenUrl){
        
        this.id= id;
        this.nombre= nombre;
        this.descripcion=descripcion;
        this.precio= precio;
        this.imagenUrl=imagenUrl;
    }
}