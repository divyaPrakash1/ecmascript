import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, from, map, mergeAll, mergeMap, Observable, of, Subscription, switchAll, switchMap } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
// switchmap is combination of map + switchAll, it is flattening operator,
// IT cancels all previous request, and pick updated one,
// It is commonly used in search functionality
export class SwitchMapComponent implements OnInit, OnDestroy {

  subscription1!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;
  subscription4!: Subscription;
  subscription5!: Subscription;
  subscription6!: Subscription;

  constructor(private _common: CommonService) {

  }


  ngOnInit(): void {

    // this.example1();
    this.example2();
  }

  example1() {
    const source = from(['Tech', 'Comedy', 'News']);
    // Tech Video Uploaded
    // Comedy Video Uploaded
    // News Video Uploaded

    //Ex - 01 | Map
    this.subscription1 = source
      .pipe(
        map(r => this.getData(r))
      )
      .subscribe(res => {
        // console.log(res);
        this._common.print(res.toString(), 'elContainer1');
      })

    //Ex - 02 | Map + SwitchAll
    this.subscription2 = source
      .pipe(
        map(res => this.getData(res)),
        switchAll() // flatten all observable
      )
      .subscribe(res => {
        // console.log(res)
        this._common.print(res.toString(), 'elContainer2'); // all request has cancelled only last request will pick
      });

    //Ex - 03 | mergeMap
    this.subscription3 = source
      .pipe(
        switchMap(res => this.getData(res)), // map + switchAll using switchMap
      )
      .subscribe(res => {
        // console.log(res)
        this._common.print(res.toString(), 'elContainer3'); // all request has cancelled only last request will pick
      });
  }

  getData(data: string): Observable<any> { // returns observable
    return of(data + ' Video Uploaded').pipe(delay(1500));
  }

  example2() {

    const source = from(['Rajan', 'Mishra', 'Upendra', 'Mahendra',]);
    this.subscription4 = source.pipe(
      map(e => this.getData1(e))
    ).subscribe(res => {
      console.log('with map only', res)
    });

    this.subscription5 = source.pipe(
      map(e => this.getData1(e)),
      switchAll()
    ).subscribe(res => {
      console.log('map and switchAll', res)
    });

    this.subscription6 = source.pipe(
      switchMap(e => this.getData1(e))
    ).subscribe(res => {
      console.log('with switchMap only', res)
    });

  }

  getData1(value: string): Observable<any> {
    return of('Daaaa ' + value).pipe(delay(1200));
  }

  ngOnDestroy(): void {
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
    if (this.subscription3) {
      this.subscription3.unsubscribe();
    }
    if (this.subscription4) {
      this.subscription4.unsubscribe();
    }
    if (this.subscription5) {
      this.subscription5.unsubscribe();
    }
    if (this.subscription6) {
      this.subscription6.unsubscribe();
    }
  }

}

