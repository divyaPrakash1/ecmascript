import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit{
  constructor() { }
  
  ngOnInit(): void {
    this.modifyArray();
    this.convertUpperCase();
    this.extractFromObjectWithMap();
    this.chainingWithMap();
    this.withoutReturnInMap();
    this.handleSparseArrayMap();
    this.modificationArrayDuringMap();
  }


  modifyArray(): void { // !!!
    let tempArray = [2, 3, 4, 5, 6, 2, 7, 6, 5, 4, 3, 2];
    let doubleArray = tempArray.map(e => e * 2);
    console.log('tempArray', tempArray);
    console.log('doubleArray', doubleArray);
  }
  
  convertUpperCase(): void { // @@@
    const words = ["hello", "world"];
    let uppercaseArray = words.map(e => e.toUpperCase());
    console.log('words', words);
    console.log('uppercaseArray', uppercaseArray);
  }

  extractFromObjectWithMap(): void { // ###
    const objectArray = [
      { fName: "Divya Prakash", lName: "Mishra", gender: 'Male'},
      { fName: "Krishna", lName: "Yadav", gender: 'Male'},
      { fName: "Kashish", lName: "Gupta", gender: 'Male'},
      { fName: "Shalini", lName: "Sharma", gender: 'Female'},
      { fName: "Sangeeta", lName: "Gehlot", gender: 'Female'},
      { fName: "Nikhil", lName: "Garg", gender: 'Male'}
    ];
    const objectName = objectArray.map(obj => obj.fName);
    console.log(objectName);
  }

  convertForLoopToMap(): void { // $$$
    // const arr = [1, 2, 3];
    // const result = [];
    // for (let i = 0; i < arr.length; i++) {
    //   result.push(arr[i] * 2);
    // }
    const arr = [1, 2, 3];
    const result = arr.map(e => e * 2);
    console.log('result', result);
  }

  chainingWithMap(): void { // %%%
    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
    const result = arr.map(e => e * 2).filter(e => e >10).map(e => e + 4 ).reduce((sum, el) => sum + el, 0);
    console.log('result', result);
  }

  withoutReturnInMap(): void { // ^^^
    const arr = [1, 2, 3, 4, 5];
    const result = arr.map(e => e * 2); // it will defalt return
    console.log('result', result);
    const result1 = arr.map(e => {
      e * 2
    }); // it will return undefined array
    console.log('result', result1);
    const result2 = arr.map(e => {
      return e * 2
    }); // it will return calculated array
    console.log('result', result2);
  }


  handleSparseArrayMap(): void { // &&&
    const arr = [1, , 3, , 5]; // sparse array means that has some missing indexes
    const result = arr.map(e => (e || 0) * 2);
    const result1 = arr.filter(e => (e || 0));
    const result2 = arr.every(e => (e || 0) * 2);
    const result3 = arr.some(e => (e || 0) * 2);
    console.log('result', result, result1, result2, result3);
  }

  forAndMap() { // ****
    // For is faster it can be used in gaming, and where time count in milisecond
    // Use For performance or complex control logic is a priority.
    // Map is slower than for because it is adheres to functional programming principles
    // Use Map when working with array transformations for readability, immutability, and clean code
    const arr = [1, 2, 3, 4, 5];

  }

  modificationArrayDuringMap() { // (((
    // Modifyning
    const arr1 = [1, 2, 3];
    const result1 = arr1.map((value, index) => {
      if (index === 1) {
        arr1[2] = 10; // Modifying element at index 2
      }
      return value * 2;
    });
    console.log(result1); // Output: [2, 4, 6]
    // Explanation: `arr1[2]` was modified, but the callback already processed it, so the original value (3) was used.

    const arr2 = [1, 2, 3];
    const result2 = arr2.map((value, index) => {
      if (index === 1) {
        arr2.push(4); // Adding a new element
      }
      return value * 2;
    });
    console.log(result2); // Output: [2, 4, 6]
    // Explanation: `map()` determines the array length at the start (3 in this case), so the added element (4) is ignored.

    const arr3 = [1, 2, 3];
    const result3 = arr3.map((value, index) => {
      if (index === 1) {
        arr3.pop(); // Removing the last element
      }
      return value * 2;
    });
    console.log(result3); // Output: [2, 4, undefined]
    // Explanation: The third element is removed before it can be processed, so `map()` skips it and leaves the result as `undefined`.

  }


  // thisImplementationWithMap() {
  //   // const multiplier = {
  //   //   factor: 2
  //   // }

  //   // const numbers = [1, 2, 3, 4, 5];
  //   // const result = numbers.map(function (element) {
  //   //   return element * this.fa;
  //   // })
  // }

  // create 10 dummy json data?
  // Can you use the this argument in the map() method ? How does it work ?

  // What is the map() method in JavaScript, and what is its purpose ? // to iterate or modify each element of an array
  // What type of data structure is the map() method used with? // array
  // What does the map() method return? // array
  // How is the map() method different from a forEach() loop ? // it return array while foreach return undefined
  // Does map() modify the original array ? Explain why or why not. // No it will return new array !!!

  // Write a simple program using map() to double the values in an array. // !!!
  // Given an array of strings, use map() to convert all strings to uppercase. // @@@
  // const words = ["hello", "world"];
  // Expected output: ["HELLO", "WORLD"]

  // What will the following code output ? // [0, 2, 6]
  // const nums = [1, 2, 3];
  // const result = nums.map((num, index) => num * index);
  // console.log(result);
  // Use map() to create a new array from an array of objects, extracting a specific property(e.g., names from an array of user objects). // ###

  // Refactor the following for loop using the map() method // $$$
  // const arr = [1, 2, 3];
  // const result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   result.push(arr[i] * 2);
  // }

  // What are the arguments passed to the callback function in the map() method ? // element, index, array
  // How can you chain the map() method with other array methods like filter() or reduce() ? Provide an example. // %%%
  // Can you use async functions or promises inside map() ? What should you watch out for? // Skip for now as it is part of Promise (map.component.ts)
  // What happens if you don’t return anything from the callback function used in map() ? // ^^^
  // How can you handle sparse arrays when using map() ? &&&

  // Compare the performance of map() vs a traditional for loop.When would you prefer one over the other ? // ****
  // What would happen if the array being iterated over is modified during the execution of map() ? // XXXX
  // Implement a polyfill for the map() method. XXXX
  // Explain the time complexity of the map() method. // Best-case Time	O(n), // Worst-case Time	O(n * m)(if callback is complex)

  // Worst-case Time	
  // const arr = [1, 2, 3, 4];
  // const result = arr.map(num => {
  //   for (let i = 0; i < num; i++) {
  //     console.log(i);
  //   }
  //   return num * 2;
  // });
  
  //Best-case Time	O(n)
  // const arr = [1, 2, 3, 4];
  // const result = arr.map(num => num * 2);

}