import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-subject-and-behaviour-subject',
  templateUrl: './subject-and-behaviour-subject.component.html',
  styleUrl: './subject-and-behaviour-subject.component.scss'
})

// Subject
//    - Observable(Pipe, Subscribe)
//    - Observer(nextTick, error, complete)

// Behavioursubject is same as Subject difference is only in BS we can initialie value
export class SubjectAndBehaviourSubjectComponent implements OnInit, OnDestroy {

  userName: string = "";
  constructor(private _common: CommonService) {

  }
  ngOnInit(): void {
    this._common.exclusive.next(true);
    this._common.userName.subscribe(res => {
      this.userName = res;
    })
  }
  ngOnDestroy(): void {
    this._common.exclusive.next(false);
    this._common.userName.next("");
  }

}
