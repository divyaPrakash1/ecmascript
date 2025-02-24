import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ES8RoutingModule } from './es-8-routing.module';
import { ES8Component } from './es-8.component';
import { MainES8Component } from './main-es8/main-es8.component';
import { JsPaddingComponent } from './js-padding/js-padding.component';
import { ObjectEntriesComponent } from './object-entries/object-entries.component';
import { ObjectValuesComponent } from './object-values/object-values.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';


@NgModule({
  declarations: [
    ES8Component,
    MainES8Component,
    JsPaddingComponent,
    ObjectEntriesComponent,
    ObjectValuesComponent,
    AsyncAwaitComponent
  ],
  imports: [
    CommonModule,
    ES8RoutingModule
  ]
})
  
  
  // declarations: [
  //     Exer1Component,   
  //     MainExer1Component,
  //     Common2Component,
  //     Common3Component
  //   ],
  //   imports: [
  //     CommonModule,
  //     Exer1RoutingModule,
      
  //   ]
export class ES8Module { 

}
