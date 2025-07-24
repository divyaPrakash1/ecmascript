import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-array-keys',
  templateUrl: './array-keys.component.html',
  styleUrl: './array-keys.component.scss'
})
export class ArrayKeysComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.mainMethod();
    // this.diffKeyEntriesAndValues();
    // this.effectionsArray();
    // this.sparseArray();
    // this.example1();
    this.emptyArray();
  }


  // What is the purpose of the Array.keys() method in JavaScript, and how does it work ?
  mainMethod() {
    const arr = [1, 2, 3, 4];
    const arrKeys = arr.keys();

    console.log(arrKeys.next().value);
    console.log(arrKeys.next().value);
    console.log(arrKeys.next().value);
    console.log(arrKeys.next().value);
    console.log(arrKeys.next().value);
    console.log(arrKeys.next().value);

    for (let e of arr.keys()) {
      console.log(e);
    }
    arr.values()
  }
  
  // How would you use Array.keys() to iterate over an array's indexes? Can you provide an example?
  // Can you explain what the result of calling Array.keys() on an array is ? How is it different from just logging the array itself ?
  // What is the return type of Array.keys() when applied to an array ? How would you convert this result into an array of keys ?
  // How does Array.keys() differ from other methods like Array.entries() and Array.values() ?
  diffKeyEntriesAndValues() {
    const arr = ['a', 'b', 'c'];

    const keys = arr.keys();
    console.log([...keys]);  // [0, 1, 2] (array indices)

    const entries = arr.entries();
    console.log([...entries]);  // [[0, 'a'], [1, 'b'], [2, 'c']]

    const values = arr.values();
    console.log([...values]);  // ['a', 'b', 'c']
  }

  // If you modify the array while iterating over the result of Array.keys(), how does that affect the iteration ?
  effectionsArray() { // No
    const arr = [1, 2, 3, 4];
    for (let e of arr.keys()) {
      if(e == 4) arr.push(5)
      console.log(e);
    }
  }

  // Can Array.keys() be used with sparse arrays ? How does it behave with missing indices ?
  sparseArray() {
    const arr = [1, 2, , 3, 4, 4, , 5, 6, 6,];
    for (let e of arr.keys()) {
      console.log(e);
    }
  }

  // What is the time complexity of Array.keys(), and what impact does it have on performance with large arrays ? // O(n)

  // How would you handle iterating over an array of objects, and in each iteration, access the index using Array.keys() ?
  // How would you use Array.keys() in combination with other array methods like map(), forEach(), or reduce() ? Provide an example.
  // What is the difference between Array.keys() and Object.keys() ? Can Array.keys() be used on objects with non - numeric keys ?
  // Can you use Array.keys() to iterate over the indexes of an array and perform a specific action on every second index ? How would you achieve that ?
  example1() {
    const numbers = [10, 20, 30, 40];
    const doubledNumbers = [...numbers.keys()].map(index => numbers[index] * 2);
    console.log(doubledNumbers);

    [...numbers.keys()].forEach(index => console.log(`Index: ${index} and Value: ${numbers[index]}`))
    const sum = [...numbers.keys()].reduce((acc, currVal) => acc + currVal, 0);
    console.log("sumsumsumsumsumsumsumsum", sum);
  }

  // Can you use Array.keys() to get the indexes of an array - like object(e.g., NodeList or arguments object) ? How would that differ from using Object.keys() ?

  // How does Array.keys() behave with non - array objects ? Will it return the property keys if applied to an object ?
  // ...it will not return the property keys of the object. Instead, it will return an empty array ([]), because Array.keys() is expecting an array-like object, not a plain object.



  // What happens when you call Array.keys() on an empty array or an array with a length of 0 ?
  emptyArray() {
    console.log([...[].keys()]); // []
  }




}
