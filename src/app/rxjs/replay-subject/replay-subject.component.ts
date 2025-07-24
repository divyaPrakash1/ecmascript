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

  user01List: any = [];
  user02List: any = [];
  user03List: any = [];

  // subscribeMode
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;


  subscribeMode02: boolean = false;
  subscribeMode03: boolean = false;


  // subscription
  subscription2!: Subscription;
  subscription3!: Subscription;
  subscription4!: Subscription;


  subscription02!: Subscription;
  subscription03!: Subscription;
  subscription04!: Subscription;

  // toggle properties
  methodInterval: boolean = false;


  constructor(private _common: CommonService) {

  }

  ngOnInit(): void {
    this._common.videoEmit.subscribe(res => {
      console.log(res);
      this.user1List.push(res);
    });

    this._common.videoEmitRevise.subscribe(res => {
      this.user01List.push(res);
    });
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

  addVideo(addVideo: string) {
    this._common.videoEmitRevise.next(addVideo);
  }

  user02Subscribe() {
    if (this.subscription02) {
      this.subscription02.unsubscribe();
    } else {
      this.subscription02 = this._common.videoEmitRevise.subscribe(res => {
        this.user02List.push(res);
      })
    }
    this.subscribeMode02 = !this.subscribeMode02;
  }

  user03Subscribe() {
    if (this.subscription03) {
      this.subscription03.unsubscribe();
    } else {
      this.subscription03 = this._common.videoEmitRevise.subscribe(res => {
        this.user03List.push(res);
      })
    }
    this.subscribeMode03 = !this.subscribeMode03;
  }



  ngOnDestroy(): void {
    this._common.videoEmit.next("");
  }

}
