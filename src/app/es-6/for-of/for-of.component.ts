import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-for-of',
  templateUrl: './for-of.component.html',
  styleUrl: './for-of.component.scss'
})
export class ForOfComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    // this.useObjectInForOf();
    // this.modifyArrayWhileIterating();
    this.fetchData();
  }
  // Basic Questions:
  // What is the difference between a for loop and a for...of loop in JavaScript?
  diffForOfForLoop() {
    // Use a for loop when you need more control over the iteration process, such as managing the index, step size, or working with non - iterable structures.
    // Use a for...of loop when you want a cleaner and simpler syntax for iterating over iterable objects(e.g., arrays, strings, Sets), especially when you don't need the index of the elements.
    // ...Using traditional for loop
    let array = [10, 20, 30];
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);  // Logs 10, 20, 30
    }

    // Using for...of loop
    for (let value of array) {
      console.log(value);  // Logs 10, 20, 30
    }
  }

  // How would you use a for loop to iterate over an array in JavaScript ?
  useOfForLoop() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    for (let element of arr) {
      console.log(element);
    }
  }

  // What happens if you use the for...of loop with an object in JavaScript
  useObjectInForOf() {
    // The for...of loop is designed to work with iterable objects, such as arrays, strings, Sets, Maps, etc. If you try to use it with a non - iterable object, such as a plain object, it will throw a TypeError.
    // Example:
    // const obj: any = { a: 1, b: 2, c: 3 };
    // for (let value of obj) {
    //   console.log(value);  // TypeError: obj is not iterable
    // }
  }

  // Can you use a for loop to iterate over an array - like object, such as arguments or NodeList ? Explain how.
  useOfForLoop1() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    for (let element of arr) {
      console.log(element);
    }
  }

  // How would you iterate over an array using the for...of loop and access both the index and the value ?
  useOfForLoopWithIndexAndValue() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    for (let [index, value] of arr.entries()) {
      console.log(index, value);
    }
  }

  // Can you modify an array while iterating over it with a for...of loop ? What would happen if you do?
  modifyArrayWhileIterating() {
    let arr = [1, 2, 3, 4, 5];
    for (let value of arr) {
      // arr.push(value * 2);
    }
    console.log('1111111111111', arr);
  }

  // What are the potential drawbacks of using a for...of loop for iterating over large arrays compared to other iteration methods like forEach or a traditional for loop ?
  forLoopDrawbacks() {
    // The for...of loop is not suitable for modifying the array while iterating over it, as it does not provide a way to skip or jump to specific elements.
    // The for...of loop does not provide direct access to the index of the elements, which can be a limitation in some scenarios.
    // The for...of loop does not provide a way to break or continue the iteration based on conditions, which can be a limitation in some scenarios.
  }

  // Intermediate Questions:
  // How does the for...of loop differ from the for...in loop in JavaScript ?
  // ...The for...of loop is used to iterate over the values of an iterable object, such as an array, string, Set, Map, etc.
  // ...The for...in loop is used to iterate over the keys of an object, including inherited keys from the prototype chain.
  // ...The for...of loop works with iterable objects, while the for...in loop works with all enumerable properties of an object.
  // ...The for...of loop provides a cleaner syntax for iterating over arrays and iterable objects, while the for...in loop is more suitable for iterating over object properties.
  // ...The for...of loop does not iterate over non - enumerable properties, while the for...in loop does.
  // ...The for...of loop does not iterate over the prototype chain, while the for...in loop does.
  // ...The for...of loop does not provide access to the index of the elements, while the for...in loop does not provide direct access to the values.
  // ...The for...of loop is recommended for iterating over arrays and iterable objects, while the for...in loop is recommended for iterating over object properties.
  // ...How would you use the for...of loop to iterate over a Set or Map ?
  // ...The for...of loop can be used to iterate over the values of a Set or Map by directly looping over the Set or Map object.

  // What are the advantages of using the for...of loop over the traditional for loop for iterating over arrays or iterable objects ?
  // ...The for...of loop provides a cleaner and more concise syntax for iterating over arrays and iterable objects, making the code more readable and maintainable.
  // ...The for...of loop automatically handles the iteration process, such as getting the next value from the iterator, which simplifies the loop structure.
  // ...The for...of loop does not require managing the loop counter or index manually, reducing the chances of off - by - one errors.
  // ...The for...of loop works with any iterable object, not just arrays, making it more versatile and flexible for iterating over different data structures.
  // ...The for...of loop does not require accessing the elements by index, which can be error - prone and less readable compared to directly working with the values.
  // ...The for...of loop is recommended for scenarios where you need to iterate over the values of an array or iterable object without the need for the index.



  // Explain how you can use the for...of loop to iterate over a Set or Map.
  exampleOfForOfLoop() {
    // Iterating over a Set
    const set = new Set([1, 2, 3, 4, 5]);
    for (let value of set) {
      console.log(value);
    }

    // Iterating over a Map
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3]
    ]);
    for (let [key, value] of map) {
      console.log(key, value);
    }
  }


  // Is it possible to break or continue inside a for...of loop ? How would you do that ?
  exampleOfForOfLoop1() {
    const arr = [1, 2, 3, 4, 5];
    for (let value of arr) {
      if (value === 3) {
        break;  // Exit the loop when value is 3
      }
      console.log(value); // Logs 1, 2
    }
  }

  // How would you use the for...of loop to iterate over the keys or values of an object using Object.entries(), Object.keys(), or Object.values() ?
  exampleFor() {
    const obj = { a: 1, b: 2, c: 3 };
    for (let val of Object.keys(obj)) {
      console.log(val);  // Logs 'a', 'b', 'c'
    }
    for (let val of Object.values(obj)) {
      console.log(val);  // Logs 1, 2, 3
    }
    for (let [key, value] of Object.entries(obj)) {
      console.log(key, value);  // Logs 'a' 1, 'b' 2, 'c' 3 
    }
  }

  // Explain how you can iterate over a string using a for...of loop and provide an example.
  iterateString() {
    const str = 'Hello';
    for (let s of str) {
      console.log('aaaaaaaaaaaaaaaaaa', s);
    }
  }

  // What is the behavior of a for...of loop when dealing with asynchronous operations(e.g., promises) inside the loop ? How would you handle async operations within the loop ?
  async fetchData() {
    const data = [1, 2, 3, 4];
    for (let item of data) {
      const result = await this.getData(item);
      console.log('result', result);
    }
  }
  async getData(id: number) {
    return new Promise(resolve => setTimeout(() => resolve(`Data for ${id}`), 4000));
  }

  // Advanced Questions:
  // How do for...of and forEach compare in terms of performance and functionality when iterating over arrays ? // XXXX
  // Explain how the for...of loop works under the hood in terms of the Symbol.iterator protocol. // XXXX
  // What are some potential edge cases you should consider when using for...of in JavaScript, especially with sparse arrays or non - iterable objects ?
  sparseArray() {
    const sparseArray = [1, , 3];
    for (const value of sparseArray) {
      console.log(value);  // Output: 1, undefined, 3
    }
  }

  // How would you optimize a performance - critical loop, and when would you prefer using a traditional for loop over for...of ? // XXXX
  // Can you use for...of to iterate over the elements of a WeakMap or WeakSet ? Why or why not ? // XXXX
  // How would you modify a for...of loop to handle errors in each iteration using try...catch blocks ? // XXXX
  // Bonus :
  // Write a JavaScript function that uses a for...of loop to find the sum of all even numbers in an array. 
  getSum(arr: number[]) {
    let sum = 0
    for (let e of arr) {
      sum += e;
    }
    return sum;
  }

  // Given an array of objects, how would you use the for...of loop to filter and modify objects based on certain criteria ?
  modifyArray() {
    const users = [
      { name: 'John', age: 17 },
      { name: 'Jane', age: 22 },
      { name: 'Bob', age: 19 },
      { name: 'Alice', age: 15 }
    ];
    let modifyObject = [];

    for (let user of users) {
      if (user.age < 18) {
        user.age = user.age + 1;
        // modifyObject.push(user);

        const userM = { ...user, age: user.age + 1 };
        modifyObject.push(userM);

      }
    }
    console.log('11111', modifyObject);
  }
}
