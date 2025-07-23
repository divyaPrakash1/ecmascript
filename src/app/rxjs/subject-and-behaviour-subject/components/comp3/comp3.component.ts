import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../../../service/comman.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ecmspt-comp3',
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.scss'
})
export class Comp3Component implements OnInit, OnDestroy {

  userName: string = "";
  userName2: string = "";
  subscription1!: Subscription;
  subscription2!: Subscription;
  constructor(private _common: CommonService) {

  }

  ngOnInit(): void {
    this.subscription1 = this._common.userName.subscribe(res => {
      this.userName = res;
    })

    this.subscription2 = this._common.userName2.subscribe(res => {
      this.userName2 = res;
    })
  }

  onChage(inputValue: string) {
    console.log("inputValue", inputValue);
    this._common.userName.next(inputValue);
  }

  onChage2(inputValue: string) {
    this._common.userName2.next(inputValue);
  }


  ngOnDestroy(): void {
    this._common.userName.next("");
    this._common.userName2.next("");
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
  }



}