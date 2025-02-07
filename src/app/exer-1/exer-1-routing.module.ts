import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exer1Component } from './exer-1.component';
import { MainExer1Component } from './main-exer-1/main-exer-1.component';
import { Common1Component } from './common-1/common-1.component';


const routes: Routes = [
  {
    path: '',
    component: Exer1Component,
    children: [
      { path: '', component: MainExer1Component, },
      { path: 'common', component: Common1Component, },
      // { path: 'const', component: ConstKeyWordComponent, },
      // { path: 'arrow-function', component: ArrowFunctionsComponent, },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exer1RoutingModule { }
