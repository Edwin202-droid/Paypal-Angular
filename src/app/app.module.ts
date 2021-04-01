import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ModalComponent } from './components/modal/modal.component';
import { CarritoItemComponent } from './components/carrito-item/carrito-item.component';

/* Liberia PayPal- CheckOut */
import { NgxPayPalModule } from 'ngx-paypal';
/* Libreria BootStrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/* Libreria Spinner */
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    ListaProductosComponent,
    ProductoItemComponent,
    CarritoComponent,
    ModalComponent,
    CarritoItemComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  /* Spinner */
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[ModalComponent]
})
export class AppModule { }
