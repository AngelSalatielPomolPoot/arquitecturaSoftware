import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-atributos-calidad',
  templateUrl: './atributos-calidad.component.html',
  styleUrls: ['./atributos-calidad.component.css']
})
export class AtributosCalidadComponent implements OnInit {

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

  constructor(
    ngbConfig: NgbConfig,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
