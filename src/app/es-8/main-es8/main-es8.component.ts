import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es8',
  templateUrl: './main-es8.component.html',
  styleUrl: './main-es8.component.scss'
})
export class MainES8Component implements OnInit{
  constructor() { }
  ngOnInit(): void {
  }

  items: Array<{ title: string, link: string }> = [
    { title: 'JS String padding', link: 'js-str-padding' },
    { title: 'Object Entries', link: 'object-entries' },
    { title: 'Object Values', link: 'object-values' },
    { title: 'Async Await', link: 'async-await' },
  ];
}



