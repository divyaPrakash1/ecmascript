import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrl: './interval-timer.component.scss'
})
export class IntervalTimerComponent implements OnInit, AfterViewInit, OnDestroy {
  obsMsg: string = '';
  subscription!: Subscription;
  subscription1!: Subscription;
  subscription2!: Subscription;
  constructor(private _common: CommonService) { }
  ngOnInit(): void {
    // this.example1();
    // this.example2();

  }

  example1() {
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

  ngAfterViewInit(): void {
    this.example2();
  }

  example2() {
    const subs = interval(1500);
    this.subscription2 = subs.subscribe(res => {
      console.log(res);
      this.print1(res, 'elCon1');
      if (res > 10) {
        this.subscription2.unsubscribe();
      }
    });
  }

  example3() {
    const subs = timer(5000, 100);
    this.subscription1 = subs.subscribe(res => {
      this.print1(res, 'elCon2');
      if (res > 15) {
        this.subscription1.unsubscribe();
      }
    })
  }



  print1(value: any, id: string) {
    if (typeof document !== undefined) {
      let el = document.createElement('li');
      el.innerText = value;
      document.getElementById(id)?.appendChild(el);
    }
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
