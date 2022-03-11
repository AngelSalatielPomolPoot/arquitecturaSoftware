import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modelo-vistas-logica',
  templateUrl: './modelo-vistas-logica.component.html',
  styleUrls: ['./modelo-vistas-logica.component.css']
})
export class ModeloVistasLogicaComponent implements OnInit {

  constructor(
    ngbConfig: NgbConfig,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
