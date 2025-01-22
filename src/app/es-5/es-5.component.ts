import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './es-5.component.html',
  styleUrl: './es-5.component.scss'
})
export class ES5Component implements OnInit {
  ngOnInit(): void {
    console.log('Dadda')
  }
  items: Array<{ title: string, link: string }> = [
    { title: 'Multiline String', link: 'multiline-string' },
    { title: 'Trim', link: 'trim' },
    { title: 'Is Array', link: 'is-array' },
    { title: 'For Each', link: 'for-each' },
    { title: 'Map', link: 'map' },
    { title: 'Filter', link: 'filter' },
    { title: 'Reduce', link: 'reduce' },
    // { title: 'JS - 2021', link: 'js-2021' },
    // { title: 'JS - 2022', link: 'js-2022' },
    // { title: 'JS - 2023', link: 'js-2023' },
    // { title: 'JS - 2024', link: 'js-2024' },
  ];
  title = 'ES_Practice';
}
