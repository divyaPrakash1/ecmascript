import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ES6Component } from './es-6.component';
import { MainES6Component } from './main-es6/main-es6.component';
import { LetComponent } from './let/let.component';


const routes: Routes = [
  {
    path: '',
    component: ES6Component,
    children: [
      { path: '', component: MainES6Component, },
      { path: 'let', component: LetComponent, },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ES6RoutingModule { }
