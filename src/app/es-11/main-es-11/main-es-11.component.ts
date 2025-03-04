import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es-11',
  templateUrl: './main-es-11.component.html',
  styleUrl: './main-es-11.component.scss'
})
export class MainEs11Component {
  items: Array<{ title: string, link: string }> = [
    { title: 'Big Int', link: 'bigint' },
    { title: 'String Match All', link: 'string-match-all' },
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
