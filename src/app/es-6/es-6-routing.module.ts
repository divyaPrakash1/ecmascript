import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { FindIndexComponent } from './find-index/find-index.component';
import { MathTruncComponent } from './math-trunc/math-trunc.component';
import { MathSignComponent } from './math-sign/math-sign.component';


const routes: Routes = [
  {
    path: '',
    component: ES6Component,
    children: [
      { path: '', component: MainES6Component, },
      { path: 'let', component: LetComponent, },
      { path: 'const', component: ConstKeyWordComponent, },
      { path: 'arrow-function', component: ArrowFunctionsComponent, },
      { path: 'destructuring', component: DestructuringComponent, },
      { path: 'array-destructuring', component: ArrayDestructuringComponent, },
      { path: 'spread-rest', component: SpreadAndRestOperatorComponent, },
      { path: 'for-of', component: ForOfComponent, },
      { path: 'classes', component: ClassesComponent, },
      { path: 'default-params', component: DefaultParamComponent, },
      { path: 'rest-params', component: FunctionRestParamComponent, },
      { path: 'includes', component: IncludesComponent, },
      { path: 'starts-with', component: StartsWithComponent, },
      { path: 'ends-with', component: EndsWithComponent, },
      { path: 'array-entries', component: ArrayEntriesComponent, },
      { path: 'array-from', component: ArrayFromComponent, },
      { path: 'array-keys', component: ArrayKeysComponent, },
      { path: 'array-find', component: ArrayFindComponent, },
      { path: 'array-find-index', component: FindIndexComponent, },
      { path: 'math-trunc', component: MathTruncComponent, },
      { path: 'math-sign', component: MathSignComponent, },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ES6RoutingModule { }
