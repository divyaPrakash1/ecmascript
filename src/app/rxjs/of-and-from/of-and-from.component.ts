import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../service/comman.service';
import { from, of, Subscription } from 'rxjs';

@Component({
  selector: 'ecmspt-of-and-from',
  templateUrl: './of-and-from.component.html',
  styleUrl: './of-and-from.component.scss'
})
export class OfAndFromComponent implements OnInit, OnDestroy {

  obsMsg: any = {};
  subscription!: Subscription;
  subscription1!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;
  subscription4!: Subscription;
  subscription5!: Subscription;
  constructor(private _common: CommonService) { }


  ngOnInit(): void {
    // this.example1();
    this.example2();
  }

  example1() {
    // Of operator accepts object, string and return observable

    // Of

    const obs1 = of('Divya', 'Prakash', 'Mishra');
    this.subscription = obs1.subscribe(res => {
      this._common.print(res, 'elContainer');
    })

    const obs2 = of({ a: 'Divya', b: 'Prakash', c: 'Mishra' });
    this.subscription = obs2.subscribe(res => {
      console.log(res);
      this.obsMsg = res;
      this._common.print(JSON.stringify(res), 'elContainer1');
    })

    // From operator accepts Array, Promise, String and return observable
    // From - Array
    const arr = ['Divya', 'Prakash', 'Mishra'];
    const obs3 = from(arr);
    this.subscription = obs3.subscribe(res => {
      // this.obsMsg = res;
      console.log(res);
      this._common.print(res, 'elContainer2');
    });

    // From - Promise
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise Resolve')
      }, 3000)
    });

    const obs4 = from(promise);
    this.subscription = obs4.subscribe((res: any) => {
      // this.obsMsg = res;
      console.log(res);
      this._common.print(res, 'elContainer3');
    });

    // From - string
    const str = 'this is test str';
    const obs5 = from(str);
    this.subscription = obs5.subscribe((res: any) => {
      // this.obsMsg = res;
      console.log(res);
      this._common.print(res, 'elContainer4');
    });
  }


  example2() {// of string, Obejct
    const obs = of('this', 'is', 'test', 'string');
    this.subscription1 = obs.subscribe(res => {
      console.log(res);
    });

    const obs1 = of({ a: 1, b: 2, c: 3, d: 4 });
    this.subscription2 = obs1.subscribe(res => {
      console.log(res);
    });


    // from array, string, promise
    const obs2 = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 6, 5, 4, 3]);
    this.subscription3 = obs2.subscribe(res => {
      console.log(res);
    });

    const obs3 = from('this is the string that will pass to from operator');
    this.subscription4 = obs3.subscribe(res => {
      console.log(res);
    });

    const prms = new Promise((resolve, rejects) => {
      resolve('Dadda');
    })

    const obs4 = from(prms);
    this.subscription5 = obs4.subscribe(res => {
      console.log(res);
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
    if (this.subscription3) {
      this.subscription3.unsubscribe();
    }
    if (this.subscription4) {
      this.subscription4.unsubscribe();
    }
    if (this.subscription5) {
      this.subscription5.unsubscribe();
    }
  }

}
