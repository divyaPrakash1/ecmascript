import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, map, Subscription, toArray } from 'rxjs';
import { HostListener } from '@angular/core';
import { CommonService } from '../service/comman.service';

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
    if (this.subscribe4) {
      this.subscribe4.unsubscribe();
    }
    if (this.subscribe5) {
      this.subscribe5.unsubscribe();
    }
    if (this.subscribe6) {
      this.subscribe6.unsubscribe();
    }
  }
  constructor(private _common: CommonService) { }

  subscribe1!: Subscription;
  subscribe2!: Subscription;
  subscribe3!: Subscription;
  subscribe4!: Subscription;
  subscribe5!: Subscription;
  subscribe6!: Subscription;

  msg1: string = "";
  msg2: string = "";
  msg3: string = "";

  ngOnInit(): void {

    // this.example1();
    this.example2();


  }

  example1() {
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

    // Ex - 03
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

  data = [
    { id: 1, name: "Item 1", value: 10 },
    { id: 2, name: "Item 2", value: 20 },
    { id: 3, name: "Item 3", value: 30 },
    { id: 4, name: "Item 4", value: 40 },
    { id: 5, name: "Item 5", value: 50 },
    { id: 6, name: "Item 6", value: 60 },
    { id: 7, name: "Item 7", value: 70 },
    { id: 8, name: "Item 8", value: 80 },
    { id: 9, name: "Item 9", value: 90 },
    { id: 10, name: "Item 10", value: 100 },
  ];


  example2() {
    // Ex-01
    const obs1 = from(this.data)
    this.subscribe4 = obs1.pipe(
      map(r => {
        return { naam: r.name, val: r.value }
      }),
      toArray(),
    ).subscribe(res => {
      console.log("map", res);
    })
  }




  ngOnDestroy(): void {
    if (this.subscribe1) {
      this.subscribe1.unsubscribe();
    }
    if (this.subscribe2) {
      this.subscribe2.unsubscribe();
    }
    if (this.subscribe3) {
      this.subscribe3.unsubscribe();
    }
    if (this.subscribe4) {
      this.subscribe4.unsubscribe();
    }
    if (this.subscribe5) {
      this.subscribe5.unsubscribe();
    }
    if (this.subscribe6) {
      this.subscribe6.unsubscribe();
    }
  }

}
