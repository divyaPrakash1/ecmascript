import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Es12Component } from './es-12.component';
import { MainEs12Component } from './main-es-12/main-es-12.component';
import { StrReplaceAllComponent } from './str-replace-all/str-replace-all.component';


const routes: Routes = [
  {
    path: '',
    component: Es12Component,
    children: [
      { path: '', component: MainEs12Component },
      { path: 'string-replaceall', component: StrReplaceAllComponent },
      // { path: 'numeric-separators', component: StringMatchAllComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Es12RoutingModule { }
