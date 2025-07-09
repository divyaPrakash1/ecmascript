import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';
import { CommanService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-to-array',
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss'
})
export class ToArrayComponent implements OnInit, OnDestroy {

  obsMsg: any = {};
  subscription!: Subscription;

  users = [
    { name: 'Divya Prakash Mishra', skill: 'Angular' },
    { name: 'Tarun', skill: 'React' },
    { name: 'Sandeep', skill: 'Angular' },
    { name: 'Amendra', skill: 'None' },
  ]

  constructor(private _common: CommanService) { }


  // A function that returns an Observable that emits an array of items emitted by the source Observable when source completes.
  // Get all values inside an array when the source completes

  ngOnInit(): void {
    // Ex - 01
    const source = interval(1000);
    this.subscription = source.pipe(
      take(5),
      toArray()
    ).subscribe(res => {
      console.log(res);
      if (res.length > 9) {
        this.subscription.unsubscribe();
      }
    });

    // Ex - 02
    const source2 = from(this.users);
    this.subscription = source2
      .pipe(
        toArray()
      )
      .subscribe(res => {
        console.log(res);
      });

    // Ex - 03 
    const source3 = of('Divya', 'Prakash', 'Mishra');
    this.subscription = source3
      .pipe(
        toArray()
      )
      .subscribe(res => {
        console.log(res);
      });

  }




  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
