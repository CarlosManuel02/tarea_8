import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import {EventosComponent} from "./pages/eventos/eventos.component";
import {FormularioComponent} from "./pages/formulario/formulario.component";
import {AcercaDeComponent} from "./pages/acerca-de/acerca-de.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    MainPageRoutingModule
  ],
  declarations: [
    MainPage,
    EventosComponent,
    FormularioComponent,
    AcercaDeComponent
  ]
})
export class MainPageModule {}
