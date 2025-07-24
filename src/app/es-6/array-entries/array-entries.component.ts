import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-array-entries',
  templateUrl: './array-entries.component.html',
  styleUrl: './array-entries.component.scss'
})
export class ArrayEntriesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.mainMethod();
    // this.withChaining();
    // this.modifyAnArray();
    // this.modifyAnSparseArray();
    this.convertResultInToObject();
  }

  // What is the purpose of the entries() method in JavaScript, and how does it work ?
  // How does the entries() method differ from keys() and values() in JavaScript arrays ? Can you provide examples ?
  // What is the output of calling the entries() method on an array ? Can you give an example with an array of numbers ?
  // How would you use the entries() method in combination with a for...of loop to iterate over an array and access both the index and value ?
  // What is the structure of the array elements returned by the entries() method ?
  mainMethod() {
    const numbers = [1, 2, 3, 4, 5];
    let iterator = numbers.entries();
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);

    for (let [i, n] of numbers.entries()) {
      console.log(i, n);
    }
  }

  // Can you use the entries() method in combination with the map() or filter() methods ? Provide an example.
  // Can you chain the entries() method with other array methods ? If so, give an example of using entries() with Array.from() to convert the iterator to an array.
  withChaining() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = Array.from(numbers.entries()).map(([index, value]) => value * 2)
    const filtered = Array.from(numbers.entries()).filter(([index, value]) => value % 2 === 0).map(([indexedDB, val]) => val);
    const doubledSpred = [...numbers.entries()].map(([index, value]) => value * 2)
    console.log('doubled', doubled, 'filtered', filtered, 'doubledSpred', doubledSpred);
  }

  // What happens if you modify the array during iteration with entries() in a loop ? Will it affect the iteration process ?\
  modifyAnArray() { // array will modify wit iteration process
    const numbers = [1, 2, 3, 4, 5];
    for (let [i, e] of numbers.entries()) {
      if (e == 4 && i < 6) numbers.push(e);
      console.log('asdfasf', numbers);
    }
  }

  // What is the time complexity of the entries() method in JavaScript ? // O(1)

  // How does the entries() method handle sparse arrays, and what does the resulting iterator look like ?
  modifyAnSparseArray() {
    const numbers = [1, 2, undefined, null, 5];
    for (let [i, e] of numbers.entries()) {
      console.log('asdfasf', i,e);
    }
  }

  // How would you convert the result of entries() into an object ?
  convertResultInToObject() {
    const numbers = [1, 2, 3, 4, 5];
    let obj: any = {};
    for (let [i, e] of numbers.entries()) {
      obj[i] = e;
    }

    console.log('object', obj)
  }

  // If you call entries() on an empty array, what is returned ? // 0 , undefined
  // What will be the result if you iterate over an array using entries() after modifying the array length ? // It will effect the iterated array

  // How can you break or continue iteration when using entries() in a loop ?
  breakAndContinue() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let [i, e] of numbers.entries()) {
      if (e > 5) {
        break; // Exit the loop when value is greater than 5
      }
      console.log(e);
    }
    for (let [i, e] of numbers.entries()) {
      if (e < 4) {
        continue; // Skip values less than 4
      }
      console.log(e);
    }

  }

}
