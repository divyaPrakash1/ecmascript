import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Es15RoutingModule } from './es-15-routing.module';
import { Es15Component } from './es-15.component';
import { ObjectGroupByComponent } from './object-group-by/object-group-by.component';
import { MapGroupByComponent } from './map-group-by/map-group-by.component';
import { MainEs15Component } from './main-es-15/main-es-15.component';


@NgModule({
  declarations: [
    Es15Component,
    ObjectGroupByComponent,
    MapGroupByComponent,
    MainEs15Component
  ],
  imports: [
    CommonModule,
    Es15RoutingModule
  ]
})
export class ES15Module { }
