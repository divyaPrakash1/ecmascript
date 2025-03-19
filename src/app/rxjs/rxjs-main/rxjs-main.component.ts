import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-rxjs-main',
  templateUrl: './rxjs-main.component.html',
  styleUrl: './rxjs-main.component.scss'
})
export class RxjsMainComponent {
  items: Array<{ title: string, link: string }> = [
    { title: 'Promise', link: 'promise' },
    { title: 'Map GroupBy', link: 'map-group-by' },
  ];
  constructor() { }
  ngOnInit(): void {

  }
}
