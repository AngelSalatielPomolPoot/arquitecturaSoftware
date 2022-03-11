import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modelo-vista-proceso',
  templateUrl: './modelo-vista-proceso.component.html',
  styleUrls: ['./modelo-vista-proceso.component.css']
})
export class ModeloVistaProcesoComponent implements OnInit {

  constructor(
    ngbConfig: NgbConfig,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
