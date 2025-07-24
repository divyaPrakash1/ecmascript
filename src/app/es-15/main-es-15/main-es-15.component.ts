import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es-15',
  templateUrl: './main-es-15.component.html',
  styleUrl: './main-es-15.component.scss'
})
export class MainEs15Component {
  items: Array<{ title: string, link: string }> = [
    { title: 'Object GroupBy', link: 'object-group-by' },
    { title: 'Map GroupBy', link: 'map-group-by' },
  ];
  constructor() { }
  ngOnInit(): void {

  }
}
