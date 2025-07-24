import { Component } from '@angular/core';
import { CommonService } from '../rxjs/service/comman.service';

@Component({
  selector: 'ecmspt-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private _common: CommonService) {
    this._common.exclusive.subscribe(res => {
      this.exclusive = res;
    });
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
    { title: 'RxJs', link: 'rxjs' },
    { title: 'Exercise 1', link: 'exer-1' },
  ];

  exclusive: boolean = false;
}
