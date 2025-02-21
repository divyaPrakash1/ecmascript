import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ES7RoutingModule } from './es-7-routing.module';
import { ES7Component } from './es-7.component';
import { MainES7Component } from './main-es7/main-es7.component';
import { JsExponentiationComponent } from './js-exponentiation/js-exponentiation.component';
import { JsExponentiationAssignmentComponent } from './js-exponentiation-assignment/js-exponentiation-assignment.component';
import { ArrayIncludesComponent } from './array-includes/array-includes.component';


@NgModule({
  declarations: [
    MainES7Component,
    ES7Component,
    JsExponentiationComponent,
    JsExponentiationAssignmentComponent,
    ArrayIncludesComponent
  ],
  imports: [
    CommonModule,
    ES7RoutingModule,
  ]
})
export class ES7Module { }