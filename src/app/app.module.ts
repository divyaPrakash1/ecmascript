import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { Es9Component } from './es-9/es-9.component';
import { MainEs9Component } from './es-9/main-es-9/main-es-9.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, Es9Component, MainEs9Component, HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())  // 👈 Enables fetch API for HttpClient

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
