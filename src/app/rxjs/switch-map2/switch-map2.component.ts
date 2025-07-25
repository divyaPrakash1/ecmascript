import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, mergeMap, pluck, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { CommonService } from '../service/comman.service';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'ecmspt-switch-map2',
  templateUrl: './switch-map2.component.html',
  styleUrl: './switch-map2.component.scss'
})
export class SwitchMap2Component implements AfterViewInit, OnDestroy {

  @ViewChild('searchForm') searchForm!: NgForm
  @ViewChild('searchForm2') searchForm2!: NgForm
  private destroy$ = new Subject<void>();
  data: Array<Product> = [];

  subscription1!: Subscription;
  subscription2!: Subscription;
  constructor(private _common: CommonService) { }
  ngAfterViewInit(): void {
    // this._common.getFilteredProducts("Gym Towel").subscribe(res => {
    //   console.log(res);
    // })

    // this.example1();
    this.example2();

  }

  example1() {
    const formValues = this.searchForm.valueChanges;
    if (formValues) {

      this.subscription1 = formValues
        .pipe(
          // map(data => data['serachTerm'])
          filter(() => !!this.searchForm.valid),
          pluck('serachTerm'),
          debounceTime(1000),
          distinctUntilChanged(),
          takeUntil(this.destroy$),
          // map(res => {
          //   st = res
          // }),
          switchMap(res => this._common.getFilteredProducts(res))
        )
        .subscribe(res => {
          // res = res.filter(r => r.title.includes(st))
          // console.log(res);
          this.data = res;
        })
    }
  }

  example2() {
    const formValue = this.searchForm2.valueChanges;

    if (formValue) {

      this.subscription2 = formValue
        .pipe(
          filter(() => !!this.searchForm2.valid),
          debounceTime(500),
          map(e => e.serachTerm2),
          takeUntil(this.destroy$),
          distinctUntilChanged(),
          switchMap(e => this._common.getFilteredProducts(e))
        ).subscribe(res => {
          console.log(res);
        })
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
  }
}


