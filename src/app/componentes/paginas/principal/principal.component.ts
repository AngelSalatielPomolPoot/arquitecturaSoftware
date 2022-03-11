import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

    imagenesCarrosel:any[]=[
    {srcImagen:'/assets/Recursos/1.jpg',texto:"Bienvenidos a SoftArk"},
    {srcImagen:'/assets/Recursos/1.jpg',texto:"Encuentra lo mejor del desarrollo"},
    {srcImagen:'/assets/Recursos/1.jpg',texto:"Descubre nuevas experiencias"}
  ];
 
  
  constructor(
    ngbConfig: NgbConfig,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  comenzar(){
    
    this.router.navigateByUrl('/contenido');
  }
}
