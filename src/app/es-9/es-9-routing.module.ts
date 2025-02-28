import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainEs9Component } from './main-es-9/main-es-9.component';
import { Es9Component } from './es-9.component';
import { ObjectRestPropsComponent } from './object-rest-props/object-rest-props.component';
import { NewRegExFeatureComponent } from './new-reg-ex-feature/new-reg-ex-feature.component';


const routes: Routes = [
  {
    path: '',
    component: Es9Component,
    children: [
      { path: '', component: MainEs9Component, },
      { path: 'object-rest-props', component: ObjectRestPropsComponent, },
      { path: 'new-reg-ex-feature', component: NewRegExFeatureComponent, },
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Es9RoutingModule { }
