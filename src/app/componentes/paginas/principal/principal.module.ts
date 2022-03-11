import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContenidoModule } from '../contenido/contenido.module';
import { ContenidoComponent } from '../contenido/contenido.component';
import { ModeloVistasLogicaModule } from '../modelo-vista-logica/modelo-vistas-logica.module';
import { ModeloVistasLogicaComponent } from '../modelo-vista-logica/modelo-vistas-logica.component';
import { ModeloVistaProcesoModule } from '../modelo-vista-proceso/modelo-vista-proceso.module';
import { ModeloVistaProcesoComponent } from '../modelo-vista-proceso/modelo-vista-proceso.component';


@NgModule({
  declarations: [
    PrincipalComponent,ContenidoComponent,ModeloVistasLogicaComponent,ModeloVistaProcesoComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    ContenidoModule,
    ModeloVistasLogicaModule,
    ModeloVistaProcesoModule,
    NgbModule
  ],
})
export class PrincipalModule { }
