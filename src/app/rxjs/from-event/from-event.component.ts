import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { CommanService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription!: Subscription
  constructor(private _common: CommanService) { }
  @ViewChild('addBtn') addBtn!: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let count = 1;
    this.subscription = fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      // console.log('Video : ', count);
      this._common.print(`Video : ${count}`, 'elContainer');
      this._common.print(`Video : ${count}`, 'elContainer1');
      count++
    })
  }

  print() {
    // elContainer
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
