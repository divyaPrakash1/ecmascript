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
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ES6RoutingModule { }
