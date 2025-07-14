import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../service/comman.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'ecmspt-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.scss'
})
// in ReplaySubject we can store some last emitted value, 
export class ReplaySubjectComponent implements OnInit, OnDestroy {

  //data list
  user1List: any = [
  ];
  user2List: any = [

  ];
  user3List: any = [
  ];

  // subscribeMode
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;


  // subscription
  subscription2!: Subscription;
  subscription3!: Subscription;
  subscription4!: Subscription;

  // toggle properties
  methodInterval: boolean = false;


  constructor(private _common: CommonService) {

  }

  ngOnInit(): void {
    this._common.videoEmit.subscribe(res => {
      console.log(res);
      this.user1List.push(res);
    })
  }


  getData(video: string) {
    console.log(video);
    this._common.videoEmit.next(video);
  }

  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {

      this.subscription2 = this._common.videoEmit.subscribe(res => {
        this.user2List.push(res);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }
  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {

      this.subscription3 = this._common.videoEmit.subscribe(res => {
        this.user3List.push(res);
      });
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggelIntervalM() {
    if (!this.methodInterval) {
      const broadcastVideo = interval(1000);
      this.subscription4 = broadcastVideo.subscribe(res => {
        this._common.videoEmit.next('Video ' + res);
      })
    } else {
      this.subscription4.unsubscribe()
    }
    this.methodInterval = !this.methodInterval;
  }

  ngOnDestroy(): void {
    this._common.videoEmit.next("");
  }

}
