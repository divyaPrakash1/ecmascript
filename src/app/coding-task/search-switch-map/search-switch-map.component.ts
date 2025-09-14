import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../../rxjs/service/comman.service';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';


interface products {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}
@Component({
  selector: 'ecmspt-search-switch-map',
  templateUrl: './search-switch-map.component.html',
  styleUrl: './search-switch-map.component.scss'
})
export class SearchSwitchMapComponent implements OnInit, AfterViewInit, OnDestroy {

  myForm!: FormGroup;
  products: products[] = [];



  constructor(private _fb: FormBuilder, private _common: CommonService) {

  }


  ngOnInit(): void {
    this.myForm = this._fb.group({
      search: ['']
    });
  }


  ngAfterViewInit(): void {

    if (!!this.myForm) {
      this.myForm.get('search')?.valueChanges.pipe(
        debounceTime(750),
        distinctUntilChanged(),
        switchMap((value: string) => this._common.getFilteredProducts(value).pipe(
          // map((res: any) => {
          //   return {
          //     body: res.body,
          //     name: res.name,
          //     email: res.email,
          //     id: res.id,
          //     postId: res.postId,
          //   }
          // })
        ))
      ).subscribe((fv: any) => {
        console.log('getFilteredProducts', fv);
        this.products = fv
      })
    }
  }





  ngOnDestroy(): void {

  }
}
