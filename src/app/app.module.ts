import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule,registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

import localeEsAr from '@angular/common/locales/es-AR';
import { HeaderComponent } from './shared/components/header/header.component';
import { PrincipalModule } from './componentes/paginas/principal/principal.module';
import { PrincipalComponent } from './componentes/paginas/principal/principal.component';
registerLocaleData(localeEsAr, 'es-Ar')

@NgModule({
  declarations: [
    AppComponent,HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PrincipalModule,
    CommonModule,
    
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Ar' } ],
  bootstrap: [AppComponent]
})
export class AppModule {}
