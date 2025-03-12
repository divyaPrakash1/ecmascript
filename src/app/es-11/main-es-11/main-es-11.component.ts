import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es-11',
  templateUrl: './main-es-11.component.html',
  styleUrl: './main-es-11.component.scss'
})
export class MainEs11Component {
  items: Array<{ title: string, link: string }> = [
    { title: 'Big Int', link: 'bigint' },
    { title: 'String Match All', link: 'string-match-all' },
    { title: 'Nullish Coalescing (??)', link: 'nullish-coalescing' },
    { title: 'Optional Chaining (?.)', link: 'optional-chaining' },
    { title: 'Lgcl Assin (&&=)', link: 'logical-and-assign' },
    { title: 'Lgcl Or (||=)', link: 'logical-or-assign' },
    { title: 'N Coale Assin (??=)', link: 'nullish-coalescing-assign' },
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
