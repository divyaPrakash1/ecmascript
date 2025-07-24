import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.scss'
})
// in asyncsubject value keeps on emitted and subscribe, only last value will get to subscriber once cubscription will complete by the subscriber
// in short emits last value on completion.
export class AsyncSubjectComponent implements OnInit, OnDestroy {


  asyncVideoEmit: string = "";

  asyncVideoEmitRevise: string = "";
  constructor(private _common: CommonService) {

  }

  ngOnInit(): void {

    this._common.asyncVideoEmit.subscribe(res => {
      console.log(res);
      this.asyncVideoEmit = res;
    })

    this._common.asyncVideoEmitRevise.subscribe(res => {
      this.asyncVideoEmitRevise = res;
    })
  }


  getData(video: string) {
    console.log(video);
    this._common.asyncVideoEmit.next(video);
  }


  addData(video: string) {
    this._common.asyncVideoEmitRevise.next(video);
  }


  onComplete() {
    this._common.asyncVideoEmit.complete();
  }

  onComplete1() {
    this._common.asyncVideoEmitRevise.complete();
  }

  ngOnDestroy(): void {
    this._common.videoEmit.next("");
  }

}
