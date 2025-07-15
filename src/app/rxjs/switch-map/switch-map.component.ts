import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, from, map, mergeAll, mergeMap, Observable, of, switchAll, switchMap } from 'rxjs';
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

  constructor(private _common: CommonService) {

  }


  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News']);

    // Tech Video Uploaded
    // Comedy Video Uploaded
    // News Video Uploaded

    //Ex - 01 | Map
    source
      .pipe(
        map(r => this.getData(r))
      )
      .subscribe(res => {
        // console.log(res);
        this._common.print(res.toString(), 'elContainer1');
      })


    //Ex - 02 | Map + SwitchAll
    source
      .pipe(
        map(res => this.getData(res)),
        switchAll() // flatten all observable
      )
      .subscribe(res => {
        // console.log(res)
        this._common.print(res.toString(), 'elContainer2'); // all request has cancelled only last request will pick
      });

    //Ex - 03 | mergeMap
    source
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

  ngOnDestroy(): void {

  }

}

