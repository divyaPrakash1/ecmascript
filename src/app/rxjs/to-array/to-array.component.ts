import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-to-array',
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss'
})
export class ToArrayComponent implements OnInit, OnDestroy {

  obsMsg: any = {};
  subscription01!: Subscription;
  subscription02!: Subscription;
  subscription03!: Subscription;
  subscription11!: Subscription;
  subscription12!: Subscription;
  subscription13!: Subscription;

  users = [
    { name: 'Divya Prakash Mishra', skill: 'Angular' },
    { name: 'Tarun', skill: 'React' },
    { name: 'Sandeep', skill: 'Angular' },
    { name: 'Amendra', skill: 'None' },
  ]

  constructor(private _common: CommonService) { }


  // A function that returns an Observable that emits an array of items emitted by the source Observable when source completes.
  // Get all values inside an array when the source completes

  ngOnInit(): void {
    // this.example1();
    this.example2();
  }

  example1() {
    // Ex - 01
    const source = interval(1000);
    this.subscription01 = source.pipe(
      take(5),
      toArray()
    ).subscribe(res => {
      console.log(res);
      if (res.length > 9) {
        this.subscription01.unsubscribe();
      }
    });

    // Ex - 02
    const source2 = from(this.users);
    this.subscription02 = source2
      .pipe(
        toArray()
      )
      .subscribe(res => {
        console.log(res);
      });

    // Ex - 03 
    const source3 = of('Divya', 'Prakash', 'Mishra');
    this.subscription03 = source3
      .pipe(
        toArray()
      )
      .subscribe(res => {
        console.log(res);
      });
  }

  example2() {
    //Ex-01
    const obs1 = interval(1500);
    this.subscription11 = obs1.pipe(
      take(5),
      toArray()
    ).subscribe(res => {
      console.log('interval', res);
    });

    // Ex-02
    const obs2 = from(this.users);
    this.subscription12 = obs2.pipe(toArray()).subscribe(res => {
      console.log('from', res)
    });

    // Ex-03
    const obs3 = of('Divya', 'Prakash', 'Mishra');
    this.subscription13 = obs3.pipe(toArray()).subscribe(res => {
      console.log('of', res)
    });
  }




  ngOnDestroy(): void {
    if (this.subscription01) {
      this.subscription01.unsubscribe();
    }
    if (this.subscription02) {
      this.subscription02.unsubscribe();
    }
    if (this.subscription03) {
      this.subscription03.unsubscribe();
    }
    if (this.subscription11) {
      this.subscription11.unsubscribe();
    }
    if (this.subscription12) {
      this.subscription12.unsubscribe();
    }
    if (this.subscription13) {
      this.subscription13.unsubscribe();
    }
  }

}
