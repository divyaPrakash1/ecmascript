import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Es15Component } from './es-15.component';
import { MainEs15Component } from './main-es-15/main-es-15.component';
import { MapGroupByComponent } from './map-group-by/map-group-by.component';
import { ObjectGroupByComponent } from './object-group-by/object-group-by.component';

const routes: Routes = [
  {
    path: '',
    component: Es15Component,
    children: [
      { path: '', component: MainEs15Component },
      { path: 'map-group-by', component: MapGroupByComponent },
      { path: 'object-group-by', component: ObjectGroupByComponent },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Es15RoutingModule { }
