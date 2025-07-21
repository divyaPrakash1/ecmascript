import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../service/comman.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Posts } from '../interface/product.interface';

@Component({
  selector: 'ecmspt-catch-error-and-throw-error',
  templateUrl: './catch-error-and-throw-error.component.html',
  styleUrl: './catch-error-and-throw-error.component.scss'
})
export class CatchErrorAndThrowErrorComponent implements OnInit, OnDestroy {

  error: string = ""
  fetching: boolean = false;
  allProducts: Array<Posts> = [];
  constructor(private _common: CommonService) { }


  ngOnInit(): void {

  }


  getAllPosts() {
    this._common.getPosts(0).subscribe(res => {
      this.allProducts = res;
    },
      (err) => {
        this.error = err;
      })
  }

  ngOnDestroy(): void {

  }

}
