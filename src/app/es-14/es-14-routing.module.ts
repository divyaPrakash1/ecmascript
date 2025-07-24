import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Es14Component } from './es-14.component';
import { MainEs14Component } from './main-es-14/main-es-14.component';
import { FindLastComponent } from './find-last/find-last.component';
import { FindLastIndexComponent } from './find-last-index/find-last-index.component';
import { ToReversedComponent } from './to-reversed/to-reversed.component';
import { ToSortedComponent } from './to-sorted/to-sorted.component';
import { ToSplicedComponent } from './to-spliced/to-spliced.component';
import { ArrayWithComponent } from './array-with/array-with.component';

const routes: Routes = [
  {
    path: '',
    component: Es14Component,
    children: [
      { path: '', component: MainEs14Component },
      { path: 'find-last', component: FindLastComponent },
      { path: 'find-last-index', component: FindLastIndexComponent },
      { path: 'to-reserved', component: ToReversedComponent },
      { path: 'to-sorted', component: ToSortedComponent },
      { path: 'to-spliced', component: ToSplicedComponent },
      { path: 'array-with', component: ArrayWithComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Es14RoutingModule { }
