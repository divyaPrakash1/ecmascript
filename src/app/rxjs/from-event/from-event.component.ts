import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { CommanService } from '../comman.service';

@Component({
  selector: 'ecmspt-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements OnInit, AfterViewInit {
  
  constructor(private _common: CommanService) { }
  @ViewChild('addBtn') addBtn!: ElementRef;
  
  ngOnInit(): void {
    
    
  }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      console.log('Video : ', count);
      this._common.print(`Video : ${count}`, 'elContainer');
      this._common.print(`Video : ${count}`, 'elContainer1');
      count++
    })
  }

  print() {
    // elContainer
  }

}
