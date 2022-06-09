import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;
  monedas: string[] = ['USD', 'EUR', 'LIBRA'];

  constructor() { }

  ngOnInit(): void {
  }

  convertir(): void {
    switch(this.tengo) {
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        } else if(this.quiero === 'EUR') {
          this.total = this.cantidad * 0.94;
        } else if(this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.8;
        }
        break;
      case 'EUR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.06;
        } else if(this.quiero === 'EUR') {
          this.total = this.cantidad;
        } else if(this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.85;
        }
        break;
      case 'LIBRA':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.25;
        } else if(this.quiero === 'EUR') {
          this.total = this.cantidad * 1.18;
        } else if(this.quiero === 'LIBRA') {
          this.total = this.cantidad;
        }
        break;
    }
  }
}
