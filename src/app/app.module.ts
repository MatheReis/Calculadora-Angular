import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultadoComponent } from './component/resultado/resultado.component';
import { NumerosComponent } from './component/numeros/numeros.component';
import { FuncaoComponent } from './component/funcao/funcao.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultadoComponent,
    NumerosComponent,
    FuncaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
