import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;

  constructor(
    ngbConfig: NgbConfig,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
