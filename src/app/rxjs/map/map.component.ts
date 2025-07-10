import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { HostListener } from '@angular/core';
import { CommanService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})



export class MapComponent implements OnInit, OnDestroy {
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event) {
    if (this.subscribe1) {
      this.subscribe1.unsubscribe();
    }
    if (this.subscribe2) {
      this.subscribe2.unsubscribe();
    }
    if (this.subscribe3) {
      this.subscribe3.unsubscribe();
    }
  }
  constructor(private _common: CommanService) { }

  subscribe1!: Subscription;
  subscribe2!: Subscription;
  subscribe3!: Subscription;

  msg1: string = "";
  msg2: string = "";
  msg3: string = "";

  ngOnInit(): void {
    // Ex - 01

    const broadcastVideo = interval(1000);
    this.subscribe1 = broadcastVideo
      .pipe(
        map(data => {
          if (data > 10) {
            this.subscribe1.unsubscribe()
          }
          return "Data " + data
          // console.log()
          // return data
        })
      )
      .subscribe(res => {
        // console.log(res);
        this.msg1 = res;
      });

    setTimeout(() => {
      this.subscribe1.unsubscribe();
    }, 10000)

    // Ex - 02

    const broadcastVideo3 = interval(1000);
    this.subscribe3 = broadcastVideo3
      .pipe(
        map(data => {
          if (data > 10) {
            this.subscribe3.unsubscribe()
          }
          return "Data " + data * 10
          // console.log()
          // return data
        })
      )
      .subscribe(res => {
        // console.log(res);
        this.msg3 = res;
      });
    // Ex - 02

    const people = from([
      { id: 1, name: 'Amit Sharma' },
      { id: 2, name: 'Priya Mehra' },
      { id: 3, name: 'Ravi Verma' },
      { id: 4, name: 'Neha Gupta' },
      { id: 5, name: 'Karan Malhotra' },
      { id: 6, name: 'Sneha Reddy' },
      { id: 7, name: 'Vikas Patil' },
      { id: 8, name: 'Ritu Singh' },
      { id: 9, name: 'Arjun Joshi' },
      { id: 10, name: 'Divya Nair' },
    ]);


    this.subscribe3 = people
      .pipe(map(data => data.name))
      .subscribe(res => {
        console.log(res);
        this.msg3 = res;
        this._common.print(res, 'elContainer')
      });

  }


  ngOnDestroy(): void {
    this.subscribe1.unsubscribe()
    this.subscribe2.unsubscribe()
    this.subscribe3.unsubscribe()
  }

}
