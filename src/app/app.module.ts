import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CharAtComponent } from './components/char-at/char-at.component';
import { MultilineStringComponent } from './components/multiline-string/multiline-string.component';
import { IsArrayComponent } from './components/is-array/is-array.component';
import { TrimComponent } from './components/trim/trim.component';

@NgModule({
  declarations: [
    AppComponent,
    CharAtComponent,
    MultilineStringComponent,
    IsArrayComponent,
    TrimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
