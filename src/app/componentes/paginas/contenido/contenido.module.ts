import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutingModule } from './contenido-routing.module';
import { ContenidoComponent } from './contenido.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule,
    RouterModule,
    NgbModule,
    
  ]
})
export class ContenidoModule { }
