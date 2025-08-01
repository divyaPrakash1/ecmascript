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
import { StringifyComponent } from './stringify/stringify.component';
import { DateNowComponent } from './date-now/date-now.component';
import { DateToISOStringComponent } from './date-to-isostring/date-to-isostring.component';
import { DateTOJSONComponent } from './date-tojson/date-tojson.component';
import { GetterSetterComponent } from './getter-setter/getter-setter.component';
import { ReservedWordsComponent } from './reserved-words/reserved-words.component';
import { ObjectCreateComponent } from './object-create/object-create.component';
import { ObjectKeysComponent } from './object-keys/object-keys.component';
import { ObjectManagementComponent } from './object-management/object-management.component';
import { ObjectProtectionComponent } from './object-protection/object-protection.component';
import { ObjectDefinePropertyComponent } from './object-define-property/object-define-property.component';
import { BindComponent } from './bind/bind.component';
import { TrailingCommaComponent } from './trailing-comma/trailing-comma.component';



const routes: Routes = [
  {
    path: '',
    component: ES5Component,
    children: [
      { path: '', component: MainES5Component, },
      { path: 'multiline-string', component: MultilineStringComponent, },
      { path: 'trim', component: TrimComponent, },
      { path: 'is-array', component: IsArrayComponent, },
      { path: 'for-each', component: ForEachComponent, },
      { path: 'map', component: MapComponent, },
      { path: 'filter', component: FilterComponent, },
      { path: 'reduce', component: ReduceComponent, },
      { path: 'reduce-right', component: ReduceRightComponent, },
      { path: 'every', component: EveryComponent, },
      { path: 'some', component: SomeComponent, },
      { path: 'index-of', component: IndexOfComponent, },
      { path: 'last-index-of', component: LastIndexOfComponent, },
      { path: 'json-parse', component: ParseComponent, },
      { path: 'json-stringify', component: StringifyComponent, },
      { path: 'date-now', component: DateNowComponent, },
      { path: 'date-to-iso-string', component: DateToISOStringComponent, },
      { path: 'date-to-json', component: DateTOJSONComponent, },
      { path: 'getter-setter', component: GetterSetterComponent, },
      { path: 'reserved-words', component: ReservedWordsComponent, },
      { path: 'object-create', component: ObjectCreateComponent, },
      { path: 'object-keys', component: ObjectKeysComponent, },
      { path: 'object-management', component: ObjectManagementComponent, },
      { path: 'object-protection', component: ObjectProtectionComponent, },
      { path: 'object-define-property', component: ObjectDefinePropertyComponent, },
      { path: 'bind', component: BindComponent, },
      { path: 'trailing-comma', component: TrailingCommaComponent, },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ES5RoutingModule { }
