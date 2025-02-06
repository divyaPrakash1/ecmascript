import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ES6Component } from './es-6.component';
import { MainES6Component } from './main-es6/main-es6.component';
import { LetComponent } from './let/let.component';
import { ConstKeyWordComponent } from './const-key-word/const-key-word.component';
import { ArrowFunctionsComponent } from './arrow-functions/arrow-functions.component';
import { DestructuringComponent } from './destructuring/destructuring.component';


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
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ES6RoutingModule { }
