import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { RxjsMainComponent } from './rxjs-main/rxjs-main.component';
import { PromiseComponent } from './promise/promise.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';


@NgModule({
  declarations: [
    RxjsComponent,
    RxjsMainComponent,
    PromiseComponent,
    AsyncAwaitComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
