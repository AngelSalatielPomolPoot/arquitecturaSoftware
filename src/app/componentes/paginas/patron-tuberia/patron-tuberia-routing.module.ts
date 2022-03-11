import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatronTuberiaComponent } from './patron-tuberia.component';

const routes: Routes = [{ path: '', component: PatronTuberiaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatronTuberiaRoutingModule { }
