import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeloVistaDesarrolloRoutingModule } from './modelo-vista-desarrollo-routing.module';
import { ModeloVistaDesarrolloComponent } from './modelo-vista-desarrollo.component';


@NgModule({
  declarations: [
    ModeloVistaDesarrolloComponent
  ],
  imports: [
    CommonModule,
    ModeloVistaDesarrolloRoutingModule
  ]
})
export class ModeloVistaDesarrolloModule { }
