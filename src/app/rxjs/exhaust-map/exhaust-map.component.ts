import { Component, ElementRef, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonService } from '../service/comman.service';
import { Product1 } from '../interface/product.interface';
import { concatMap, exhaustMap, fromEvent, Observable, tap } from 'rxjs';

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
  products: Array<Product1> = [];

  @ViewChild('btn') btn!: ElementRef;

  constructor(private _common: CommonService) {

  }

  ngOnInit(): void {
    this._common.exhaustMapSubject.pipe(

    ).subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        tap(() => this.fetching = true),
        exhaustMap(async () => this.onSave())
      ).subscribe((res) => {
        console.log("object", res);
        // this.products = res
        this.fetching = false;
      }

      )
  }


  btnClick() {
    this.num++;
  }

  onSave() {
    this.num++
    this.fetching = true;
    this._common.addProduct({ id: this.num, name: 'Rajan' + this.num, price: this.num * 3 });
    setTimeout(() => {
      this.fetching = false;
    }, 1000);
  }

  ngOnDestroy(): void {

  }
}
// this string is test to test number of test available in this string to test        