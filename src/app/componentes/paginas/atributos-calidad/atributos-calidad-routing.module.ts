import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtributosCalidadComponent } from './atributos-calidad.component';

const routes: Routes = [{ path: '', component: AtributosCalidadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtributosCalidadRoutingModule { }
