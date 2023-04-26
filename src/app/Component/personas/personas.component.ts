import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  // declaracion de variables property binding
  estado:  boolean =    false;
  mensaje: string  =    ' No se ha agregado  Ninguna Persona ';
  mensaje2: string  =    ' No se ha agregado Ninguna Persona';
  titulo:  string  =    ' ';
  estado2: boolean =    false;
  titulo2: string  =    '';

  constructor() {}

  ngOnInit(): void {}

  public agregarPersona() {
    this.mensaje = 'Persona Agregada'
  }


  public agregarPersona2(){

    this.mensaje2 = 'Persona 2 Agregada'
  }


  public modificarTitulo(event:Event){

   this.titulo =(<HTMLInputElement>event.target).value


}


public modificarTitulo2(event:Event){
 console.log("ENTRANDO A METODO MODIFICAR TITULO");
  this.titulo2 = (<HTMLInputElement>event.target).value

}

}
