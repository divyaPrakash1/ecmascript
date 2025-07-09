import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { CommanService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrl: './interval-timer.component.scss'
})
export class IntervalTimerComponent implements OnInit, OnDestroy {
  obsMsg: string = '';
  subscription!: Subscription;
  constructor(private _common: CommanService) { }
  ngOnInit(): void {
    // const broadCasteVideo = interval(1000);
    // timer(delay, interval);
    const broadCasteVideo = timer(3500, 1500); // First argument is delay time (after that time, timer will start, second argument is interval) 
    this.subscription = broadCasteVideo.subscribe(res => {
      // console.log(res);
      this.obsMsg = `Video : ${res + 1}`;
      this._common.print(this.obsMsg, 'elContainer1');
      this._common.print(this.obsMsg, 'elContainer2');
      this._common.print(this.obsMsg, 'elContainer3');
      if (res >= 5) {
        this.subscription.unsubscribe();
      }
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
