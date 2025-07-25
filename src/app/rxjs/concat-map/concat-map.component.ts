import { Component, OnDestroy, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, Observable, of, Subscription } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss'
})
// in concatmap, subscribe order will be same,   
// A1----B1----C1
// A2----B2----C2
// A1----B1----C1---A2----B2----C2



export class ConcatMapComponent implements OnInit, OnDestroy {

  subscription1!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;
  subscription4!: Subscription;
  subscription5!: Subscription;
  subscription6!: Subscription;
  subscription7!: Subscription;
  subscription8!: Subscription;

  constructor(private _common: CommonService) {

  }


  ngOnInit(): void {

    // this.example1();
    this.example2();

  }


  example1() {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex -01 | Map
    // source.pipe(
    //   map(res => this.getData(res))
    // )
    //   .subscribe(res2 => res2.subscribe(res3 => {
    //     console.log(res3);
    //   }))


    this.subscription1 = source.pipe(
      map(res => this.getData(res))
    )
      .subscribe(res2 => {
        console.log(res2);
        this._common.print(res2.toString(), 'elContainer1')
      })

    // // Ex -02 | Map + concatAll
    // source.pipe(
    //   map(res => this.getData(res)),
    //   concatAll()
    // )
    //   .subscribe(res2 => {
    //     console.log(res2);
    //     this._common.print(res2.toString(), 'elContainer2')
    //   })

    // Ex -02 | mergeMap
    this.subscription2 = source.pipe(
      mergeMap(res => this.getData(res)),
    )
      .subscribe(res2 => {
        console.log(res2);
        this._common.print(res2.toString(), 'elContainer2')
      })


    // Ex -03 | ConcatMap
    this.subscription3 = source.pipe(
      concatMap(res => this.getData(res)),
      // concatAll()
    )
      .subscribe(res2 => {
        console.log(res2);
        this._common.print(res2.toString(), 'elContainer3')
      })
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
      concatAll()
    ).subscribe(res => {
      console.log('map and concatAll', res)
    });

    this.subscription6 = source.pipe(
      concatMap(e => this.getData1(e))
    ).subscribe(res => {
      console.log('with concatMap only', res)
    });

  }

  getData1(value: string): Observable<any> {
    return of('Daaaa ' + value);
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
    if (this.subscription7) {
      this.subscription7.unsubscribe();
    }
    if (this.subscription8) {
      this.subscription8.unsubscribe();
    }
  }

}
