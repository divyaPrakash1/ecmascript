import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Es11Component } from './es-11.component';

const routes: Routes = [{ path: '', component: Es11Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Es11RoutingModule { }
