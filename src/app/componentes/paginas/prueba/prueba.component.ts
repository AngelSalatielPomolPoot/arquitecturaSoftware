import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;
  public isCollapsed6 = true;
  public isCollapsed7 = true;
  public isCollapsed8 = true;
  public isCollapsed9 = true;
  public isCollapsed10 = true;
  public isCollapsed11 = true;

  listaPreguntas:any[]=[
    {numeroPregunta:1,valor:false,activo:false, respuestaCorrecta:"Vistas de la arquitectura"},
    {numeroPregunta:2,valor:false,activo:false, respuestaCorrecta:"Rendimiento"},
    {numeroPregunta:3,valor:false,activo:false, respuestaCorrecta:"1992"},
    {numeroPregunta:4,valor:false,activo:false, respuestaCorrecta:"Ninguna de las anteriores"},
    {numeroPregunta:5,valor:false,activo:false, respuestaCorrecta:"Diagrama de clases"},
    {numeroPregunta:6,valor:false,activo:false, respuestaCorrecta:"Vista de proceso"},
    {numeroPregunta:7,valor:false,activo:false, respuestaCorrecta:"Patrón por capas"},
    {numeroPregunta:8,valor:false,activo:false, respuestaCorrecta:"Costo"},
    {numeroPregunta:9,valor:false,activo:false, respuestaCorrecta:"Patrón tubería y filtros"},
    {numeroPregunta:10,valor:false,activo:false, respuestaCorrecta:"Patrón por capas"},
    {numeroPregunta:11,valor:false,activo:false, respuestaCorrecta:"Vista de escenario"},
    {numeroPregunta:12,valor:false,activo:false, respuestaCorrecta:"¿Cuán caro ha sido su desarrollo?"},
    {numeroPregunta:13,valor:false,activo:false, respuestaCorrecta:"Intermediario"},
    {numeroPregunta:14,valor:false,activo:false, respuestaCorrecta:"No es ninguna de las anteriores"},
  ];

  constructor(
    ngbConfig: NgbConfig,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  opcionVerdadero(opcion):void{
    switch (opcion) {
      case 0:
        this.listaPreguntas[0].valor=true;
        this.listaPreguntas[0].activo=true;
        break;
      case 1:
        this.listaPreguntas[1].valor=true;
        this.listaPreguntas[1].activo=true;
        break;
      case 2:
        this.listaPreguntas[2].valor=true;
        this.listaPreguntas[2].activo=true;
        break;
      case 3:
        this.listaPreguntas[3].valor=true;
        this.listaPreguntas[3].activo=true;
        break;
      case 4:
        this.listaPreguntas[4].valor=true;
        this.listaPreguntas[4].activo=true;
        break;
      case 5:
        this.listaPreguntas[5].valor=true;
        this.listaPreguntas[5].activo=true;
        break;
      case 6:
        this.listaPreguntas[6].valor=true;
        this.listaPreguntas[6].activo=true;
        break;
      case 7:
        this.listaPreguntas[7].valor=true;
        this.listaPreguntas[7].activo=true;
        break;
      case 8:
        this.listaPreguntas[8].valor=true;
        this.listaPreguntas[8].activo=true;
        break;
      case 9:
        this.listaPreguntas[9].valor=true;
        this.listaPreguntas[9].activo=true;
        break;
      case 10:
        this.listaPreguntas[10].valor=true;
        this.listaPreguntas[10].activo=true;
        break;
      case 11:
        this.listaPreguntas[11].valor=true;
        this.listaPreguntas[11].activo=true;
        break;
      case 12:
        this.listaPreguntas[12].valor=true;
        this.listaPreguntas[12].activo=true;
        break;
      case 13:
        this.listaPreguntas[13].valor=true;
        this.listaPreguntas[13].activo=true;
        break;
      
    }
  }

  opcionFalso(opcion):void{
    switch (opcion) {
      case 0:
        this.listaPreguntas[0].valor=false;
        this.listaPreguntas[0].activo=true;
        break;
      case 1:
        this.listaPreguntas[1].valor=false;
        this.listaPreguntas[1].activo=true;
        break;
      case 2:
        this.listaPreguntas[2].valor=false;
        this.listaPreguntas[2].activo=true;
        break;
      case 3:
        this.listaPreguntas[3].valor=false;
        this.listaPreguntas[3].activo=true;
        break;
      case 4:
        this.listaPreguntas[4].valor=false;
        this.listaPreguntas[4].activo=true;
        break;
      case 5:
        this.listaPreguntas[5].valor=false;
        this.listaPreguntas[5].activo=true;
        break;
      case 6:
        this.listaPreguntas[6].valor=false;
        this.listaPreguntas[6].activo=true;
        break;
      case 7:
        this.listaPreguntas[7].valor=false;
        this.listaPreguntas[7].activo=true;
        break;
      case 8:
        this.listaPreguntas[8].valor=false;
        this.listaPreguntas[8].activo=true;
        break;
      case 9:
        this.listaPreguntas[9].valor=false;
        this.listaPreguntas[9].activo=true;
        break;
      case 10:
        this.listaPreguntas[10].valor=false;
        this.listaPreguntas[10].activo=true;
        break;
      case 11:
        this.listaPreguntas[11].valor=false;
        this.listaPreguntas[11].activo=true;
        break;
      case 12:
        this.listaPreguntas[12].valor=false;
        this.listaPreguntas[12].activo=true;
        break;
      case 13:
        this.listaPreguntas[13].valor=false;
        this.listaPreguntas[13].activo=true;
        break;
    }
  }
}
