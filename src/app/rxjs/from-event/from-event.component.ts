import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { CommonService } from '../service/comman.service';

@Component({
  selector: 'ecmspt-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription!: Subscription
  constructor(private _common: CommonService) { }
  @ViewChild('addBtn') addBtn!: ElementRef;

  @ViewChild('clickCount') clickCount!: ElementRef;


  @ViewChild('addMoreCount') addMoreCount!: ElementRef;
  @ViewChild('annny') annny!: ElementRef;

  ngOnInit(): void {

  }

  example1() {
    let count = 1;
    this.subscription = fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      // console.log('Video : ', count);
      this._common.print(`Video : ${count}`, 'elContainer');
      this._common.print(`Video : ${count}`, 'elContainer1');
      count++
    })
  }

  ngAfterViewInit(): void {
    this.example1();
    this.example2();
    this.example3();
    this.example4();
  }

  example2() {
    let count = 1;
    this.subscription = fromEvent<any>(this.clickCount.nativeElement, 'click').subscribe(res => {
      this.print(count, 'clickCount');
      count++;
    })
  }

  print(value: any, id: any) {
    if (typeof document !== 'undefined') {
      let el = document.createElement('li');
      el.innerText = value;
      document.getElementById(id)?.appendChild(el);
    }
  }



  example3() {
    let ct = 1;
    this.subscription = fromEvent<any>(this.addMoreCount.nativeElement, 'click').subscribe(() => {
      this.print1(ct, 'addMoreCount');
      ct++;
    })
  }
  example4() {
    let ct = 1;
    this.subscription = fromEvent<any>(this.annny.nativeElement, 'change').subscribe(() => {
      this.print1(ct, 'annsny');
      ct++;
    })
  }

  print1(value: number, id: string) {
    if (typeof document !== undefined) {
      let el = document.createElement('li');
      el.innerText = value + "";
      document.getElementById(id)?.appendChild(el);
    }

  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
