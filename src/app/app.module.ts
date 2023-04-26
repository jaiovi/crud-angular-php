import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarLibroComponent } from './componentes/listar-libro/listar-libro.component';
import { EditarLibroComponent } from './componentes/editar-libro/editar-libro.component';
import { AgregarLibroComponent } from './componentes/agregar-libro/agregar-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarLibroComponent,
    EditarLibroComponent,
    AgregarLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
