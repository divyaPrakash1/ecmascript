import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es-14',
  templateUrl: './main-es-14.component.html',
  styleUrl: './main-es-14.component.scss'
})
export class MainEs14Component {
  items: Array<{ title: string, link: string }> = [
    { title: 'Find Last', link: 'find-last' },
    { title: 'Find Last Index', link: 'find-last-index' },
    { title: 'To Reserved', link: 'to-reserved' },
    { title: 'To Sorted', link: 'to-sorted' },
    { title: 'To Spliced', link: 'to-spliced' },
    { title: 'Array With', link: 'array-with' },
  ];
  constructor() { }
  ngOnInit(): void {

  }
}
