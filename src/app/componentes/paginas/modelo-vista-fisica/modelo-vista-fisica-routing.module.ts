import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloVistaFisicaComponent } from './modelo-vista-fisica.component';

const routes: Routes = [{ path: '', component: ModeloVistaFisicaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeloVistaFisicaRoutingModule { }
