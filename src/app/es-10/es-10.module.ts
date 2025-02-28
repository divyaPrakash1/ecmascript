import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ES10RoutingModule } from './es-10-routing.module';
import { Es10Component } from './es-10.component';
import { MainEs10Component } from './main-es-10/main-es-10.component';
import { StringTrimStartComponent } from './string-trim-start/string-trim-start.component';


@NgModule({
  declarations: [
    Es10Component,
    MainEs10Component,
    StringTrimStartComponent
  ],
  imports: [
    CommonModule,
    ES10RoutingModule
  ]
})
export class ES10Module { }
