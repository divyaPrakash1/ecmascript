import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ES6RoutingModule } from './es-6-routing.module';
import { ES6Component } from './es-6.component';
import { MainES6Component } from './main-es6/main-es6.component';
import { LetComponent } from './let/let.component';


@NgModule({
  declarations: [
    ES6Component,
    MainES6Component,
    LetComponent
    
  ],
  imports: [
    CommonModule,
    ES6RoutingModule,
    
  ]
})
export class ES6Module { }