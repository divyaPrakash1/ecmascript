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
  ];

}