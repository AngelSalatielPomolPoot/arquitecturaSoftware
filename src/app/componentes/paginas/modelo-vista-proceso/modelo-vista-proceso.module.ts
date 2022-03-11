import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeloVistaProcesoRoutingModule } from './modelo-vista-proceso-routing.module';
import { ModeloVistaProcesoComponent } from './modelo-vista-proceso.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ModeloVistaProcesoRoutingModule,
    RouterModule,
    NgbModule,
  ]
})
export class ModeloVistaProcesoModule { }
