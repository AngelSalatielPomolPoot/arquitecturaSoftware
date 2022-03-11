import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaComponent } from './prueba.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PruebaComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule,
    RouterModule,
    NgbModule,
  ]
})
export class PruebaModule { }
