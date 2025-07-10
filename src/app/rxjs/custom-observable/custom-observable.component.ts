import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { CommanService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrl: './custom-observable.component.scss'
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  subscription!: Subscription

  constructor(private _common: CommanService) { }

  status: string = "";
  status1: string = "";
  names: string = "";
  ngOnInit(): void {
    // Ex - 01 Manual
    console.log('sssssssssssssssss');
    const cusObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Emit 1');
      }, 1000);
      setTimeout(() => {
        observer.next('Emit 2');
      }, 2000);
      setTimeout(() => {
        observer.next('Emit 3');
        // observer.error(new Error('Limit exceed'))

      }, 3000);
      setTimeout(() => {
        observer.next('Emit 4');
      }, 4000);
      setTimeout(() => {
        observer.next('Emit 5');
        observer.complete();
      }, 5000);

      // observer.error(new Error('Limit exceed'))
    })

    this.subscription = cusObs1.subscribe((res: any) => {
      console.log(res);
      this._common.print(res, 'elContainer1')
    },
      (error: any) => {
        this.status = "error";
      },
      () => {
        this.status = "completed";

      });

    // subscribe(data, error, completion)


    // Ex - 02 Custom Interval

    const cusObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        count++
        observer.next(count);
        if (count > 3) {
          observer.error(new Error('Dadda'));
        }
      }, 500);
    });

    this.subscription = cusObs2.subscribe((res: any) => {
      console.log(res);
      this._common.print(res, 'elContainer2')
      if (res > 3) {
        this.subscription.unsubscribe();
      }
    },
      (error: any) => {
        this.status1 = "error";
      },
      () => {
        this.status1 = "completed";

      });


    // Ex - 03 Custom Interval
    const arr = ['Divya', 'Prakash', 'Mishra', 'Agam', 'Prakash', 'Mishra'];
    const cusObs3 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        count++
        observer.next(arr[count]);
        if (count > 3) {
          observer.error(new Error('Dadda'));
        }
      }, 500);
    });

    this.subscription = cusObs3.subscribe((res: any) => {
      console.log(res);
      this.names = res;
      this._common.print(res, 'elContainer3')
      if (res > 3) {
        this.subscription.unsubscribe();
      }
    },
      (error: any) => {
        this.status1 = "error";
      },
      () => {
        this.status1 = "completed";

      });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}