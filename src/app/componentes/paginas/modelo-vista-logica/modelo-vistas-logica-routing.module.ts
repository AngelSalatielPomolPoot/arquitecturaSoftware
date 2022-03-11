import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloVistasLogicaComponent } from './modelo-vistas-logica.component';

const routes: Routes = [{ path: '', component: ModeloVistasLogicaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeloVistasLogicaRoutingModule { }
