import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, pluck, toArray, map, take, from, takeLast, takeUntil, timer, fromEvent } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-take-op',
  templateUrl: './take-op.component.html',
  styleUrl: './take-op.component.scss'
})
// take op takes mentioned elements from the starting of the stream
// takeLast op takes mentioned elements from the last of the stream
// takeUntill op takes mentioned elements till the mentioned condition of the stream (it accepts observable)
export class TakeOpComponent implements OnInit, OnDestroy {


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

  subscribe1!: Subscription;
  subscribe2!: Subscription;
  subscribe3!: Subscription;
  subscribe4!: Subscription;
  subscribe5!: Subscription;
  subscribe6!: Subscription;
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
  colors = [
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Purple',
    'Orange',
    'Pink',
    'Brown',
    'Black',
    'White'
  ];

  ngOnInit(): void {
    // this.example1();
    this.example2();


  }

  example1() {
    // Ex - 01 take()
    const source1 = from(this.colors)
    this.subscribe1 = source1.pipe(take(5)).subscribe(res => {
      console.log(res);
      this._common.print(res, 'elContainer1')
    })

    // Ex - 02 takeLast()
    const source2 = from(this.colors)
    this.subscribe2 = source2.pipe(takeLast(2)).subscribe(res => {
      console.log(res);
      this._common.print(res, 'elContainer2')
    })

    // Ex - 03 takeUntill()
    if (typeof document !== 'undefined') {
      const condition1 = timer(5000);
      const condition2 = fromEvent(document, 'click');
      const source3 = interval(1000);
      this.subscribe3 = source3.pipe(
        map(res => 'Number ' + res),
        // takeUntil(condition1) // it will unsubscribe after 5 seconds
        takeUntil(condition2) // it will unsubscribe when user click on page
      ).subscribe(res => {
        console.log(res);
        this._common.print(res + "", 'elContainer3')
      })
    }
  }


  example2() {
    const obs1 = from(this.people);
    this.subscribe4 = obs1.pipe(take(4), toArray()).subscribe(res => {
      console.log('take 4', res)
    });


    this.subscribe4 = obs1.pipe(takeLast(4), toArray()).subscribe(res => {
      console.log('takeLast 4', res)
    });


    const obs2Timer = timer(10000);
    this.subscribe4 = obs1.pipe(takeUntil(obs2Timer), toArray()).subscribe(res => {
      console.log('takeUntil 10 seconds', res)
    });

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