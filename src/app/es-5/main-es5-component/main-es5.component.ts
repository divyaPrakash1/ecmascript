import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es5',
  templateUrl: './main-es5.component.html',
  styleUrl: './main-es5.component.scss'
})
export class MainES5Component implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }

  items: Array<{ title: string, link: string }> = [
    { title: 'Multiline String', link: 'multiline-string' },
    { title: 'Trim', link: 'trim' },
    { title: 'Is Array', link: 'is-array' },
    { title: 'For Each', link: 'for-each' },
    { title: 'Map', link: 'map' },
    { title: 'Filter', link: 'filter' },
    { title: 'Reduce', link: 'reduce' },
    { title: 'Reduce Right', link: 'reduce-right' },
    { title: 'Every', link: 'every' },
    { title: 'Some', link: 'some' },
    { title: 'IndexOf', link: 'index-of' },
    { title: 'LastIndexOf', link: 'last-index-of' },
    { title: 'JSON Parse', link: 'json-parse' },
    { title: 'JSON Stringify', link: 'json-stringify' },
    { title: 'Date Now', link: 'date-now' },
    { title: 'Date TO ISO String', link: 'date-to-iso-string' },
    { title: 'Date TO JSON', link: 'date-to-json' },
  ];
}
