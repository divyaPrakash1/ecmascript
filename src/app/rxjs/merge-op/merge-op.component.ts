import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-merge-op',
  templateUrl: './merge-op.component.html',
  styleUrl: './merge-op.component.scss'
})

// in merge op, merge all data observable first come first merge
export class MergeOpComponent implements OnInit, OnDestroy {


  constructor(private _common: CommonService) {

  }


  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(map(v => 'Tech Video #' + (v + 1)), take(5));
    const sourceComedy = interval(1500).pipe(map(v => 'Comedy Video #' + (v + 1)), take(3));
    const sourceNews = interval(1000).pipe(map(v => 'News Video #' + (v + 1)), take(4));

    const finalObs = merge(sourceTech, sourceComedy, sourceNews)
    finalObs.subscribe(res => {
      console.log(res);
      this._common.print(res, 'elContainer')
    })
  }


  ngOnDestroy(): void {

  }

}
