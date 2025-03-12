import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'es-5',
    loadChildren: () => import('./es-5/es-5.module').then(m => m.ES5Module)
  },
  {
    path: 'es-6',
    loadChildren: () => import('./es-6/es-6.module').then(m => m.ES6Module)
  },
  {
    path: 'js-2016',
    loadChildren: () => import('./es-7/es-7.module').then(m => m.ES7Module)
  },
  {
    path: 'js-2017',
    loadChildren: () => import('./es-8/es-8.module').then(m => m.ES8Module)
  },
  {
    path: 'js-2018',
    loadChildren: () => import('./es-9/es-9.module').then(m => m.ES9Module)
  },
  {
    path: 'js-2019',
    loadChildren: () => import('./es-10/es-10.module').then(m => m.ES10Module)
  },
  {
    path: 'js-2020',
    loadChildren: () => import('./es-11/es-11.module').then(m => m.ES11Module)
  },
  {
    path: 'js-2021',
    loadChildren: () => import('./es-12/es-12.module').then(m => m.ES12Module)
  },

  {
    path: 'exer-1',
    loadChildren: () => import('./exer-1/exer-1.module').then(m => m.Exer1Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }