import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-index-of',
  templateUrl: './index-of.component.html',
  styleUrl: './index-of.component.scss'
})
export class IndexOfComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // this.searchPosition();
    // this.findAllOccurence();
    // this.removeSpecificElement();
    this.getCount();
  }

  // What does Array.indexOf() do in JavaScript?
  // Expected answer: It returns the first index at which a given element can be found in the array, or -1 if the element is not present.

  //   What is the return value of indexOf() if the element is not found in the array ?
  //   Expected answer: -1.

  //   What arguments does the Array.indexOf() method take ?
  //   Expected answer: The method takes two arguments: the element to search for and an optional fromIndex to specify where to start the search.
  methodArguments() {
    const tempArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = tempArray.indexOf(3, 2); // two elements 3 is element to be search for index and 2 is searching starts from index 2
  }

  //   Write an example of using indexOf() to find the position of an element in an array.
  searchPosition() {
    const arr = [10, 20, 30, 40];
    console.log('result', arr.indexOf(20)); // 1
  }

  //   What will be the output of the following code ? Why ?
  getOutPut() {
    const arr = [1, 2, 3, 4, 1];
    console.log(arr.indexOf(1)); // ? 0, because indexOf() returns the first occurrence of the element.
  }

  //   What happens if the fromIndex is negative in Array.indexOf() ?
  fromIndexNegative() {
    const arr = [10, 20, 30, 40, 50];
    console.log(arr.indexOf(30, -2)); // -1 If fromIndex is negative, it is treated as an offset from the end of the array.
  }

  //   Can indexOf() find NaN in an array ? Why or why not ?
  canFindNaN() {
    const arr = [1, NaN, 2];
    console.log(arr.indexOf(NaN)); // -1 No, because indexOf() uses strict equality(===), and NaN !== NaN.
  }

  // How does indexOf() handle objects in arrays ?
  // Expected answer: indexOf() checks for object references, not object content.Example:
  checkObject() {
    const obj = { a: 1 };
    const arr = [obj, { a: 1 }];
    console.log(arr.indexOf({ a: 1 })); // -1
    console.log(arr.indexOf(obj)); // 0
  }

  // What is the difference between Array.indexOf() and Array.includes() ?
  // Expected answer:
  // indexOf() returns the index of the element or - 1 if it is not found.
  // includes() returns true or false based on the presence of the element.

  // How can you find all occurrences of an element in an array using indexOf() ? Example :
  findAllOccurence() {
    const arr = [1, 2, 3, 1, 4, 1];
    const target = 1;
    let occurrence = [];
    let idx = arr.indexOf(target);
    while (idx !== -1) {
      occurrence.push(idx);
      idx = arr.indexOf(target, idx + 1);
    }
    console.log(occurrence); // [0, 3, 5]
  }

  // What are the limitations of Array.indexOf() ?
  // 1. Cannot find NaN.
  // 2. Does not work with deep comparisons for objects.
  // 3. Does not support case -insensitive comparisons for strings.

  // How can you use indexOf() to remove a specific element from an array ? Example :
  removeSpecificElement() {
    const arr = [10, 20, 30, 40];
    const idx = arr.indexOf(30);
    arr.splice(idx, 1);
    console.log('result', arr);
  }
  

  // How can you use indexOf() to check if a specific string is a substring of another string ?
  checkString() {
    const str = "Hello, world!";
    console.log(str.indexOf("world") !== -1); // true
  }

  // Write a function that uses indexOf() to count how many times a specific element occurs in an array.
  getCount() {
    const arr = [1, 2, 1, 3, 1, 4];
    const target = 1;
    let count = 0;
    let idx = arr.indexOf(target);
    while (idx !== -1) {
      count++;
      idx = arr.indexOf(target, idx + 1);
    }
    console.log('count', count); // 3
  }


  // How would you find the index of the first even number in an array using indexOf() and map() ?
  getEvenNumberIndex() {
    const arr = [1, 3, 5, 8, 10];
    const evenIndex = arr.map(e => e % 2 === 0).indexOf(true);
    console.log(evenIndex); // 3
  }


}
