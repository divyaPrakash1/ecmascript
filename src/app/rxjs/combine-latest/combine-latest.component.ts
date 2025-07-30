import { Component, ElementRef, OnDestroy, OnInit, ViewChild, AfterViewInit, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { combineLatest, fromEvent, map, pluck, withLatestFrom } from 'rxjs';

@Component({
  selector: 'ecmspt-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.scss'
})
export class CombineLatestComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  // combinelatest
  // a-----b-----------------c----d-----e--->
  // ---1------2----3----4------------------>
  // ---------Combine Latest ----------------
  // ---a1-b1--b2---b3---b4--c4---d4----e4-->

  // Jb bhi koi latest value emit hoti hai kisi bhi stream me, then dono stream me jo jo latest value hoti hai unka combination milta hai


  // withLatestfrom
  // if a is master and b is slave then if there is any change detech in a(master) then change will detect only
  constructor(private _cdRef: ChangeDetectorRef) {

  }

  @ViewChild('name') name!: ElementRef;
  @ViewChild('color1') color1!: ElementRef;
  @ViewChild('name1') name1!: ElementRef;
  @ViewChild('color2') color2!: ElementRef;

  nameSources = ['Divya', 'Prakash', 'Mishra', 'Agam', 'Shresth', 'Rajan', 'Shri Hari'];
  colours = ['red', 'green', 'yellow', 'purple', 'grey'];

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // this.example1();
    this.example2();


  }

  example1() {
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(map(event => event.target.value));
    const colorObs = fromEvent<any>(this.color1.nativeElement, 'change').pipe(pluck('target', 'value'));

    // Ex - 01 CombineLatest
    combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
      console.log('rerer', name, color);
      this.createBox(name, color, 'elContainer');
      this._cdRef.detectChanges()
    });


    // Ex - 02 withLatestfrom
    // Master nameObs
    // Slave colorObs
    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer2');
    })
  }


  example2() {
    console.log('aaaaaaaaaaaaaaaaaa');
    const nameSourcesObs = fromEvent<any>(this.name1.nativeElement, 'change').pipe(pluck('target', 'value'))
    const colorObs = fromEvent<any>(this.color2.nativeElement, 'change').pipe(map(e => e.target.value));

    combineLatest(nameSourcesObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer01')
    });

    // master name-
    // slave color-

    nameSourcesObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]) => {
      console.log('object')
      this.createBox(name, color, 'elContainer02')
    })
  }

  ngAfterContentInit(): void {

  }


  createBox(name: string, color: string, id: string) {
    let el = document.createElement('div');
    el.innerText = name;
    // el.setAttribute("class", color);
    el.style.backgroundColor = color;  // example: red, green, yellow, etc.
    el.style.color = 'white';
    el.style.height = '25px';
    el.style.width = '70px';
    document.getElementById(id)?.appendChild(el);
  }


  ngOnDestroy(): void {

  }

}
