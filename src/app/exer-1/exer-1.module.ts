import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exer1RoutingModule } from './exer-1-routing.module';
import { Exer1Component } from './exer-1.component';
import { MainExer1Component } from './main-exer-1/main-exer-1.component';


@NgModule({
  declarations: [
    Exer1Component,   
    MainExer1Component
  ],
  imports: [
    CommonModule,
    Exer1RoutingModule,
    
  ]
})
export class Exer1Module { }