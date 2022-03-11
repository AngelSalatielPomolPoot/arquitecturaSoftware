import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'principal',
    pathMatch:'full',
  },
  { path: 'principal', loadChildren: () => import('./componentes/paginas/principal/principal.module').then(m => m.PrincipalModule) },
  { path: 'contenido', loadChildren: () => import('./componentes/paginas/contenido/contenido.module').then(m => m.ContenidoModule) },
  { path: 'modeloVistaLogica', loadChildren: () => import('./componentes/paginas/modelo-vista-logica/modelo-vistas-logica.module').then(m => m.ModeloVistasLogicaModule) },
  { path: 'modeloVistaProceso', loadChildren: () => import('./componentes/paginas/modelo-vista-proceso/modelo-vista-proceso.module').then(m => m.ModeloVistaProcesoModule) },
  { path: 'atributosCalidad', loadChildren: () => import('./componentes/paginas/atributos-calidad/atributos-calidad.module').then(m => m.AtributosCalidadModule) },
  { path: 'historia', loadChildren: () => import('./componentes/paginas/historia/historia.module').then(m => m.HistoriaModule) },
  { path: 'modeloVistaEscenario', loadChildren: () => import('./componentes/paginas/modelo-vista-escenario/modelo-vista-escenario.module').then(m => m.ModeloVistaEscenarioModule) },
  { path: 'modeloVistaFisica', loadChildren: () => import('./componentes/paginas/modelo-vista-fisica/modelo-vista-fisica.module').then(m => m.ModeloVistaFisicaModule) },
  { path: 'modeloVistaDesarrollo', loadChildren: () => import('./componentes/paginas/modelo-vista-desarrollo/modelo-vista-desarrollo.module').then(m => m.ModeloVistaDesarrolloModule) },
  { path: 'capas', loadChildren: () => import('./componentes/paginas/patron-capas/patron-capas.module').then(m => m.PatronCapasModule) },
  { path: 'tuberia', loadChildren: () => import('./componentes/paginas/patron-tuberia/patron-tuberia.module').then(m => m.PatronTuberiaModule) },
  { path: 'broker', loadChildren: () => import('./componentes/paginas/patron-broker/patron-broker.module').then(m => m.PatronBrokerModule) },
  { path: 'prueba', loadChildren: () => import('./componentes/paginas/prueba/prueba.module').then(m => m.PruebaModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
