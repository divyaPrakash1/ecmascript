import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {
  items: Array<{ title: string, link: string }> = [
    { title: 'Promise', link: 'promise' },
    { title: 'From Event', link: 'from-event' },
    { title: 'Interval Timer', link: 'interval-timer' },
    { title: 'Of And From', link: 'of-and-from' },
    { title: 'toArray', link: 'to-array' },
    { title: 'Custom Observable', link: 'custum-observable' },
    { title: 'Map', link: 'map' },
    { title: 'Pluck', link: 'pluck' },
    { title: 'Filter', link: 'filter' },
    { title: 'Tap', link: 'tap' },
    { title: 'Take, TakeLast, TakeUntill', link: 'take' },
    { title: 'Retry, Scan, Delay', link: 'retry' },
    { title: 'DebounceTime, DistinctUntilChanged', link: 'debounce-time' },
    { title: 'Subject, Behaviour Subject', link: 'subject-behaviour-subject' },
    { title: 'ReplaySubject', link: 'replay-subject' },
    { title: 'AsyncSubject', link: 'async-subject' },
    { title: 'Concat Operator', link: 'concat-op' },
    { title: 'Merge Operator', link: 'merge-op' },
    { title: 'MergeMap', link: 'merge-map' },
    { title: 'ConcatMap', link: 'concat-map' },
    { title: 'SwitchMap', link: 'switch-map' },
    { title: 'Merge, Concat and SwitchMap', link: 'merge-concat-switch-map' },
    { title: 'SwitchMap Example - 2', link: 'switch-map-2' },
    { title: 'ExhaustMap', link: 'exhaust-map' },
    { title: 'ShareReplay', link: 'share-replay' },
  ];
  constructor() { }
  ngOnInit(): void {

  }

  // Observalble Stream -
  // - User Input(Button click event)
  // - Http request
  // - Array 
  // - Object

  // Observable Hanlder -
  // - Data
  // - Error
  // - Completion
  // .subscribe(
  //   (data) => console.log(data),
  //   (error) => console.log(error),
  //   () => console.log(data), // completion
  // )

}
