import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Es11RoutingModule } from './es-11-routing.module';
import { Es11Component } from './es-11.component';
import { MainEs11Component } from './main-es-11/main-es-11.component';
import { BigintComponent } from './bigint/bigint.component';


@NgModule({
  declarations: [
    Es11Component,
    MainEs11Component,
    BigintComponent
  ],
  imports: [
    CommonModule,
    Es11RoutingModule
  ]
})
export class ES11Module { }
