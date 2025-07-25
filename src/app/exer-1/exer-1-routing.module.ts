import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exer1Component } from './exer-1.component';
import { MainExer1Component } from './main-exer-1/main-exer-1.component';
import { Common1Component } from './common-1/common-1.component';
import { Common2Component } from './common-2/common-2.component';
import { Common3Component } from './common-3/common-3.component';


const routes: Routes = [
  {
    path: '',
    component: Exer1Component,
    children: [
      { path: '', component: MainExer1Component, },
      { path: 'common-1', component: Common1Component, },
      { path: 'common-2', component: Common2Component, },
      { path: 'common-3', component: Common3Component, },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exer1RoutingModule { }
