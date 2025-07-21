import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map, pluck, combineLatest, withLatestFrom, zip, forkJoin, take } from 'rxjs';

@Component({
  selector: 'ecmspt-zip-and-fork-join',
  templateUrl: './zip-and-fork-join.component.html',
  styleUrl: './zip-and-fork-join.component.scss'
})
export class ZipAndForkJoinComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {

  // Zip
  // jab dono source me change detect hota hai tb zip operator work krta hai 

  // combinelatest
  // combinelatest me jb do mese kisi ek me bhi change detect hota to combinelatest operator work krta hai

  // ForkJoin
  // forkJoin jb source complete hote hain to unki last value par kaam krta hai


  constructor(private _cdRef: ChangeDetectorRef) {

  }

  @ViewChild('name') name!: ElementRef;
  @ViewChild('color1') color1!: ElementRef;

  nameSources = ['Divya', 'Prakash', 'Mishra', 'Agam', 'Shresth', 'Rajan', 'Shri Hari'];
  colours = ['red', 'green', 'yellow', 'purple', 'grey'];
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(map(event => event.target.value), take(3));
    const colorObs = fromEvent<any>(this.color1.nativeElement, 'change').pipe(pluck('target', 'value'), take(4));

    // Ex - 01 Zip
    zip(nameObs, colorObs).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer');
      this._cdRef.detectChanges()
    });

    // Ex - 02 ForkJoin
    forkJoin(nameObs, colorObs).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer2');
      this._cdRef.detectChanges()
    });

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
