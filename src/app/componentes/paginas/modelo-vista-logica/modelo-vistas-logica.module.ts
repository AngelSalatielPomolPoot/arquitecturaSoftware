import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeloVistasLogicaRoutingModule } from './modelo-vistas-logica-routing.module';
import { ModeloVistasLogicaComponent } from './modelo-vistas-logica.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ModeloVistasLogicaRoutingModule,
    RouterModule,
    NgbModule,
  ]
})
export class ModeloVistasLogicaModule { }
