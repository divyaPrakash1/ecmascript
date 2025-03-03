import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-optional-catch-binding',
  templateUrl: './optional-catch-binding.component.html',
  styleUrl: './optional-catch-binding.component.scss'
})
export class OptionalCatchBindingComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }

  // How do you use optional catch binding in JavaScript ?
  example1() {
    try {
      // Some code that might throw an error
    } catch {
      // Handle the error without referencing the error object
      console.error('An error occurred');
    }

  }

}
