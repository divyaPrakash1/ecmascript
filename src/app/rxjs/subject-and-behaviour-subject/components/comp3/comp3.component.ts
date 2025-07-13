import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../../../service/comman.service';

@Component({
  selector: 'ecmspt-comp3',
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.scss'
})
export class Comp3Component implements OnInit, OnDestroy {

  userName: string = "";
  constructor(private _common: CommonService) {

  }

  ngOnInit(): void {
    this._common.userName.subscribe(res => {
      this.userName = res;
    })
  }

  onChage(inputValue: string) {
    console.log("inputValue", inputValue);
    this._common.userName.next(inputValue);
  }


  ngOnDestroy(): void {
    this._common.userName.next("")
  }



}