import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patron-capas',
  templateUrl: './patron-capas.component.html',
  styleUrls: ['./patron-capas.component.css']
})
export class PatronCapasComponent implements OnInit {

  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;

  public isCollapsed5 = true;
  public isCollapsed6 = true;

  public isCollapsed7 = true;
  public isCollapsed8 = true;

  constructor(
    ngbConfig: NgbConfig,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
}
