import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-trailing-comma-functions',
  templateUrl: './trailing-comma-functions.component.html',
  styleUrl: './trailing-comma-functions.component.scss'
})
export class TrailingCommaFunctionsComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
    
    this.example(1, 2, 3);
  }


  example(a: number, b: number, c: number,) {
  console.log(a, b, c);
}
}
