import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { from, fromEvent, map, pluck, Subscription, toArray } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-pluck',
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.scss'
})
// Pluck operator only pluck Object property
export class PluckComponent implements OnInit, OnDestroy {


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

  subscribe1!: Subscription;
  subscribe2!: Subscription;
  subscribe3!: Subscription;
  constructor(private _common: CommonService) { }

  people = [
    {
      id: 1,
      name: 'Amit Sharma',
      contact: { email: 'amit.sharma@example.com', phone: '9876543210' }
    },
    {
      id: 2,
      name: 'Priya Mehra',
      contact: { email: 'priya.mehra@example.com', phone: '9876543211' }
    },
    {
      id: 3,
      name: 'Ravi Verma',
      contact: { email: 'ravi.verma@example.com', phone: '9876543212' }
    },
    {
      id: 4,
      name: 'Neha Gupta',
      contact: { email: 'neha.gupta@example.com', phone: '9876543213' }
    },
    {
      id: 5,
      name: 'Karan Malhotra',
      contact: { email: 'karan.malhotra@example.com', phone: '9876543214' }
    },
    {
      id: 6,
      name: 'Sneha Reddy',
      contact: { email: 'sneha.reddy@example.com', phone: '9876543215' }
    },
    {
      id: 7,
      name: 'Vikas Patil',
      contact: { email: 'vikas.patil@example.com', phone: '9876543216' }
    },
    {
      id: 8,
      name: 'Ritu Singh',
      contact: { email: 'ritu.singh@example.com', phone: '9876543217' }
    },
    {
      id: 9,
      name: 'Arjun Joshi',
      contact: { email: 'arjun.joshi@example.com', phone: '9876543218' }
    },
    {
      id: 10,
      name: 'Divya Nair',
      contact: { email: 'divya.nair@example.com', phone: '9876543219' }
    },
  ];


  data1: any = [];
  data2: any = [];

  ngOnInit(): void {

    // Ex - 01
    const cusObs1 = from(this.people);
    this.subscribe1 = cusObs1
      .pipe(
        // map(data => data.name), 
        pluck('name'), // it is same working as map wroking on above line
        toArray()
      )
      .subscribe(res => {
        console.log(res);
        this.data1 = res;
        this._common.print(res.toString(), 'elContainer1');
      })

    // Ex - 01
    const cusObs2 = from(this.people);
    this.subscribe1 = cusObs2
      .pipe(
        // pluck('email'), // [undefined, ... 10 times ]// as it is searching root level
        pluck('contact', 'email'), // [undefined, ... 10 times ]// as it is searching root level
        toArray()
      )
      .subscribe(res => {
        console.log(res);
        this.data2 = res;
        this._common.print(res.toString(), 'elContainer1');
      })
  }
  ngOnDestroy(): void {
    this.subscribe1.unsubscribe();
    // this.subscribe2.unsubscribe();
    // this.subscribe3.unsubscribe();
  }
}