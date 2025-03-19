import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { RxjsMainComponent } from './rxjs-main/rxjs-main.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent,
    children: [
      { path: '', component: RxjsMainComponent },
      { path: 'promise', component: PromiseComponent },
      { path: '**', redirectTo: 'promise' },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {}