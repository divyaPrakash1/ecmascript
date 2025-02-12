import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exer1RoutingModule } from './exer-1-routing.module';
import { Exer1Component } from './exer-1.component';
import { MainExer1Component } from './main-exer-1/main-exer-1.component';
import { Common2Component } from './common-2/common-2.component';
import { Common3Component } from './common-3/common-3.component';


@NgModule({
  declarations: [
    Exer1Component,   
    MainExer1Component,
    Common2Component,
    Common3Component
  ],
  imports: [
    CommonModule,
    Exer1RoutingModule,
    
  ]
})
export class Exer1Module { }