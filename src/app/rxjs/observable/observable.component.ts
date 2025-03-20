import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {
  items: Array<{ title: string, link: string }> = [
    { title: 'Promise', link: 'promise' },
    { title: 'Map GroupBy', link: 'map-group-by' },
  ];
  constructor() { }
  ngOnInit(): void {

  }
}
