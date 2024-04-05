import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import {FormularioComponent} from "./pages/formulario/formulario.component";
import {EventosComponent} from "./pages/eventos/eventos.component";
import {AcercaDeComponent} from "./pages/acerca-de/acerca-de.component";

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'eventos',
        component: EventosComponent
      },
      {
        path: 'formulario',
        component: FormularioComponent
      },
      {
        path: 'acerca-de',
        component: AcercaDeComponent
      },
      {
        path: '',
        redirectTo: 'eventos',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
