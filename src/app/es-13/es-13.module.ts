import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Es13RoutingModule } from './es-13-routing.module';
import { Es13Component } from './es-13.component';
import { MainEs13Component } from './main-es-13/main-es-13.component';
import { ArrayAtComponent } from './array-at/array-at.component';
import { StringAtComponent } from './string-at/string-at.component';
import { RegExpComponent } from './reg-exp/reg-exp.component';
import { ObjHasOwnComponent } from './obj-has-own/obj-has-own.component';


@NgModule({
  declarations: [
    Es13Component,
    MainEs13Component,
    ArrayAtComponent,
    StringAtComponent,
    RegExpComponent,
    ObjHasOwnComponent
  ],
  imports: [
    CommonModule,
    Es13RoutingModule
  ]
})
export class ES13Module { }
