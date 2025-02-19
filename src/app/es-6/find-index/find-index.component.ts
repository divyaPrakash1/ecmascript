import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-find-index',
  templateUrl: './find-index.component.html',
  styleUrl: './find-index.component.scss'
})
export class FindIndexComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.withFalseValue();
    // this.firstEven();
    // this.getRacer();
    this.getRacer1();
  }


  // What does the Array.findIndex() method do in JavaScript ?
  // ...array.findIndex(callback(element, index, array), thisArg);
  // ...It returns the index of the first element that satisfies the condition(i.e., when the callback function returns a truthy value).
  // ...If no element satisfies the condition, it returns - 1.
  // ...It stops iterating once it finds the first matching element.

  // What is the return value of Array.findIndex() when no element in the array satisfies the condition ?
  // ...If no element satisfies the condition, it returns - 1.

  // Can Array.findIndex() be used to find the index of an object in an array based on a property value ? Provide an example.
  // Can you explain how Array.findIndex() works with arrays of objects ? Provide an example of finding an object based on one of its properties.
  objectBasedArray() {
    const users = [
      {id:1, name:'Dadda'},
      {id:2, name:'Actor'},
      {id:3, name:'Technical PM'},
      {id:4, name:'Dadda'},
      {id:5, name:'Dadda'},
    ]

    const indexI = users.findIndex(obj => obj.id === 3);
    console.log(indexI);
  }

  // How does Array.findIndex() behave when the array contains undefined, null, or other falsy values ?
  withFalseValue() {
    const withFalsyValue = [1, undefined, 2, null, false];
    const getIdx = withFalsyValue.findIndex((el) => el === null);
    console.log('asdfasdf', getIdx);
  }

  // What will Array.findIndex() return if the array is empty ? //  as element will not found -1
  
  // What happens if the callback function passed to Array.findIndex() always returns false for all elements ? // -1

  // Does Array.findIndex() stop iterating once it finds a matching index ? Explain how it works internally. // Yes

  // How does Array.findIndex() perform with large arrays ? Are there any performance considerations to be aware of ? // No

  // How can you use Array.findIndex() in combination with other array methods, such as map() or filter() ? Can you give a real - world scenario where this would be useful ?
  withOtherMethod() {
    const products = [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 500 },
      { id: 3, name: "Tablet", price: 300 }
    ];
    // Find the index of the product with price greater than 700
    const index = products.findIndex(product => product.price > 700);
    if (index !== -1) {
      // Remove the product from the array
      products.splice(index, 1); // Remove the product at the found index
    }
    console.log(products);
    // Output: [{ id: 2, name: "Phone", price: 500 }, { id: 3, name: "Tablet", price: 300 }]
  }

  // What happens if the callback function passed to Array.findIndex() throws an error ? How would you handle that ?
  withError() {
    const numbers = [1, 2, 3, 4, 5];
    const index = numbers.findIndex(item => {
      if (item === 3) {
        throw new Error('Something went wrong');
      }
      return item === 3;
    });
    console.log(index); // This won't be reached because the error is thrown when item === 3
  }

  // If the array contains multiple elements that meet the condition, how does Array.findIndex() behave ? // Only First element's Index will return
  
  // Compare Array.findIndex() with indexOf().What are the key differences between these two methods ? 
  // How would you use Array.findIndex() in place of indexOf() when dealing with an array of objects ?
  indexOfFindIndex() {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];
    const index1 = users.findIndex(user => user.name === 'Bob');
    console.log(index1);

    const users1 = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];
    const user = { id: 2, name: 'Bob' };
    // This will return -1 because it compares object references, not properties
    const index = users1.indexOf(user);
    console.log(index); // Output: -1
  }

  // Can you use Array.findIndex() with a condition based on a nested property ? Provide an example.
  withNestedArray() {
    const users = [
      { id: 1, name: 'Alice', address: { city: 'Los Angeles', zip: '90001' } },
      { id: 2, name: 'Bob', address: { city: 'Chicago', zip: '60601' } },
      { id: 3, name: 'Charlie', address: { city: 'New York', zip: '10001' } },
      { id: 4, name: 'David', address: { city: 'San Francisco', zip: '94105' } }
    ];
    const index = users.findIndex((user) => user.address.city === 'New York');
    console.log(index);
  }

  // Write a function that returns the index of the first even number in an array using Array.findIndex().
  firstEven() {
    const result = [1, 2, 3, 4, 5, 6];
    console.log(result.findIndex(e => e % 2 === 0));
  }

  // Given an array of strings, write a function using Array.findIndex() to find the index of the first string that contains a specific substring.
  getRacer() {
    const strings = ['apple', 'banana', 'cherry', 'date', 'grape'];
    const str = 'ana'
    const result = strings.findIndex(el => el.includes(str))
    console.log(result);
  }

  // How would you find the index of the first number greater than a certain value in a sorted array using Array.findIndex() ?
  getRacer1() {
    const sortedArray = [1, 3, 5, 7, 10, 12, 15, 18];
    const value = 10;
    const result = sortedArray.findIndex(el => el > value);
    console.log(result);
  }

}
