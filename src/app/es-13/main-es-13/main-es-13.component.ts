import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es-13',
  templateUrl: './main-es-13.component.html',
  styleUrl: './main-es-13.component.scss'
})
export class MainEs13Component {
  items: Array<{ title: string, link: string }> = [
    { title: 'String At', link: 'string-at' },
    { title: 'Array At', link: 'array-at' },
    { title: 'Regular Expression', link: 'reg-exp' },
    { title: 'Object HasOwn', link: 'obj-has-own' },
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
