import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Es12RoutingModule } from './es-12-routing.module';
import { Es12Component } from './es-12.component';
import { MainEs12Component } from './main-es-12/main-es-12.component';
import { StrReplaceAllComponent } from './str-replace-all/str-replace-all.component';


@NgModule({
  declarations: [
    Es12Component,
    MainEs12Component,
    StrReplaceAllComponent,
  ],
  imports: [
    CommonModule,
    Es12RoutingModule
  ]
})
export class ES12Module { }
