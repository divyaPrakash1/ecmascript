import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  items: Array<{ title: string, link: string }> = [
    { title: 'ES-5', link: 'es-5' },
    { title: 'ES-6', link: 'es-6' },
    { title: 'JS - 2016', link: 'js-2016' },
    { title: 'JS - 2017', link: 'js-2017' },
    { title: 'JS - 2018', link: 'js-2018' },
    { title: 'JS - 2019', link: 'js-2019' },
    { title: 'JS - 2020', link: 'js-2020' },
    { title: 'JS - 2021', link: 'js-2021' },
    { title: 'JS - 2022', link: 'js-2022' },
    { title: 'JS - 2023', link: 'js-2023' },
    { title: 'JS - 2024', link: 'js-2024' },
  ];
  
  title = 'ES_Practice';
}
