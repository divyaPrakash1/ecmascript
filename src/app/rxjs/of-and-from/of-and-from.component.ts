import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommanService } from '../service/comman.service';
import { from, of, Subscription } from 'rxjs';

@Component({
  selector: 'ecmspt-of-and-from',
  templateUrl: './of-and-from.component.html',
  styleUrl: './of-and-from.component.scss'
})
export class OfAndFromComponent implements OnInit, OnDestroy {
  
  obsMsg: any = {};
  subscription!: Subscription;
  constructor(private _common: CommanService) { }


  ngOnInit(): void {
    // Of operator accepts object, string and return observable

    // Of

    const obs1 = of('Divya', 'Prakash', 'Mishra');
    this.subscription = obs1.subscribe(res => {
      console.log(res);
      this._common.print(res, 'elContainer');
    });

    const obs2 = of({a:'Divya', b:'Prakash', c:'Mishra'});
    this.subscription = obs2.subscribe(res => {
      this.obsMsg = res;
      console.log(res);
      // this._common.print(res, 'elContainer');
    });

    // From operator accepts Array, Promise, String and return observable

    // From - Array
    const arr = ['Divya', 'Prakash', 'Mishra'];
    const obs3 = from(arr);
    this.subscription = obs3.subscribe(res => {
      this.obsMsg = res;
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
