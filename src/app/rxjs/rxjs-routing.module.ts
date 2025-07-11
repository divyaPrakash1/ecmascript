import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfAndFromComponent } from './of-and-from/of-and-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeOpComponent } from './take-op/take-op.component';

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
      { path: 'to-array', component: ToArrayComponent },
      { path: 'custum-observable', component: CustomObservableComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeOpComponent },
      { path: '**', redirectTo: 'promise' },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }