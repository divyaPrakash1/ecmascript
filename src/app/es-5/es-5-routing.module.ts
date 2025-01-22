import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ES5Component } from './es-5.component';
import { MultilineStringComponent } from './multiline-string/multiline-string.component';
import { TrimComponent } from './trim/trim.component';
import { IsArrayComponent } from './is-array/is-array.component';
import { ForEachComponent } from './for-each/for-each.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { ReduceComponent } from './reduce/reduce.component';
import { MainES5Component } from './main-es5-component/main-es5.component';



const routes: Routes = [
  {
    path: '',
    component: ES5Component,
    children: [
      {
        path: '',
        component: MainES5Component,
      },
      {
        path: 'multiline-string',
        component: MultilineStringComponent,
      },
      {
        path: 'trim',
        component: TrimComponent,
      },
      {
        path: 'is-array',
        component: IsArrayComponent,
      },
      {
        path: 'for-each',
        component: ForEachComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
      {
        path: 'filter',
        component: FilterComponent,
      },
      {
        path: 'reduce',
        component: ReduceComponent,
      },
      // {
      //   path: 'map',
      //   component: TrimComponent,
      // },
      // {
      //   path: 'filter',
      //   component: IsArrayComponent,
      // },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ES5RoutingModule { }
