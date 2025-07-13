import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription, from, filter, toArray, interval, map, tap } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-tap',
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.scss'
})
// Previously it was also called do operator
// Transparently performs any action or side effect such as false loading or console the response,
export class TapComponent implements OnInit, OnDestroy {
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event) {
    if (this.subscribe1) {
      this.subscribe1.unsubscribe();
    }
    if (this.subscribe2) {
      this.subscribe2.unsubscribe();
    }
    // if (this.subscribe3) {
    //   this.subscribe3.unsubscribe();
    // }
  }

  constructor(private _common: CommonService) { }

  subscribe1!: Subscription;
  subscribe2!: Subscription;
  subscribe3!: Subscription;

  msg1: string = "";
  msg2: string = "";
  msg3: string = "";

  data1: any = [];
  data2: any = [];
  data3: any = [];

  myColor: string = '';

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

    // Ex - 01 (By Length)
    const names = [
      'Amit',
      'Priya',
      'Ravi',
      'Neha',
      'Karan',
      'Sneha',
      'Vikas',
      'Ritu',
      'Arjun',
      'Divya'
    ];

    const source = interval(1500);
    this.subscribe1 = source
      .pipe(
        tap(res => {
          console.log('before', res)
          if (res > 5)
            this.subscribe1.unsubscribe()
        }),
        map(s => names[s]),
        // tap(res => console.log('after', res))
      )
      .subscribe(res => {
        // console.log(res);
        this._common.print(res, 'elContainer1');
      });


    const colors = [
      'red',
      'blue',
      'green',
      'yellow',
      'purple',
      'orange',
      'pink',
      'brown',
      'black',
      'white'
    ];

    const source2 = interval(1000);
    // const source2 = from(colors);
    this.subscribe2 = source2
      // .pipe(
      //   tap(res => this.myColor = res)
      // )
      .subscribe(res => {
        console.log(res);
        this.myColor = colors[res];
        this.data2 = res;
        this._common.print(colors[res], 'elContainer2');
        // this.msg1 = res;
        setTimeout(() => {
          this.subscribe2.unsubscribe();
        }, 1500)
      });


    // // Ex - 02 (By Gender)

    // const source2 = from(this.people);
    // this.subscribe2 = source2
    //   .pipe(
    //     filter(m => m.gender === 'Male'),
    //     toArray()
    //   )
    //   .subscribe(res => {
    //     console.log(res);
    //     this.data2 = res;
    //     // this.msg1 = res;
    //   });


    // // Ex - 03 (By Item)

    // const source3 = from(this.people);
    // this.subscribe3 = source3
    //   .pipe(
    //     filter(m => m.id <= 6),
    //     toArray()
    //   )
    //   .subscribe(res => {
    //     console.log(res);
    //     this.data3 = res;
    //     // this.msg1 = res;
    //   });

  }


  ngOnDestroy(): void {
    this.subscribe1.unsubscribe();
    this.subscribe2.unsubscribe();
    // this.subscribe3.unsubscribe()
  }

} {

}
