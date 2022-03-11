import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatronCapasComponent } from './patron-capas.component';

const routes: Routes = [{ path: '', component: PatronCapasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatronCapasRoutingModule { }
