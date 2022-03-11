import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatronCapasRoutingModule } from './patron-capas-routing.module';
import { PatronCapasComponent } from './patron-capas.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PatronCapasComponent
  ],
  imports: [
    CommonModule,
    PatronCapasRoutingModule,
    RouterModule,
    NgbModule,
  ]
})
export class PatronCapasModule { }
