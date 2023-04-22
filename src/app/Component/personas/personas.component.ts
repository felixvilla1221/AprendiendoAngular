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
  titulo:  string  =    ' ';

  constructor() {}

  ngOnInit(): void {}

  public agregarPersona() {
    this.mensaje = 'Persona Agregada'
  }


  public modificarTitulo(event:Event){
   // alert(event.target + "ES5TE ES MI OBJETO")

   this.titulo =(<HTMLInputElement>event.target).value


}

}
