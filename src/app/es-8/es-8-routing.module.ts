import { JsPaddingComponent } from './js-padding/js-padding.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ES8Component } from './es-8.component';
import { MainES8Component } from './main-es8/main-es8.component';

const routes: Routes = [
  {
    path: '',
    component: ES8Component,
    children: [
      { path: '', component: MainES8Component, },      
      { path: 'js-str-padding', component: JsPaddingComponent, },      
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ES8RoutingModule { }