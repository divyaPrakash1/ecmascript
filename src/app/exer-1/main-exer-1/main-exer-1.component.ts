import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-exer-1',
  templateUrl: './main-exer-1.component.html',
  styleUrl: './main-exer-1.component.scss'
})
export class MainExer1Component {
  constructor() { }
  ngOnInit(): void {
  }

  items: Array<{ title: string, link: string }> = [
    { title: 'Common', link: 'common' },
  ];
}