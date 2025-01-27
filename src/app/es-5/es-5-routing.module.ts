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
import { ReduceRightComponent } from './reduce-right/reduce-right.component';
import { EveryComponent } from './every/every.component';
import { SomeComponent } from './some/some.component';
import { IndexOfComponent } from './index-of/index-of.component';
import { LastIndexOfComponent } from './last-index-of/last-index-of.component';
import { ParseComponent } from './parse/parse.component';



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
      {
        path: 'reduce-right',
        component: ReduceRightComponent,
      },
      {
        path: 'every',
        component: EveryComponent,
      },
      {
        path: 'some',
        component: SomeComponent,
      },
      {
        path: 'index-of',
        component: IndexOfComponent,
      },
      {
        path: 'last-index-of',
        component: LastIndexOfComponent,
      },
      {
        path: 'json-parse',
        component: ParseComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ES5RoutingModule { }
