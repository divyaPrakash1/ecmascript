import { JsPaddingComponent } from './js-padding/js-padding.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ES8Component } from './es-8.component';
import { MainES8Component } from './main-es8/main-es8.component';
import { ObjectEntriesComponent } from './object-entries/object-entries.component';
import { ObjectValuesComponent } from './object-values/object-values.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { TrailingCommaFunctionsComponent } from './trailing-comma-functions/trailing-comma-functions.component';
import { GetOwnPropertyDescriptorsComponent } from './get-own-property-descriptors/get-own-property-descriptors.component';

const routes: Routes = [
  {
    path: '',
    component: ES8Component,
    children: [
      { path: '', component: MainES8Component, },      
      { path: 'js-str-padding', component: JsPaddingComponent, },      
      { path: 'object-entries', component: ObjectEntriesComponent, },      
      { path: 'object-values', component: ObjectValuesComponent, },      
      { path: 'async-await', component: AsyncAwaitComponent, },      
      { path: 'comma-fn', component: TrailingCommaFunctionsComponent, },      
      { path: 'own-prop', component: GetOwnPropertyDescriptorsComponent, },      
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ES8RoutingModule { }