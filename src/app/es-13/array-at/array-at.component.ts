import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-array-at',
  templateUrl: './array-at.component.html',
  styleUrl: './array-at.component.scss'
})
export class ArrayAtComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.example1();
  }

  // What is the at() method in JavaScript ?
  // ...retrieve an element from an array using both positive and negative indices.
  // ...array.at(index);
  // How does at() differ from traditional bracket notation(arr[index]) ?
  // Can you use at() with a positive index ? Provide an example.
  // How does at() handle negative indices ?
  // What happens if the index passed to at() is out of bounds ?
  // How does at() behave when used on an empty array ?
  // Can at() be used with strings ? Provide an example.
  // What are the advantages of using at(-1) over arr[arr.length - 1] ?
  // How does at() behave if you pass a floating - point number as an index ?
  // How does at() compare in performance with arr[index] ?
  // Can at() be used in chained array methods like map(), filter(), or reduce() ? Provide an example.
  example1() {
    const numbers = [10, 20, 30, 40];
    console.log(numbers.at(1)); // 20
    console.log(numbers.at(3)); // 40
    console.log(numbers.at(4)); // undefined (out of bounds)

    console.log(numbers.at(-1)); // 40 (Last element)
    console.log(numbers.at(-3)); // 20 (Second Last)
    console.log(numbers.at(-4)); // 10 (First Element)
    console.log(numbers.at(-5)); // undefined (out of bounds)

    const fruits = ["apple", "banana", "cherry"];
    console.log(fruits.at(-1));  // "cherry" ✅ (Cleaner)
    console.log(fruits[fruits.length - 1]); // "cherry" (More complex)

    console.log([].at(0));    // undefined (Empty array)
    console.log([1, 2, 3].at(5)); // undefined (Out of bounds)
    console.log([1, 2, 3].at(-5)); // undefined (Out of bounds)
    console.log("Hello".at(1)); // "e" (Works on strings too!)
    console.log([1, 2, 3].at(2.2)); // undefined (Out of bounds)
    console.log([1, 2, 3].at(2.2)); // undefined (Out of bounds)

    const numbers1 = [10, 20, 30, 40, 50];
    // Math.trunc(index);
    console.log(numbers1.at(2.9));  // 30 (Equivalent to numbers.at(2))
    console.log(numbers1.at(-2.7)); // 40 (Equivalent to numbers.at(-2))
    console.log(numbers1.at(1.5));  // 20 (Equivalent to numbers.at(1))
    // console.log(numbers1.at(undefined));  // ...Error

    console.log(numbers1.filter(e => e > 20).at(2)); // 40
  }

  // Is at() a mutable method ? Why or why not ? // ...No
  // Can you use at() on array - like objects(e.g., arguments or NodeList) ? // ...No
  // What is the return type of at() if the element at the given index is undefined ? // ...Error
  

  // Write a polyfill for the at() method to support older JavaScript environments.

}
