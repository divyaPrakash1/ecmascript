import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-array-destructuring',
  templateUrl: './array-destructuring.component.html',
  styleUrl: './array-destructuring.component.scss'
})
export class ArrayDestructuringComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.swapVariable();
    // this.besicDes();
    // this.destructuredDefaultValue();
    // this.testFn([1, 3]);
    // this.handleNullOrUndefined();
    this.forOfLoop();

    const person: any = ['Alice', 30];

    // Destructuring the array and passing the elements as separate arguments
    // this.greet(...person); 
  }


  // Basic Destructuring Questions
  // What is array destructuring in JavaScript ? Can you explain with an example ?
  // How would you extract values from an array using destructuring?
  // What is the syntax for destructuring an array in JavaScript ?
  // How would you destructure a tuple(fixed - length array) in JavaScript ?
  besicDe() {
    const arr = [1, 2, 3, 4, 5];
    const [a, b, c, d, e, f, g, h] = arr;
  }
  
  // How can you swap two variables using array destructuring?
  swapVariable() {
    let a = 10;
    let b = 20;
    [a, b] = [b, a];
    console.log(a, b);
  }

  // What happens if the number of variables on the left - hand side of the destructuring does not match the number of elements in the array ?
  besicDes() {
    const arr = [1, 2, 3, 4, 5];
    const [a, b, c, d, e, f, g, h] = arr;
    console.log(a, b, c, d, e, f, g, h,);  // 1 2 3 4 5 undefined undefined undefined
    const [x, y, z] = arr;
    console.log(x, y, z); // 1 2 3
  }

  // Can you provide an example of using array destructuring with a default value ?
  destructuredDefaultValue() {
    const ar = [1, 2];
    const [a, b, c = 3] = ar;
    console.log('result', a, b, c);
  }
  
  // What happens if you destructure an array and try to access an element that doesn't exist? // undefined
  accessDoesNotExist() {
    const arr = [1, 2];
    const [first, second, third] = arr;
    console.log(first); // 1
    console.log(second); // 2
    console.log(third); // undefined

  }
  
  // Can you destructure an array with a dynamic number of elements ? How would you handle this situation ?
  dynamicNumber() {
    const arr = [1, 2, 3, 4, 5, 6];
    const [first, second, third, ...rest] = arr;
    console.log(first); // 1
    console.log(second); // 2
    console.log(third); // 3
    console.log(rest); // 4,5,6
  }

  // Advanced Destructuring Questions
  // How would you destructure an array of arrays in JavaScript ?
  destructureArrayOfArray() {
    const arrOfArrays = [[1, 2], [3, 4], [5, 6]];
    const [[a, b], [c, d], [e, f]] = arrOfArrays;
  }
  
  // How do you handle missing values during destructuring when working with arrays ?
  handleMissingValues() {
    const arrOfArrays = [[1, 2], [3], [5, 6]];
    const [[a, b], [c, d = 9], [e, f]] = arrOfArrays;
  }

  // What is the role of the spread operator(...) when combined with array destructuring ?
  handleRestParameter() {
    const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [a, b, c, ...rest] = tempArray;

  }
  // Can you use array destructuring to unpack nested arrays ? If so, demonstrate with an example.
  unpackArray() {
    const nestedArray: any = [1, [2, 3], [4, 5]];

    // Destructuring the nested array
    const [a, [b, c], [d, e]] = nestedArray;

    console.log(a); // 1
    console.log(b, c); // 2 3
    console.log(d, e); // 4 5
  }

  // How does destructuring an array affect performance when dealing with large arrays ? //  In such cases, direct indexing (e.g., arr[0], arr[1]) might be slightly faster.
  
  // What will happen if you destructure an empty array ?
  emptyArray() {
    const tt: any = [];
    const [a, w, e, d, s] = tt;
    console.log(a, w, e, d, s); // undefined, undefined, undefined, undefined, undefined, 
  }
  
  // Can you use array destructuring to destructure both elements and the remainder of the array ? Provide an example.
  bothElement() {
    const array = [1, 2, 3, 4, 5];
    // Destructuring to get the first element and the remainder of the array
    const [first, second, ...rest] = array;
    console.log(first);  // 1
    console.log(second); // 2
    console.log(rest);   // [3, 4, 5]
  }

  
  // Can you use array destructuring inside a function parameter? Show how.
  // testFn([a, b]) {
  //   return a + b;
  // }
  
  // What is the difference between array destructuring and the spread operator when used in the same context ?
  bothElements() {
    const array = [1, 2, 3, 4, 5];
    // Destructuring to get the first element and the remainder of the array
    const [first, second, ...rest] = array;
    console.log(first);  // 1
    console.log(second); // 2
    console.log(rest);   // [3, 4, 5]
  }

  // How would you handle an array that contains undefined or null values using destructuring?
  // How do you handle an array with NaN, null, or undefined values during destructuring ?
  handleNullOrUndefined() {
    const arrr: any = [1, 'd', null, undefined, 4];
    const [a, b, c, d, e] = arrr;
    console.log(a, b, c, d, e); // 1 'd' null undefined 4
  }
  
  // Explain the concept of "rest" in array destructuring and provide an example.
  // How would you destructure the first two values from an array and keep the rest as an array ?
  // Can you destructure an array with an unknown number of elements, and how would you handle the excess elements ?
  bothElementss() {
    const array = [1, 2, 3, 4, 5];
    // Destructuring to get the first element and the remainder of the array
    const [first, second, ...rest] = array;
    console.log(first);  // 1
    console.log(second); // 2
    console.log(rest);   // [3, 4, 5]
  }

  // How can you destructure arrays with optional elements and provide default values for those missing elements ?
  optionalElement() {
    const aaaa = [1];
    const [a, b = 2] = aaaa;
  }
  
  // How would you destructure a deeply nested array ?
  nestedArray() {
    const tempNestedArray: any = [1, [2, 3, 4, [5, 6, 7], 8]];
    const [a, [b, c, d, [e, f, g], h]] = tempNestedArray;
  }

  // What happens if you destructure an array where the array contains other arrays or objects ? Can you give an example ?
  arrOrObject() {
    const tempNestedArray: any = [1, [2, 3, 4, [5, 6, 7], 8]];
    const [a, [b, c, d, [e, f, g], h]] = tempNestedArray;

    const array = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
    const [{ name: name1, age: age1 }, { name: name2, age: age2 }] = array;
  }

  // Can you destructure an array with a for...of loop ?
  forOfLoop() {
    const array = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
    for (const { name, age } of array) {
      console.log(name, age);
    }
  }
      
  // How would you destructure an array into a variable for a function that expects two separate arguments ?
  greet(name: any, age: any) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  }
}
