import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../service/comman.service';
import { from, map, mergeAll, mergeMap, Observable, of } from 'rxjs';

@Component({
  selector: 'ecmspt-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
// it combination of map + mergeAll = mergeMap (Flattening operator)
export class MergeMapComponent implements OnInit, OnDestroy {

  constructor(private _common: CommonService) {

  }


  ngOnInit(): void {

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

  getData(data: string): Observable<any> { // returns observable
    return of(data + ' Video Uploaded');
  }

  ngOnDestroy(): void {

  }

}

