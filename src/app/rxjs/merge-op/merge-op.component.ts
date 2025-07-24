import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, interval, map, merge, Subscription, take } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-merge-op',
  templateUrl: './merge-op.component.html',
  styleUrl: './merge-op.component.scss'
})

// in merge op, merge all data observable first come first merge
export class MergeOpComponent implements OnInit, OnDestroy {


  subscription1!: Subscription;
  subscription2!: Subscription;
  constructor(private _common: CommonService) {

  }


  ngOnInit(): void {
    // this.example1();
    this.example2();
  }

  example1() {
    const sourceTech = interval(3000).pipe(map(v => 'Tech Video #' + (v + 1)), take(5));
    const sourceComedy = interval(1500).pipe(map(v => 'Comedy Video #' + (v + 1)), take(3));
    const sourceNews = interval(1000).pipe(map(v => 'News Video #' + (v + 1)), take(4));
    const finalObs = merge(sourceTech, sourceComedy, sourceNews)
    this.subscription1 = finalObs.subscribe(res => {
      console.log(res);
      this._common.print(res, 'elContainer')
    })
  }

  example2() {
    const gaming = interval(200).pipe(map(g => 'Gaming Video #' + (g + 1), take(5)));
    const education = interval(150).pipe(map(e => 'Education Video #' + (e + 1), take(5)));
    const tech = interval(100).pipe(map(t => 'Tech Video #' + (t + 1), take(5)));
    const finalObs = merge(gaming, education, tech)
    this.subscription2 = finalObs.subscribe(res => {
      console.log(res);
    })

  }


  ngOnDestroy(): void {
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
  }

}
