import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatronTuberiaRoutingModule } from './patron-tuberia-routing.module';
import { PatronTuberiaComponent } from './patron-tuberia.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PatronTuberiaComponent
  ],
  imports: [
    CommonModule,
    PatronTuberiaRoutingModule,
    RouterModule,
    NgbModule,
  ]
})
export class PatronTuberiaModule { }
