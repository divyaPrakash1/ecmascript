import { JsExponentiationAssignmentComponent } from './js-exponentiation-assignment/js-exponentiation-assignment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ES7Component } from './es-7.component';
import { MainES7Component } from './main-es7/main-es7.component';
import { JsExponentiationComponent } from './js-exponentiation/js-exponentiation.component';


const routes: Routes = [
  {
    path: '',
    component: ES7Component,
    children: [
      { path: '', component: MainES7Component, },
      { path: 'js-expo', component: JsExponentiationComponent, },
      { path: 'js-expo-assign', component: JsExponentiationAssignmentComponent, },
      
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ES7RoutingModule { }
