import { Component, ElementRef, OnDestroy, OnInit, viewChild } from '@angular/core';
import { CommonService } from '../../../service/comman.service';

@Component({
  selector: 'ecmspt-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component implements OnInit, OnDestroy {

  // @viewChild('input1') input1: ElementRef
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
