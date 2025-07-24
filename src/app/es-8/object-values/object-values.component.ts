import { Component, OnInit } from '@angular/core';
import { validateHeaderName } from 'http';

@Component({
  selector: 'ecmspt-object-values',
  templateUrl: './object-values.component.html',
  styleUrl: './object-values.component.scss'
})
export class ObjectValuesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example1();
    // this.example2();
    // this.filterObjectValue();
    this.minMax();
    const nestedObj = {
      a: 1,
      b: { nestedKey1: 10, nestedKey2: 20 },
      c: 3
    };

    console.log(this.getValuesFromNestedObject(nestedObj));
  }

  // What does Object.values() do in JavaScript ?
  // ...Object.values() is a built-in JavaScript method that returns an array of the values of an object's own enumerable properties.
  // ...Object.values(obj)
  // How can Object.values() be used to retrieve all the values from an object ?
  // What will Object.values() return if an object has no properties ?
  // How does Object.values() behave when the object has non - enumerable properties ?
  // What happens if you pass a primitive value(like a string, number, or boolean) to Object.values() ? // it will behave same
  // How can you use Object.values() to convert an object to an array of its values ?
  example1() {
    // besic
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    console.log(Object.values(obj)); // [1,2,3,4];

    // with empty object
    const empObj = {};
    console.log(Object.values(empObj)); // [];

    // with non enumerable prop
    const tempObj = { a: 1, b: 2, c: 3, d: 4 };
    Object.defineProperty(tempObj, 'e', {
      value: 5,
      enumerable: false
    });
    console.log(Object.values(tempObj)) // [1,2,3,4]; e is not included as it is enumerable

  }
  // Can you explain the difference between Object.values() and Object.entries() ?
  // ... object.values return only values while entries returns array of [key, value]
  example2() {
    const tempObj = { a: 1, b: 2, c: 3, d: 4 };
    console.log(Object.values(tempObj)) // [1,2,3,4]
    console.log(Object.entries(tempObj)) // [[a,1], [b,2], [c,3] ,[d,4]];
  }

  // Can Object.values() be used to filter an object's values? If yes, how?
  // Can Object.values() be combined with other array methods like map(), filter(), or reduce() ? Provide an example.
  filterObjectValue() {
    const tempObj = { a: 1, b: 2, c: 3, d: 4 };
    console.log(Object.values(tempObj).filter(e => e > 1)) // [2,3,4]
  }

  // How would you use Object.values() to find the maximum or minimum value in an object ?
  minMax() {
    const tempObj = { a: 1, b: 2, c: 3, d: 4 };
    console.log(Math.max(...Object.values(tempObj))); // 4
    console.log(Math.min(...Object.values(tempObj))); // 1
  }

  // Does Object.values() preserve the order of the values in an object ? // yes  

  // Can you use Object.values() to get values from nested objects ? If yes, how ?
  // Can Object.values() be used to extract values from an array of objects ?
  getValuesFromNestedObject(obj: any) {
    let values: any = [];
    Object.values(obj).forEach(value => {
      if (typeof value === 'object' && value !== null) {
        // Recursively get values from nested objects
        values = values.concat(this.getValuesFromNestedObject(value));
      } else {
        // Collect the value if it's not an object
        values.push(value);
      }
    });
    return values;
  }

  // How can you use Object.values() to check if all the values in an object satisfy a certain condition ? // Yes with loop

  // Can Object.values() be used to check for missing or undefined values in an object ? How would you do that ?
  filtersObjectValue() {
    const tempObj = { a: 1, b: null, c: 3, d: 4 };
    console.log(Object.values(tempObj).filter(e => !!e)) // [1, 2,4]
  }
}

