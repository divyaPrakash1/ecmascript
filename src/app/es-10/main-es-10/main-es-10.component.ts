import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es-10',
  templateUrl: './main-es-10.component.html',
  styleUrl: './main-es-10.component.scss'
})
export class MainEs10Component {
  items: Array<{ title: string, link: string }> = [
    { title: 'String Trim Start', link: 'trim-start' },
    { title: 'String Trim End', link: 'trim-end' },
    { title: 'Object From Entries', link: 'object-from-entries' },
    { title: 'Optional Catch Binding', link: 'optional-catch-binding' },
    { title: 'Array Flat', link: 'flat' },
    { title: 'Array Flat Map', link: 'flat-map' },
    { title: 'Array Sort', link: 'array-sort' },
  ];
  constructor() { }
  ngOnInit(): void {
  }

}
