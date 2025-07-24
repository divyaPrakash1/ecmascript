import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription, from, take, takeLast, timer, fromEvent, interval, map, takeUntil, retry, retryWhen, delay, scan } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-retry-retry-when-scan-delay',
  templateUrl: './retry-retry-when-scan-delay.component.html',
  styleUrl: './retry-retry-when-scan-delay.component.scss'
})

// retry operator is used when any operation not success then can retry again till the given times, means we can resubscribe a given observale by retry operator(api calling)
//
//
export class RetryRetryWhenScanDelayComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  dataStatus: string = 'No Data';
  constructor(private _common: CommonService) { }



  data1: any = [];
  ngOnInit(): void {

  }

  fetchDetails() {
    this.isLoading = true;
    this.dataStatus = 'Fetching data';
    this._common.fetchDetails().pipe(
      // retry(2) // total 3 times api will recall as 2 times retry when default time is failed and one default time
      retryWhen(err => err.pipe(
        delay(3000), // it is retry delay
        scan((retryCount) => { // scan operator will check how many times retrying
          if (retryCount >= 5) {
            throw err
          } else {
            retryCount = retryCount + 1;
            console.log('retryCount', retryCount);
            this.dataStatus = 'Retrying Attempt #' + retryCount;
            return retryCount;
          }
        }, 0)
      ))
    ).subscribe(res => {
      console.log('res', res);
      this.data1 = res;
      this.isLoading = false;
      this.dataStatus = 'Data fetched';
    },
      (err) => {
        this.isLoading = false;
        this.dataStatus = 'Error while fetching data';
      }
    )
  }

  fetchDetails2() {
    this.isLoading = true;
    this._common.fetchDetails().pipe(
      // retry(3)
      retryWhen(err => err.pipe(
        delay(2500),
        scan((retryCount) => {
          if (retryCount > 5) {
            throw err
          } else {
            retryCount++;
            this.dataStatus = 'Retrying Attempt #' + retryCount;
            return retryCount;
          }
        }, 0)
      ))
    ).subscribe(res => {
      console.log(res);
      this.data1 = res;
      this.isLoading = false;
      this.dataStatus = 'Data fetched';
    },
      (error) => {
        this.isLoading = false;
        this.dataStatus = 'Error while fetching data';
      })
  }

  fetchDetails3() {
    this.isLoading = true;
    this._common.fetchDetails().pipe(
      // retry(2)
      retryWhen(err => err.pipe(
        delay(500),
        scan((retryCount) => {
          if (retryCount > 3) {
            throw err
          } else {
            retryCount++;
            return retryCount
          }
        }, 0)
      ))
    ).subscribe(res => {
      this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
    })
  }


  ngOnDestroy(): void {
  }
}