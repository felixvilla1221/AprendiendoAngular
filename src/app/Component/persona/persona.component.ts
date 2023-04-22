import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  //declareacion de variables
  nombres: string = 'Felix Joaquin';
  apellido: string = 'Villamizar Ibanez';
  edad: number = 40;
  //private   edad:     number =  25;

  constructor() {}

  ngOnInit(): void {}

  /* // metodo para Obtener la edad
     public GetObtenerEdad():number{
      return this.edad
     } */
}
