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
    // { title: 'Common - 2', link: 'common-2' },
    // { title: 'Common - 3', link: 'common-3' },
  ];
}
