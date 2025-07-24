import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-concat-op',
  templateUrl: './concat-op.component.html',
  styleUrl: './concat-op.component.scss'
})

// in concat op, concat all data observable one by one
// ex first ob have 5 data, second have 3 data and third having 4 data then it should concat all first then all second then all third

export class ConcatOpComponent implements OnInit, OnDestroy {


  constructor(private _common: CommonService) {

  }


  ngOnInit(): void {
    // this.example1();
    this.example2();
  }


  example1() {
    const sourceTech = interval(1000).pipe(map(v => 'Tech Video #' + (v + 1)), take(5));
    const sourceComedy = interval(1000).pipe(map(v => 'Comedy Video #' + (v + 1)), take(3));
    const sourceNews = interval(1000).pipe(map(v => 'News Video #' + (v + 1)), take(4));

    const finalObs = concat(sourceTech, sourceComedy, sourceNews)
    finalObs.subscribe(res => {
      console.log(res);
      this._common.print(res, 'elContainer')
    })
  }

  example2() {
    const obs1 = interval(1000).pipe(map(v => 'Study #' + v), take(5));
    const obs2 = interval(2000).pipe(map(v => 'Office #' + v), take(5));
    const obs3 = interval(3000).pipe(map(v => 'Trip #' + v), take(5));
    const finalObs = concat(obs1, obs2, obs3)
    finalObs.subscribe(res => {
      console.log(res);
    })
  }


  ngOnDestroy(): void {

  }

}
