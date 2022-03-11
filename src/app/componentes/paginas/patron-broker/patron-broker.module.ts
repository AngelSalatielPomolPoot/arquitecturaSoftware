import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatronBrokerRoutingModule } from './patron-broker-routing.module';
import { PatronBrokerComponent } from './patron-broker.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PatronBrokerComponent
  ],
  imports: [
    CommonModule,
    PatronBrokerRoutingModule,
    RouterModule,
    NgbModule,
  ]
})
export class PatronBrokerModule { }
