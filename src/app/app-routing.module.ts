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
    path: 'exer-1',
    loadChildren: () => import('./exer-1/exer-1.module').then(m => m.Exer1Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }