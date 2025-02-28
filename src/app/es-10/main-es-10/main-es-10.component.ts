import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es-10',
  templateUrl: './main-es-10.component.html',
  styleUrl: './main-es-10.component.scss'
})
export class MainEs10Component {
  items: Array<{ title: string, link: string }> = [
    { title: 'String Trim Starts', link: 'trim-starts' },
    // { title: 'New RegEx Feature', link: 'new-reg-ex-feature' },
  ];
  constructor() { }
  ngOnInit(): void {
  }

}
