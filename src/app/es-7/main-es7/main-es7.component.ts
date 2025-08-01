import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es7',
  templateUrl: './main-es7.component.html',
  styleUrl: './main-es7.component.scss'
})
export class MainES7Component implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  items: Array<{ title: string, link: string }> = [
    { title: 'JS Expo (**)', link: 'js-expo' },
    { title: 'JS Expo Assign (**=)', link: 'js-expo-assign' },
    { title: 'Array Includes', link: 'array-include' },
  ];

}