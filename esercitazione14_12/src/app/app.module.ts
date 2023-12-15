import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SecondoComponenteComponent } from './secondo-componente/secondo-componente.component';
import { TerzoComponeneteComponent } from './terzo-componenete/terzo-componenete.component';
import { QuartoComponeneteComponent } from './quarto-componenete/quarto-componenete.component';

@NgModule({
  declarations: [
    AppComponent,
    
    SecondoComponenteComponent,
    TerzoComponeneteComponent,
    QuartoComponeneteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
