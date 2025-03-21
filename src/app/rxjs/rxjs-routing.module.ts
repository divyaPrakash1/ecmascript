import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfAndFromComponent } from './of-and-from/of-and-from.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent,
    children: [
      { path: '', component: ObservableComponent },
      { path: 'promise', component: PromiseComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval-timer', component: IntervalTimerComponent },
      { path: 'of-and-from', component: OfAndFromComponent },
      { path: '**', redirectTo: 'promise' },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {}