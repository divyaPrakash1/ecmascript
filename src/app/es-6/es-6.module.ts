import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ES6RoutingModule } from './es-6-routing.module';
import { ES6Component } from './es-6.component';
import { MainES6Component } from './main-es6/main-es6.component';
import { LetComponent } from './let/let.component';
import { ConstKeyWordComponent } from './const-key-word/const-key-word.component';
import { ArrowFunctionsComponent } from './arrow-functions/arrow-functions.component';
import { DestructuringComponent } from './destructuring/destructuring.component';


@NgModule({
  declarations: [
    ES6Component,
    MainES6Component,
    LetComponent,
    ConstKeyWordComponent,
    ArrowFunctionsComponent,
    DestructuringComponent
    
  ],
  imports: [
    CommonModule,
    ES6RoutingModule,
    
  ]
})
export class ES6Module { }