import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../service/comman.service';
import { Posts } from '../interface/product.interface';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'ecmspt-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrl: './share-replay.component.scss'
})

export class ShareReplayComponent implements OnInit, OnDestroy {
  // 01
  // allPosts: Array<Posts> = [];

  // 02
  allProducts!: Observable<Array<Posts>>;
  userIdOne!: Observable<Array<Posts>>;
  userIdTwo!: Observable<Array<Posts>>;

  id: number = 0;
  constructor(private _common: CommonService) {

  }

  // Share source and replay specified number of emissions on subscription.
  // in below code if I don't use sharereplay then 3 times api will call otherwise only one time api will call

  ngOnInit(): void {
    this.example1();
    // this.example2();
  }

  example1() {
    // 01
    // this._common.getPosts(0).subscribe(res => {
    //   this.allPosts = res;
    // });

    //02
    // this.allProducts = this._common.getPosts(0);

    this.allProducts = this._common.getPosts(0).pipe(shareReplay());
    this.userIdOne = this.allProducts.pipe(
      map(re => re.filter(idOne => {
        return idOne.userId === 1
      }))
    );
    this.userIdTwo = this.allProducts.pipe(
      map(re => re.filter(idOne => {
        return idOne.userId === 2
      }))
    );

  }

  getUserIdFive() {
    this.id++;
    this.userIdOne = this.allProducts.pipe(
      map(re => re.filter(idOne => {
        return idOne.userId === this.id;
      }))
    );
  }



  toggelIntervalM() {

  }






  ngOnDestroy(): void {

  }


}
