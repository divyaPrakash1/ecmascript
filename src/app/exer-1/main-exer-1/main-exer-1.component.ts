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
    { title: 'Common - 1', link: 'common-1' },
    { title: 'Common - 2', link: 'common-2' },
    { title: 'Common - 3', link: 'common-3' },
  ];
}