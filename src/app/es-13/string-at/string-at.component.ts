import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-string-at',
  templateUrl: './string-at.component.html',
  styleUrl: './string-at.component.scss'
})
export class StringAtComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.example1();
  }

  // What is the at() method in JavaScript when used on strings ?
  // ...retrieve an element from an string using both positive and negative indices.
  // ...string.at(index);

  // How does at() differ from traditional bracket notation(str[index]) ?
  // Can you use at() with a positive index on a string ? Provide an example.
  // How does at() handle negative indices for strings ?
  // What happens if the index passed to at() is out of bounds in a string ?
  // Is at() a mutable method when used on strings ? Why or why not ?
  // What is the return type of str.at(index) ?
  example1() {
    const str = 'thisisteststring';
    console.log(str.at(1)); // h
    console.log(str.at(3)); // s
    console.log(str.at(4)); // i
    console.log(str.at(-1));// g
    console.log(str.at(-3));// i
    console.log(str.at(-4));// r
    console.log(str.at(-5));// t
    // How does at() behave when a floating - point number is passed as an index for a string ?
    // ...Math.trunc(index);
    console.log(str.at(2.5));// i
  }

  // Can you use at() on a string - like object, such as a String object instead of a primitive string ? // ...No
  // How does at() compare in performance with charAt() and bracket notation(str[index]) ?

  // What are the advantages of using at(-1) over str[str.length - 1] ? // 

  // How does at() handle multi - byte Unicode characters like 𠜎 that take more than one UTF - 16 code unit ?
  // Can at() be used in combination with map(), filter(), or reduce() when working with an array of strings ?
  // Write a polyfill for the at() method for strings to support older JavaScript versions.


}
