import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBListadoComponent } from './components/page-b-listado/page-b-listado.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { Punto1FormComponent } from './components/punto1-form/punto1-form.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto3FormComponent } from './components/punto3-form/punto3-form.component';
import { Punto3Component } from './components/punto3/punto3.component';

const routes: Routes = [
  { path: 'home', component: Punto1Component },
  { path: 'punto1', component: Punto1Component },
  { path: 'punto2', component: PageBComponent },
  { path: 'punto1-form', component: Punto1FormComponent },
  { path: 'punto2-listado', component: PageBListadoComponent },
  { path: 'punto3', component: Punto3Component },
  { path: 'punto3-form', component: Punto3FormComponent },
  { path: 'punto3-editar/:id', component: Punto3FormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
