import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CharAtComponent } from './components/es-5/char-at/char-at.component';
import { MultilineStringComponent } from './components/es-5/multiline-string/multiline-string.component';
import { IsArrayComponent } from './components/es-5/is-array/is-array.component';
import { TrimComponent } from './components/es-5/trim/trim.component';
import { ForEachComponent } from './components/es-5/for-each/for-each.component';
import { MapComponent } from './components/es-5/map/map.component';
import { FilterComponent } from './components/es-5/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CharAtComponent,
    MultilineStringComponent,
    IsArrayComponent,
    TrimComponent,
    ForEachComponent,
    MapComponent,
    FilterComponent
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
