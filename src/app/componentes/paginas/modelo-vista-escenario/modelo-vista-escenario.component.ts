import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modelo-vista-escenario',
  templateUrl: './modelo-vista-escenario.component.html',
  styleUrls: ['./modelo-vista-escenario.component.css']
})
export class ModeloVistaEscenarioComponent implements OnInit {

  constructor(
    ngbConfig: NgbConfig,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
