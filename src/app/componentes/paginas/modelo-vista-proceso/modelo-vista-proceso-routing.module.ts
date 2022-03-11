import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloVistaProcesoComponent } from './modelo-vista-proceso.component';

const routes: Routes = [{ path: '', component: ModeloVistaProcesoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeloVistaProcesoRoutingModule { }
