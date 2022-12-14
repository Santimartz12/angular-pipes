import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouterModule } from './routes/app-router/app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import '@angular/common/locales/global/es-CO';
import '@angular/common/locales/global/fr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'},
    {provide: LOCALE_ID, useValue: 'es-CO'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
