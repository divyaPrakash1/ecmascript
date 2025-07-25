import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, map, switchAll, switchMap, Observable, of, delay, mergeMap, concatMap, Subscription } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-merge-concat-switch-map',
  templateUrl: './merge-concat-switch-map.component.html',
  styleUrl: './merge-concat-switch-map.component.scss'
})
export class MergeConcatSwitchMapComponent implements OnInit, OnDestroy {

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

    //Ex - 01 | MergeMap
    // If every new observale needs to be flat, and every new obervable needs to be subscribe and show then use mergeMap
    this.subscription1 = source
      .pipe(
        mergeMap(r => this.getData1(r))
      )
      .subscribe(res => {
        this._common.print(res.toString(), 'elContainer1');
      })


    //Ex - 02 | ConcatMap
    // If order matters for subscription, and request and responce should be in same queue and show then use ConcatMap
    this.subscription2 = source
      .pipe(
        concatMap(res => this.getData1(res)))
      .subscribe(res => {
        this._common.print(res.toString(), 'elContainer2');
      });

    // Ex - 03 | SwitchMap
    // If previous emission needs to be unsubscribe and only latest emition needed then use SwitchMap
    this.subscription3 = source
      .pipe(
        switchMap(res => this.getData1(res)),
      )
      .subscribe(res => {
        this._common.print(res.toString(), 'elContainer3');
      });
  }

  example2() {
    const qaSource = from(['Vikram', 'Gunjan', 'Soni', 'Krishna']);
    // mergeMap
    this.subscription4 = qaSource.pipe(
      mergeMap(e => this.getData2(e))
    ).subscribe(res => {
      console.log('mergeMap =>', res); // all data after 5 seconds
    });

    // concatMap
    this.subscription5 = qaSource.pipe(
      concatMap(e => this.getData2(e))
    ).subscribe(res => {
      console.log('concatMap =>', res); // one by one data every 5 seconds
    });

    // switchMap
    this.subscription6 = qaSource.pipe(
      switchMap(e => this.getData2(e))
    ).subscribe(res => {
      console.log('switchMap =>', res); // Video Krishna after 5 seconds
    });
  }


  getData2(str: any): Observable<any> {
    return of('Video ' + str).pipe(delay(5000));
  }

  getData1(data: string): Observable<any> { // returns observable
    return of(data + ' Video Uploaded').pipe(delay(5000));
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

