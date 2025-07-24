import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, mergeMap, pluck, Subject, switchMap, takeUntil } from 'rxjs';
import { CommonService } from '../service/comman.service';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'ecmspt-switch-map2',
  templateUrl: './switch-map2.component.html',
  styleUrl: './switch-map2.component.scss'
})
export class SwitchMap2Component implements AfterViewInit, OnDestroy {

  @ViewChild('searchForm') searchForm!: NgForm
  private destroy$ = new Subject<void>();
  data: Array<Product> = [];
  constructor(private _common: CommonService) { }
  ngAfterViewInit(): void {
    // this._common.getFilteredProducts("Gym Towel").subscribe(res => {
    //   console.log(res);
    // })

    const formValues = this.searchForm.valueChanges;
    formValues && formValues
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


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


