import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContenedorBibliotecaComponent } from './contenedor-biblioteca.component';
import { TarjetaLibrosComponent } from './tarjeta-libros.component';
import { RutaImagenComponent } from './ruta-imagen.component';
import { OpacidadComponent } from './opacidad.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorBibliotecaComponent,
    TarjetaLibrosComponent,
    RutaImagenComponent,
    OpacidadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
