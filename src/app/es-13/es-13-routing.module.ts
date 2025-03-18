import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Es13Component } from './es-13.component';
import { MainEs13Component } from './main-es-13/main-es-13.component';
import { StringAtComponent } from './string-at/string-at.component';
import { ArrayAtComponent } from './array-at/array-at.component';
import { RegExpComponent } from './reg-exp/reg-exp.component';
import { ObjHasOwnComponent } from './obj-has-own/obj-has-own.component';

const routes: Routes = [
  {
    path: '',
    component: Es13Component,
    children: [
      { path: '', component: MainEs13Component },
      { path: 'string-at', component: StringAtComponent },
      { path: 'array-at', component: ArrayAtComponent },
      { path: 'reg-exp', component: RegExpComponent },
      { path: 'obj-has-own', component: ObjHasOwnComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Es13RoutingModule { }