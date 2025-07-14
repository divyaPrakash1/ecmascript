import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-concat-op',
  templateUrl: './concat-op.component.html',
  styleUrl: './concat-op.component.scss'
})

// in concat op, concat all data observable one by one
// ex first ob have one data, second have two data then it should concat first then second 
export class ConcatOpComponent implements OnInit, OnDestroy {


  constructor(private _common: CommonService) {

  }


  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(map(v => 'Tech Video #' + (v + 1)), take(5));
    const sourceComedy = interval(1000).pipe(map(v => 'Comedy Video #' + (v + 1)), take(3));
    const sourceNews = interval(1000).pipe(map(v => 'News Video #' + (v + 1)), take(4));

    const finalObs = concat(sourceTech, sourceComedy, sourceNews)
    finalObs.subscribe(res => {
      console.log(res);
      this._common.print(res, 'elContainer')
    })
  }


  ngOnDestroy(): void {

  }

}
