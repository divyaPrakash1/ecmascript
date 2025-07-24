import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'ecmspt-debounce-time-distinct-untill-changed',
  templateUrl: './debounce-time-distinct-untill-changed.component.html',
  styleUrl: './debounce-time-distinct-untill-changed.component.scss'
})
export class DebounceTimeDistinctUntillChangedComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput') myInput!: ElementRef; // Template reference variable
  @ViewChild('myInput1') myInput1!: ElementRef; // Template reference variable
  @ViewChild('myInput2') myInput2!: ElementRef; // Template reference variable

  constructor() { }

  reqData: string = '';
  isLoading: boolean = false;
  reqData1: string = '';
  isLoading1: boolean = false;
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    // this.onSearch();
    // this.onSearch1();
    this.onSearch2();
  }

  onSearch() {
    //Ex - 01
    // this.isLoading = true;
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500) // after 500 miliseconds data will subscribe
    )
    searchTerm
      .subscribe(res => {
        console.log('res', res);
        this.reqData = res;
        this.isLoading = false;
      },
        (err) => {
          this.isLoading = false;
        }
      );
  }
  onSearch1() {
    //Ex - 02
    const searchTerm = fromEvent<any>(this.myInput1.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500), // after 500 miliseconds data will subscribe
      distinctUntilChanged()
    )
    searchTerm
      .subscribe(res => {
        console.log('res', res);
        this.reqData1 = res;
        // this.isLoading = false;
      },
        (err) => {
          // this.isLoading = false;
        }
      );
  }

  onSearch2() {
    const obs1 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(e => e.target.value),
      debounceTime(2500),
      distinctUntilChanged()
    )
    obs1.subscribe(res => {
      console.log('This is test to change response', res);
    })
  }




}
