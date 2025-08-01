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
import { RetryRetryWhenScanDelayComponent } from './retry-retry-when-scan-delay/retry-retry-when-scan-delay.component';
import { DebounceTimeDistinctUntillChangedComponent } from './debounce-time-distinct-untill-changed/debounce-time-distinct-untill-changed.component';
import { SubjectAndBehaviourSubjectComponent } from './subject-and-behaviour-subject/subject-and-behaviour-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatOpComponent } from './concat-op/concat-op.component';
import { MergeOpComponent } from './merge-op/merge-op.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeConcatSwitchMapComponent } from './merge-concat-switch-map/merge-concat-switch-map.component';
import { SwitchMap2Component } from './switch-map2/switch-map2.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ZipAndForkJoinComponent } from './zip-and-fork-join/zip-and-fork-join.component';
import { CatchErrorAndThrowErrorComponent } from './catch-error-and-throw-error/catch-error-and-throw-error.component';

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
      { path: 'retry', component: RetryRetryWhenScanDelayComponent },
      { path: 'debounce-time', component: DebounceTimeDistinctUntillChangedComponent },
      { path: 'subject-behaviour-subject', component: SubjectAndBehaviourSubjectComponent },
      { path: 'replay-subject', component: ReplaySubjectComponent },
      { path: 'async-subject', component: AsyncSubjectComponent },
      { path: 'concat-op', component: ConcatOpComponent },
      { path: 'merge-op', component: MergeOpComponent },
      { path: 'merge-map', component: MergeMapComponent },
      { path: 'concat-map', component: ConcatMapComponent },
      { path: 'switch-map', component: SwitchMapComponent },
      { path: 'merge-concat-switch-map', component: MergeConcatSwitchMapComponent },
      { path: 'switch-map-2', component: SwitchMap2Component },
      { path: 'exhaust-map', component: ExhaustMapComponent },
      { path: 'share-replay', component: ShareReplayComponent },
      { path: 'combine-latest', component: CombineLatestComponent },
      { path: 'zip-forkjoin', component: ZipAndForkJoinComponent },
      { path: 'catch-throw-error', component: CatchErrorAndThrowErrorComponent },
      { path: '**', redirectTo: 'promise' },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }