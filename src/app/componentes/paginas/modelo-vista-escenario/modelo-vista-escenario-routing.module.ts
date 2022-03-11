import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloVistaEscenarioComponent } from './modelo-vista-escenario.component';

const routes: Routes = [{ path: '', component: ModeloVistaEscenarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeloVistaEscenarioRoutingModule { }
