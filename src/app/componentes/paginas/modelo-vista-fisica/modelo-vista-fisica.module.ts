import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeloVistaFisicaRoutingModule } from './modelo-vista-fisica-routing.module';
import { ModeloVistaFisicaComponent } from './modelo-vista-fisica.component';


@NgModule({
  declarations: [
    ModeloVistaFisicaComponent
  ],
  imports: [
    CommonModule,
    ModeloVistaFisicaRoutingModule
  ]
})
export class ModeloVistaFisicaModule { }
