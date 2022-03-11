import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeloVistaEscenarioRoutingModule } from './modelo-vista-escenario-routing.module';
import { ModeloVistaEscenarioComponent } from './modelo-vista-escenario.component';


@NgModule({
  declarations: [
    ModeloVistaEscenarioComponent
  ],
  imports: [
    CommonModule,
    ModeloVistaEscenarioRoutingModule
  ]
})
export class ModeloVistaEscenarioModule { }
