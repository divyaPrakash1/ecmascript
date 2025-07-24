import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../service/comman.service';
import { from, map, mergeAll, mergeMap, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'ecmspt-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
// it combination of map + mergeAll = mergeMap (Flattening operator)
// in mergeMap, subscribe order will be same,
// A1-----------------A3---------A5-------|-->
// B------B-----B---|--------------------->
// mergeMap(i => i*B--i*B--i*B----|)
// A1B---A1B---A1B---A3B---A3B---A5B---A3B---A5B---A5B---|>


export class MergeMapComponent implements OnInit, OnDestroy {

  constructor(private _common: CommonService) {

  }

  subscription1!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;

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

    // source
    //   .pipe(
    //     map(res => this.getData(res))
    //   )
    //   .subscribe(res => res.subscribe(res2 => {
    //     console.log(res2)
    //     this._common.print(res2, 'elContainer')
    //   }))


    source
      .pipe(
        map(res => this.getData(res))
      )
      .subscribe(res => {
        // console.log(res) // res returns observable
        this._common.print(res.toString(), 'elContainer1')
      });


    //Ex - 02 | Map + MergeAll
    source
      .pipe(
        map(res => this.getData(res)),
        mergeAll() // flatten all observable
      )
      .subscribe(res => {
        // console.log(res)
        this._common.print(res.toString(), 'elContainer2')
      });

    //Ex - 03 | mergeMap
    source
      .pipe(
        mergeMap(res => this.getData(res)), // map + mergeAll using mergeMap
        // mergeAll() // flatten all observable
      )
      .subscribe(res => {
        console.log(res)
        this._common.print(res.toString(), 'elContainer3')
      });
  }

  example2() {
    const source = from(['Comedy', 'Tech', 'Dadda']);
    this.subscription1 = source.pipe(
      map(v => this.getData1(v))
    ).subscribe(res => {
      console.log('only with Map', res)
    });

    this.subscription2 = source.pipe(
      map(v => this.getData1(v)),
      mergeAll()
    ).subscribe(res => {
      console.log('map + mergeAll', res);
    });


    this.subscription3 = source.pipe(
      mergeMap(v => this.getData1(v))
    ).subscribe(res => {
      console.log('mergeMap', res);
    })

  }


  getData1(data: string): Observable<any> {
    return of('Data Forn ' + data);
  }

  getData(data: string): Observable<any> { // returns observable
    return of(data + ' Video Uploaded');
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

  }

}

