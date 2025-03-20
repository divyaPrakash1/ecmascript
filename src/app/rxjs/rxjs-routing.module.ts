import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent,
    children: [
      { path: '', component: ObservableComponent },
      { path: 'promise', component: PromiseComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval-timer', component: IntervalTimerComponent },
      { path: '**', redirectTo: 'promise' },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {}