import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es6',
  templateUrl: './main-es6.component.html',
  styleUrl: './main-es6.component.scss'
})
export class MainES6Component {
  constructor() { }
  ngOnInit(): void {
  }

  items: Array<{ title: string, link: string }> = [
    { title: 'Let', link: 'let' },
    { title: 'Const', link: 'const' },
    { title: 'Arrow Function', link: 'arrow-function' },
    { title: 'Destructuring', link: 'destructuring' },
    { title: 'Array - Destructuring', link: 'array-destructuring' },
    { title: 'Spread And Rest', link: 'spread-rest' },
    { title: 'For Of', link: 'for-of' },
    { title: 'Classes', link: 'classes' },
    { title: 'Default Parameter', link: 'default-params' },
    { title: 'Rest Parameter', link: 'rest-params' },
    { title: 'Includes', link: 'includes' },
    { title: 'Starts With', link: 'starts-with' },
    { title: 'Ends With', link: 'ends-with' },
    { title: 'Array Entries', link: 'array-entries' },
    { title: 'Array From', link: 'array-from' },
    { title: 'Array Keys', link: 'array-keys' },
  ];

}