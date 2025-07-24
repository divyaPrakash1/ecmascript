import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-nullish-coales-assig-optr',
  templateUrl: './nullish-coales-assig-optr.component.html',
  styleUrl: './nullish-coales-assig-optr.component.scss'
})
export class NullishCoalesAssigOptrComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.example4();
  }

  // What does the ??= operator do in JavaScript ?
  // ...The Nullish Coalescing Assignment (??=) operator assigns a value to a variable only if the variable is null or undefined.
  example1() {
    let x;
    x ??= 10;
    console.log(x); // 10

    let age = 0;
    age ??= 25;
    console.log(age); // 0 (because 0 is NOT null or undefined)
  }

  // How does ??= differ from the Logical OR Assignment(||=) operator ?
  // How can ??= be used to assign default values only when a variable is null or undefined ? Provide an example.
  example2() {
    let x;
    x ??= 10;
    console.log(x); // 10

    let age = 0;
    age ||= 25;
    console.log(age); // 25
  }
  
  // Is ??= a short - circuiting operator ? Why or why not ?
  // ...Yes
  example3() {
    let x = 6;
    x ??= 10; // not evaluated as x is not null or undefined
    console.log(x); // 6
  }

  // Can ??= be used inside loops to modify variables conditionally ? Provide an example.
  example4() {
    let arr = [3, 2, 3, 4, null];
    let dadda;
    for (let el of arr) {
      dadda ??= el;
    }
    console.log(dadda); // 3
  }

  // How does ??= interact with optional chaining(?.) in JavaScript ? // obj.pane?.prop
  
  // What happens if ??= is used with falsy values like 0, "", or false ? // ...nothing will change
  
  // Can ??= be used for lazy initialization of object properties ? Provide an example. // ...obj.pane?.prop
  
  // What are some potential pitfalls when using ??= in JavaScript ? // ... 0, "", false
  
  // How does ??= compare to the traditional if statement for assigning default values ?
    
    
}