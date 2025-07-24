import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es-12',
  templateUrl: './main-es-12.component.html',
  styleUrl: './main-es-12.component.scss'
})
export class MainEs12Component {
  items: Array<{ title: string, link: string }> = [
    { title: 'String replaceAll()', link: 'string-replaceall' },
    { title: 'Numeric Separators', link: 'numeric-separators' },
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
