import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ES5RoutingModule } from './es-5-routing.module';
import { ES5Component } from './es-5.component';
import { MainES5Component } from './main-es5-component/main-es5.component';
import { ReduceRightComponent } from './reduce-right/reduce-right.component';
import { CharAtComponent } from './char-at/char-at.component';
import { FilterComponent } from './filter/filter.component';
import { ForEachComponent } from './for-each/for-each.component';
import { IsArrayComponent } from './is-array/is-array.component';
import { MapComponent } from './map/map.component';
import { MultilineStringComponent } from './multiline-string/multiline-string.component';
import { ReduceComponent } from './reduce/reduce.component';
import { TrimComponent } from './trim/trim.component';
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



@NgModule({
  declarations: [
    ES5Component,
    MainES5Component,
    ReduceRightComponent,
    CharAtComponent,
    FilterComponent,
    ForEachComponent,
    IsArrayComponent,
    MapComponent,
    MultilineStringComponent,
    ReduceComponent,
    TrimComponent,
    EveryComponent,
    SomeComponent,
    IndexOfComponent,
    LastIndexOfComponent,
    ParseComponent,
    StringifyComponent,
    DateNowComponent,
    DateToISOStringComponent,
    DateTOJSONComponent,
    GetterSetterComponent,
    ReservedWordsComponent,
  ],
  imports: [
    CommonModule,
    ES5RoutingModule,
    
  ]
})
export class ES5Module { }