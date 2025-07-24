import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Es14RoutingModule } from './es-14-routing.module';
import { Es14Component } from './es-14.component';
import { MainEs14Component } from './main-es-14/main-es-14.component';
import { FindLastComponent } from './find-last/find-last.component';
import { FindLastIndexComponent } from './find-last-index/find-last-index.component';
import { ToReversedComponent } from './to-reversed/to-reversed.component';
import { ToSortedComponent } from './to-sorted/to-sorted.component';
import { ToSplicedComponent } from './to-spliced/to-spliced.component';
import { ArrayWithComponent } from './array-with/array-with.component';


@NgModule({
  declarations: [
    Es14Component,
    MainEs14Component,
    FindLastComponent,
    FindLastIndexComponent,
    ToReversedComponent,
    ToSortedComponent,
    ToSplicedComponent,
    ArrayWithComponent
  ],
  imports: [
    CommonModule,
    Es14RoutingModule
  ]
})
export class ES14Module { }
