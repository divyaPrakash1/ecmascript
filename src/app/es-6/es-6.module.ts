import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ES6RoutingModule } from './es-6-routing.module';
import { ES6Component } from './es-6.component';
import { MainES6Component } from './main-es6/main-es6.component';
import { LetComponent } from './let/let.component';
import { ConstKeyWordComponent } from './const-key-word/const-key-word.component';
import { ArrowFunctionsComponent } from './arrow-functions/arrow-functions.component';
import { DestructuringComponent } from './destructuring/destructuring.component';
import { ArrayDestructuringComponent } from './array-destructuring/array-destructuring.component';
import { SpreadAndRestOperatorComponent } from './spread-and-rest-operator/spread-and-rest-operator.component';
import { ForOfComponent } from './for-of/for-of.component';
import { ClassesComponent } from './classes/classes.component';
import { DefaultParamComponent } from './default-param/default-param.component';
import { FunctionRestParamComponent } from './function-rest-param/function-rest-param.component';
import { IncludesComponent } from './includes/includes.component';
import { StartsWithComponent } from './starts-with/starts-with.component';
import { EndsWithComponent } from './ends-with/ends-with.component';
import { ArrayEntriesComponent } from './array-entries/array-entries.component';
import { ArrayFromComponent } from './array-from/array-from.component';
import { ArrayKeysComponent } from './array-keys/array-keys.component';
import { ArrayFindComponent } from './array-find/array-find.component';


@NgModule({
  declarations: [
    ES6Component,
    MainES6Component,
    LetComponent,
    ConstKeyWordComponent,
    ArrowFunctionsComponent,
    DestructuringComponent,
    ArrayDestructuringComponent,
    SpreadAndRestOperatorComponent,
    ForOfComponent,
    ClassesComponent,
    DefaultParamComponent,
    FunctionRestParamComponent,
    IncludesComponent,
    StartsWithComponent,
    EndsWithComponent,
    ArrayEntriesComponent,
    ArrayFromComponent,
    ArrayKeysComponent,
    ArrayFindComponent
    
  ],
  imports: [
    CommonModule,
    ES6RoutingModule,
    
  ]
})
export class ES6Module { }