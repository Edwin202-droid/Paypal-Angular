import { Component, Input, NgModule, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  /* Vamos a recibir componentes de un padre, carrito.component, paypal*/
  @Input() amount;
  @Input() items;

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit() {
  }

}
