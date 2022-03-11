import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtributosCalidadRoutingModule } from './atributos-calidad-routing.module';
import { AtributosCalidadComponent } from './atributos-calidad.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AtributosCalidadComponent
  ],
  imports: [
    CommonModule,
    AtributosCalidadRoutingModule,
    RouterModule,
    NgbModule,
  ]
})
export class AtributosCalidadModule { }
