import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-array-find',
  templateUrl: './array-find.component.html',
  styleUrl: './array-find.component.scss'
})
export class ArrayFindComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.findName();
    this.checkTrueAndFalse();
  }


  // What does the Array.find() method do in JavaScript ?
  // ... array.find(callback(element, index, array), thisArg);
  mainMethod() {
    const numbers = [4, 9, 16, 25];
    const result = numbers.find(e => e > 10);
    console.log(result) // 16
  }

  // Important points:
  // ...It returns the first match found.
  // ...It stops iterating once a match is found.
  // ...If no element satisfies the condition, it returns undefined.

  // What does Array.find() return if no element satisfies the provided condition ?
  // ...If no element satisfies the condition, it returns undefined.

  // What happens when there are multiple elements in the array that satisfy the condition passed to Array.find() ?
  // ...It returns the first match found.
  // ...It stops iterating once a match is found.

  // What parameters does the callback function of Array.find() receive ?
  // ... array.find(callback(element, index, array), thisArg);

  // How does Array.find() differ in terms of performance from Array.filter() ?
  findAndFilter() {
    // Find
    // ...It returns the first match found.
    // ...It stops iterating once a match is found.
    // ...If no element satisfies the condition, it returns undefined.
    const numbers = [4, 9, 16, 25];
    const result1 = numbers.find(e => e > 10);
    console.log(result1) // 16

    // Filter
    // ...It returns the all match found with array.
    // ...It execute iterating till last element.
    // ...If no element satisfies the condition, it returns [].
    const result2 = numbers.filter(e => e > 10);
    console.log(result1) // [16, 25]
  }

  // How can you use Array.find() to find an object in an array of objects based on a specific property ?
  findName() {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];
    const name = users.find((el) => el.id === 2)
    console.log('datta', name);
  }

  // Does Array.find() iterate through the entire array ? How does it behave when it finds a match ?
  // ...It stops iterating once a match is found.

  // Can you give an example where using Array.find() is more appropriate than using Array.filter() ?
  // ...When needed only specific element

  // What will be the result if you use Array.find() on an empty array ?
  // ...undefined

  // How does the thisArg parameter work in the context of Array.find() ?
  // ...thisArg (optional): The value that will be used as this inside the callback.

  // How does Array.find() differ from Array.findIndex() ?
  // ...find return element while findIndex element index

  // How does Array.find() behave when dealing with NaN in the array ?
  // ...However, there is a unique behavior with NaN when used in comparisons because NaN is not equal to itself in JavaScript (i.e., NaN !== NaN).
  withNANArray() {
    const numbers = [1, 2, NaN, 4];
    // Find the first NaN in the array
    // const result = numbers.find(num => num === NaN);
    // console.log(result); // Output: undefined
  }

  // What would happen if the callback function passed to Array.find() returns a value other than true or false ?
  checkTrueAndFalse() {
    const numbers = [1, 2, 3, 4];
    const result = numbers.find(num => num > 2 ? 'Yes' : 'No');
    console.log('result', result); 
  }
  // What happens if the array is mutated(e.g., elements are added or removed) during the execution of Array.find() ?
  // ...lead to unexpected behavior or inconsistent results

  // Is it possible to use Array.find() with asynchronous operations ? What are the potential issues ? //XXXX
    
  
}
