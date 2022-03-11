import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloVistaDesarrolloComponent } from './modelo-vista-desarrollo.component';

const routes: Routes = [{ path: '', component: ModeloVistaDesarrolloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeloVistaDesarrolloRoutingModule { }
