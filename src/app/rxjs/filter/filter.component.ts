import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { filter, from, interval, map, Subscription, toArray } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit, OnDestroy {
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

  data1: any = []
  data2: any = []
  data3: any = []


  people = [
    {
      id: 1,
      name: 'Amit Sharma',
      gender: 'Male',
      contact: { email: 'amit.sharma@example.com', phone: '9876543210' }
    },
    {
      id: 2,
      name: 'Priya Mehra',
      gender: 'Female',
      contact: { email: 'priya.mehra@example.com', phone: '9876543211' }
    },
    {
      id: 3,
      name: 'Ravi Verma',
      gender: 'Male',
      contact: { email: 'ravi.verma@example.com', phone: '9876543212' }
    },
    {
      id: 4,
      name: 'Neha Gupta',
      gender: 'Female',
      contact: { email: 'neha.gupta@example.com', phone: '9876543213' }
    },
    {
      id: 5,
      name: 'Karan Malhotra',
      gender: 'Male',
      contact: { email: 'karan.malhotra@example.com', phone: '9876543214' }
    },
    {
      id: 6,
      name: 'Sneha Reddy',
      gender: 'Female',
      contact: { email: 'sneha.reddy@example.com', phone: '9876543215' }
    },
    {
      id: 7,
      name: 'Vikas',
      gender: 'Male',
      contact: { email: 'vikas.patil@example.com', phone: '9876543216' }
    },
    {
      id: 8,
      name: 'Ritu Singh',
      gender: 'Female',
      contact: { email: 'ritu.singh@example.com', phone: '9876543217' }
    },
    {
      id: 9,
      name: 'Arjun',
      gender: 'Male',
      contact: { email: 'arjun.joshi@example.com', phone: '9876543218' }
    },
    {
      id: 10,
      name: 'Divya Nair',
      gender: 'Female',
      contact: { email: 'divya.nair@example.com', phone: '9876543219' }
    },
  ];


  ngOnInit(): void {

    // this.example1();
    this.example2();

  }

  example1() {
    // Ex - 01 (By Length)

    const source1 = from(this.people);
    this.subscribe1 = source1
      .pipe(
        filter(m => m.name.length > 6),
        toArray()
      )
      .subscribe(res => {
        console.log(res);
        this.data1 = res;
        // this.msg1 = res;
      });


    // Ex - 02 (By Gender)

    const source2 = from(this.people);
    this.subscribe2 = source2
      .pipe(
        filter(m => m.gender === 'Male'),
        toArray()
      )
      .subscribe(res => {
        console.log(res);
        this.data2 = res;
        // this.msg1 = res;
      });


    // Ex - 03 (By Item)

    const source3 = from(this.people);
    this.subscribe3 = source3
      .pipe(
        filter(m => m.id <= 6),
        toArray()
      )
      .subscribe(res => {
        console.log(res);
        this.data3 = res;
        // this.msg1 = res;
      });
  }


  example2() {
    const obs1 = from(this.people);
    this.subscribe4 = obs1.pipe(
      filter(r => r.id > 3),
      toArray()
    ).subscribe(res => {
      console.log(res);
    });
    this.subscribe5 = obs1.pipe(
      filter(r => r.gender === 'Male'),
      toArray()
    ).subscribe(res => {
      console.log(res);
    });
    this.subscribe6 = obs1.pipe(
      filter(r => r.name.length > 5),
      toArray()
    ).subscribe(res => {
      console.log(res);
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