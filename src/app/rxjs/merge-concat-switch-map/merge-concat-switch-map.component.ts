import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, map, switchAll, switchMap, Observable, of, delay, mergeMap, concatMap } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-merge-concat-switch-map',
  templateUrl: './merge-concat-switch-map.component.html',
  styleUrl: './merge-concat-switch-map.component.scss'
})
export class MergeConcatSwitchMapComponent implements OnInit, OnDestroy {

  constructor(private _common: CommonService) {

  }


  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News']);

    // Tech Video Uploaded
    // Comedy Video Uploaded
    // News Video Uploaded

    //Ex - 01 | MergeMap
    // If every new observale needs to be flat, and every new obervable needs to be subscribe and show then use mergeMap
    source
      .pipe(
        mergeMap(r => this.getData(r))
      )
      .subscribe(res => {
        this._common.print(res.toString(), 'elContainer1');
      })


    //Ex - 02 | ConcatMap
    // If order matters for subscription, and request and responce should be in same queue and show then use ConcatMap

    source
      .pipe(
        concatMap(res => this.getData(res)))
      .subscribe(res => {
        this._common.print(res.toString(), 'elContainer2');
      });

    // Ex - 03 | SwitchMap
    // If previous emission needs to be unsubscribe and only latest emition needed then use SwitchMap

    source
      .pipe(
        switchMap(res => this.getData(res)),
      )
      .subscribe(res => {
        this._common.print(res.toString(), 'elContainer3');
      });
  }

  getData(data: string): Observable<any> { // returns observable
    return of(data + ' Video Uploaded').pipe(delay(5000));
  }

  ngOnDestroy(): void {

  }

}

