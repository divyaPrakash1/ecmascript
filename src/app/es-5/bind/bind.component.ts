import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-bind',
  templateUrl: './bind.component.html',
  styleUrl: './bind.component.scss'
})
export class BindComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    const add = (a: any, b: any) => a + b;
    const add5 = add.bind(null, 5); // Pre-set the first argument to 5
    console.log(add5(10)); // Output: 15
  }

}
