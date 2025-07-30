import { Component, ElementRef, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonService } from '../service/comman.service';
import { Product1 } from '../interface/product.interface';
import { exhaustMap, fromEvent, interval, Observable, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'ecmspt-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.scss'
})

// In exhaustMap operator, only pick first request to server, once completed then pick another latest first pick,
// during first request all other request will be ignored 
export class ExhaustMapComponent implements OnInit, AfterViewInit, OnDestroy {
  fetching: boolean = false;
  num: number = 0;
  num1: number = 0;
  products: Array<Product1> = [];

  @ViewChild('btn') btn!: ElementRef;
  @ViewChild('btn1') btn1!: ElementRef;

  subscription1!: Subscription;
  subscription2!: Subscription;

  constructor(private _common: CommonService) {

  }

  ngOnInit(): void {
    this._common.exhaustMapSubject
      .pipe()
      .subscribe(res => {
        this.products = res;
      });
  }

  ngAfterViewInit(): void {
    // this.example1();
    this.example2();
  }

  example1() {
    this.subscription1 = fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        tap(() => this.fetching = true),
        exhaustMap(async () => this.onSave())
      ).subscribe((res) => {
        // this.products = res
        this.fetching = false;
      })
  }

  example2() {
    this.subscription2 = fromEvent(this.btn1.nativeElement, 'click').pipe(
      exhaustMap(() => this.getPosts())
    ).subscribe(res => {
      console.log('exhaustMap', res);
    })
  }

  getPosts(): Observable<any> {
    this.num1++;
    return this._common.getPosts(this.num1)
  }

  // btnClick() {
  //   this.num++;
  // }

  onSave() {
    this.num++
    this.fetching = true;
    this._common.addProduct({ id: this.num, name: 'Rajan' + this.num, price: this.num * 3 });
    setTimeout(() => {
      this.fetching = false;
    }, 1000);
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
// this string is test to test number of test available in this string to test