import { NgModule } from '@angular/core';
import { MainEs10Component } from './main-es-10/main-es-10.component';
import { RouterModule, Routes } from '@angular/router';
import { Es10Component } from './es-10.component';
import { StringTrimStartComponent } from './string-trim-start/string-trim-start.component';
import { StringTrimEndComponent } from './string-trim-end/string-trim-end.component';

const routes: Routes = [
  {
    path: '',
    component: Es10Component,
    children: [
      { path: '', component: MainEs10Component },
      { path: 'trim-starts', component: StringTrimStartComponent },
      { path: 'trim-end', component: StringTrimEndComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ES10RoutingModule {

}