import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos:Producto[]=[
    new Producto(1, 'Ghost of Tsushima', 'Más allá de la guerra, la belleza antigua dura: descubre las maravillas ocultas de Tsushima en esta aventura de acción de mundo abierto.',79.99,'https://images-na.ssl-images-amazon.com/images/I/81Bzm37TIaL._SL1500_.jpg'),
    new Producto(2,'Marvel Spider-Man','El mejor juego de Spider-Man y experimenta la nueva aventura que todo el mundo está hablando',24.99 ,'https://images-na.ssl-images-amazon.com/images/I/814tECNqHBL._SL1500_.jpg'),
    new Producto(3,'God of War','Combate físico con una cámara libre sobre el hombro que lleva al jugador más cerca de la acción que nunca antes', 18.49,'https://images-na.ssl-images-amazon.com/images/I/813xlI-NGpL._SL1500_.jpg'),
    new Producto(4,'Marvel Spider-Man: Miles Morales','Miles Morales descubre poderes explosivos que lo distinguen de su mentor, Peter Parker.', 49.88,'https://images-na.ssl-images-amazon.com/images/I/71dtn2ZMs7L._SL1361_.jpg'),
    new Producto(5,'Cyberpunk 2077','Cyberpunk 2077 es un juego de historia de acción y aventura de mundo abierto en la ciudad nocturna',21.14 ,'https://images-na.ssl-images-amazon.com/images/I/81iR0aGNJ5L._SL1500_.jpg'),
    new Producto(6,'Red Dead Redemption 2','De los creadores de Grand Theft Auto V y Red Dead Redemption',30.00,'https://images-na.ssl-images-amazon.com/images/I/81zYK3DIv9L._SL1500_.jpg')
  ];

  constructor() { }

  cargarProductos():Producto[]{
    return this.productos;
  }
}
