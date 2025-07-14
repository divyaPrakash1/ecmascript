import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';
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
import { RetryRetryWhenScanDelayComponent } from './retry-retry-when-scan-delay/retry-retry-when-scan-delay.component';
import { DebounceTimeDistinctUntillChangedComponent } from './debounce-time-distinct-untill-changed/debounce-time-distinct-untill-changed.component';
import { SubjectAndBehaviourSubjectComponent } from './subject-and-behaviour-subject/subject-and-behaviour-subject.component';
import { Comp1Component } from './subject-and-behaviour-subject/components/comp1/comp1.component';
import { Comp2Component } from './subject-and-behaviour-subject/components/comp2/comp2.component';
import { Comp3Component } from './subject-and-behaviour-subject/components/comp3/comp3.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';

@NgModule({
  declarations: [
    RxjsComponent,
    ObservableComponent,
    PromiseComponent,
    AsyncAwaitComponent,
    FromEventComponent,
    IntervalTimerComponent,
    OfAndFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeOpComponent,
    RetryRetryWhenScanDelayComponent,
    DebounceTimeDistinctUntillChangedComponent,
    SubjectAndBehaviourSubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
