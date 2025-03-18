import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-find-last',
  templateUrl: './find-last.component.html',
  styleUrl: './find-last.component.scss'
})
export class FindLastComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }

  // What does the findLast() method do in JavaScript ?
  // ...used to return the last element in an array that satisfies a given testing function. 
  // ...It searches the array from right to left but does not modify the original array.
  example1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // const lastEven = numbers.findLast(num => num % 2 === 0);
    // console.log(lastEven); // Output: 8
  }
  // How does findLast() differ from find() when searching for an element in an array ?
  // What value does findLast() return if no matching element is found ?
  // Can findLast() be used with arrow functions ? Provide an example.
  // How does findLast() handle sparse arrays(arrays with empty slots)?
  // What happens if findLast() is called on an empty array ?
  // Can findLast() modify the original array ? Why or why not ?
  // How does findLast() interact with objects inside an array ? Provide an example.
  // Is findLast() a mutating method ? Explain why.
  // Can findLast() be used with destructuring assignment ? Why or why not ?
  
}
