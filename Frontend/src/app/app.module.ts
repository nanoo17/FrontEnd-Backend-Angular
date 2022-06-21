import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto1FormComponent } from './components/punto1-form/punto1-form.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageBListadoComponent } from './components/page-b-listado/page-b-listado.component';
import { Punto3FormComponent } from './components/punto3-form/punto3-form.component';
//importando locales
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { Punto3Component } from './components/punto3/punto3.component';
import { CategoriaPipe } from './pipes/categoria.pipe';

registerLocaleData(localeEsAr, 'es-AR');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Punto1Component,
    Punto1FormComponent,
    Punto3Component,
    PageBComponent,
    PageBListadoComponent,
    Punto3FormComponent,
    CategoriaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
