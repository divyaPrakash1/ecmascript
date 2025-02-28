import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { Es9Component } from './es-9/es-9.component';
import { MainEs9Component } from './es-9/main-es-9/main-es-9.component';

@NgModule({
  declarations: [ AppComponent, Es9Component, MainEs9Component ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
