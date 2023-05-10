import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { Pagina01Component } from './pagina01/pagina01.component';
import { Grid01Component } from './grid01/grid01.component';
import { Grid02Component } from './grid02/grid02.component';
import { Grid03Component } from './grid03/grid03.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    Pagina01Component,
    Grid01Component,
    Grid02Component,
    Grid03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
