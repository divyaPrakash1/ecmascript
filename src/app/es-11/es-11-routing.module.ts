import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Es11Component } from './es-11.component';
import { MainEs11Component } from './main-es-11/main-es-11.component';
import { BigintComponent } from './bigint/bigint.component';
import { StringMatchAllComponent } from './string-match-all/string-match-all.component';
import { NullishCoalescingComponent } from './nullish-coalescing/nullish-coalescing.component';

const routes: Routes = [
  {
    path: '',
    component: Es11Component,
    children: [
      { path: '', component: MainEs11Component },
      { path: 'bigint', component: BigintComponent },
      { path: 'string-match-all', component: StringMatchAllComponent },
      { path: 'nullish-coalescing', component: NullishCoalescingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Es11RoutingModule { }
