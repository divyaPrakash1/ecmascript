import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es-9',
  templateUrl: './main-es-9.component.html',
  styleUrl: './main-es-9.component.scss'
})
export class MainEs9Component {
  constructor() { }
  ngOnInit(): void {
  }

  items: Array<{ title: string, link: string }> = [
    { title: 'Object Rest Props', link: 'object-rest-props' },
    { title: 'New RegEx Feature', link: 'new-reg-ex-feature' },
  ];
}
