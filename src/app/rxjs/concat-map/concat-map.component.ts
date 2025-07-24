import { Component, OnDestroy, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, Observable, of } from 'rxjs';
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

  constructor(private _common: CommonService) {

  }


  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News']);

    // Ex -01 | Map
    // source.pipe(
    //   map(res => this.getData(res))
    // )
    //   .subscribe(res2 => res2.subscribe(res3 => {
    //     console.log(res3);
    //   }))


    source.pipe(
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
    source.pipe(
      mergeMap(res => this.getData(res)),
    )
      .subscribe(res2 => {
        console.log(res2);
        this._common.print(res2.toString(), 'elContainer2')
      })


    // Ex -03 | ConcatMap
    source.pipe(
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


  ngOnDestroy(): void {

  }

}
