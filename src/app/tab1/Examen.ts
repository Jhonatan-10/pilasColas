import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dato: string;
  v: Array<string> = new Array<string>(5);
  entrada: number;
  salida: number;
  mensaje = '';

  constructor() {
    this.entrada = this.salida = -1;
    
  }
  vacia(): boolean {
    return (this.entrada === -1 && this.salida === -1);
  
  }
  llena(): boolean {
    return (this.entrada === 4 && this.salida === 0 || this.salida === 4 && this.entrada === 0);
    
  }
  insertarInicio() {
    if (this.vacia()) {
      this.entrada = this.salida = 0;
      this.v[this.entrada] = this.dato;
      this.dato = '';
    } else {
      if (!this.llena()) {
        this.entrada++;
        this.v[this.entrada] = this.dato;
        this.dato = '';
      } else {
        console.log('cola llena');
        this.mensaje = 'Cola llena';
      }
    }
  }


  insertarFinal() {
    if (this.vacia()) {
      this.entrada = this.salida = 4;
      this.v[this.entrada] = this.dato;
      this.dato = '';
    } else {
      if (!this.llena()) {
        this.entrada--;
        this.v[this.entrada] = this.dato;
        this.dato = '';
      } else {
        console.log('cola llena');
        this.mensaje = 'Cola llena';
      }
    }
  }


  extraerInicio() {
    if (this.vacia()) {
      console.log('cola vacia');
      this.mensaje = 'Cola vacia';
      return;
    }
    console.log(this.v[this.salida]);
    this.mensaje = 'Valor extraído: ' + this.v[this.salida];
    this.v[this.salida] = '';
    if (this.entrada === this.salida) {
      this.entrada = this.salida = -1;
    } else {
      this.salida++;
    }
  }


  extraerFinal() {
    if (this.vacia()) {
      console.log('cola vacia');
      this.mensaje = 'Cola vacia';
      return;
    }
    console.log(this.v[this.salida]);
    this.mensaje = 'Valor extraído: ' + this.v[this.salida];
    this.v[this.salida] = '';
    if (this.entrada === this.salida) {
      this.entrada = this.salida = -1;
    } else {
      this.salida--;
    }
  }


  
}
