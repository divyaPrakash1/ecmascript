import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ES5RoutingModule } from './es-5-routing.module';
import { ES5Component } from './es-5.component';
import { MainES5Component } from './main-es5-component/main-es5.component';



@NgModule({
  declarations: [
    ES5Component,
    MainES5Component
  ],
  imports: [
    CommonModule,
    ES5RoutingModule,
    
  ]
})
export class ES5Module { }