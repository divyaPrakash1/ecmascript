import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es7',
  templateUrl: './main-es7.component.html',
  styleUrl: './main-es7.component.scss'
})
export class MainES7Component {
  constructor() { }
  ngOnInit(): void {
  }

  items: Array<{ title: string, link: string }> = [
    { title: 'JS Exponentiation', link: 'js-exponentiation' },
  ];

}