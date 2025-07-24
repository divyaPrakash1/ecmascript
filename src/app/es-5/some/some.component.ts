import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-some',
  templateUrl: './some.component.html',
  styleUrl: './some.component.scss'
})
export class SomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.mainMethod();
    // this.someWithEvery();
    // this.checkAtLeastOneEvenNumber();
    // this.checkAtLeastOneElementisEmpty();
    // this.IfNotMeetCondition();
    // this.checkAge();
    // this.checkOutOfStock();
    this.combineMapWithSome();
  }

  


  // What does the Array.some() method do?
  mainMethod() { // It will check that given condition is true at least one element of an array
    const tempArray = [1, 2, 3, 4, 5, 4, 32, 2];
    const is5Available = tempArray.some(e => e === 5);
    console.log('is5Available', is5Available);
  }

  // How does the Array.some() method differ from Array.every() ?
  someWithEvery() {
    // some
    // return true if atlest one element matched the condition
    // it will return false for empty array

    // every
    // return false if atlest one element did not matched the condition
    // it will return true for empty array
  }

  // What is the return value of Array.some() when it is called on an empty array ? // False
    
  // What are the parameters of the callback function used in Array.some() ?
  callbackParameter() { // element, index, array
    const tempArray = [1, 2, 2, 2, 3, 3, 5, 2, 2, 3, 6, 2, 3, 2, 3, 23];
    const result = tempArray.some((element, index, array) => element > 6);
    console.log('result', result);
  }

  // Explain how Array.some() works when the callback function returns a boolean value. // XXXX
    
  // Given an array of numbers, how would you use Array.some() to check if there is at least one even number in the array ?
  checkAtLeastOneEvenNumber() {
    const tempArray = [1, 2, 2, 2, 3, 3, 5, 2, 2, 3, 6, 2, 3, 2, 3, 23];
    const result = tempArray.some((element) => element %2 === 0);
    console.log('result', result);
  }

  // Can you use Array.some() to validate an array of form inputs(e.g., check if at least one input is empty)? Provide an example.
  checkAtLeastOneElementisEmpty() {
    const tempArray = [1, 2, 2, 2, 3, 3, null, 2, 2, 3, 6, 2, 3, 2, 3, 23];
    const result = tempArray.some(element => element==null);
    console.log('result', result);
  }

  // What will Array.some() return when none of the elements in the array meet the condition ? // false
  IfNotMeetCondition() {
    const tempArray = [1, 2, 3, 4, 5, 5, 6];
    const result = tempArray.some(e => e === 0);
    console.log('result', result);
  }


  // What happens if the callback function in Array.some() throws an error ? // XXXX
    
  // What is the time complexity of Array.some() ? Does it always iterate through the entire array ? // min O(1), max O(n), No

  // In the case of a large array, how does Array.some() handle performance compared to other methods like Array.filter() or Array.map() ? // some method iterate till that element where condition meets, while filter and map iterate through all element of array
      
  // What is the this value inside the callback function when using Array.some() ? How can you control it ?
  callBackValue() { // element, index, array
    const result = [1, 2, 3, 4, 5].some((element, index, array) => element > 0);
  }
    
  // Write a function that uses Array.some() to check if any object in an array of users has an age greater than or equal to 18.
  checkAge() {
    const users = [
      { name: "Alice", age: 15 },
      { name: "Bob", age: 17 },
      { name: "Charlie", age: 20 },
      { name: "Diana", age: 12 }
    ];
    const result = users.some(obj => obj.age >= 18);
    console.log('result', result);
  }

  // How can you use Array.some() to check if there are any items in a shopping cart that are out of stock(quantity is zero or less) ?
  checkOutOfStock() {
    const shoppingCart = [
      { name: "Laptop", price: 1000, quantity: 1 },
      { name: "Phone", price: 500, quantity: 0 },
      { name: "Headphones", price: 100, quantity: 2 },
      { name: "Charger", price: 20, quantity: 5 }
    ];
    const result = shoppingCart.some(obj => obj.quantity === 0);
    console.log('result', result);
  }

  // How can you combine Array.some() with Array.map() to check if any item in an array of objects has a property that satisfies a condition ?
  combineMapWithSome() {
    const shoppingCart = [
      { name: "Laptop", price: 1000, quantity: 1 },
      { name: "Phone", price: 500, quantity: 0 },
      { name: "Headphones", price: 100, quantity: 2 },
      { name: "Charger", price: 20, quantity: 5 }
    ];
    const result = shoppingCart.map(e => e.quantity).some(el => el > 2);
    console.log('result', result);
  }
    
  // How does Array.some() behave when the callback function returns non - boolean values(e.g., numbers, objects, etc.) ? What does Array.some() consider "truthy" or "falsy" ? //
  // below will be treated as falsy
  //   false
  //   0
  //  -0
  //   ""(empty string)
  //  null
  //  undefined
  //  NaN

  // Compare Array.some() with Array.find().What are the use cases for each ?
  // Array.some()	
  // Checks if at least one element satisfies a condition.	
  // Returns true or false.	
  // Stops checking as soon as a truthy value is found.	
  // Always a boolean(true or false).	
  // Use when you only need to know if a condition is met.	
  // Stops iterating as soon as a condition is satisfied(short - circuiting).	

  // Array.find()
  // Finds and returns the first element that satisfies a condition.
  // Returns the matching element, or undefined if none match.
  // Stops checking as soon as a matching element is found.
  // Can return any type(the matching element).
  // Use when you need the actual element that satisfies the condition.
  // Stops iterating as soon as a matching element is found(short - circuiting).
  // ------------------------------------------------------------------------------------------

  // Can Array.some() be used with non - array objects like a string or an object ? How would you do that, and what would the behavior be ?
  operationOnStringAndObject() {
    const str = "hello";
    const hasVowel = Array.from(str).some(char => "aeiou".includes(char));
    const obj = { a: 5, b: 15, c: 8 };
    const hasLargeValue = Object.values(obj).some(value => value > 10);
    const nestedObj = {
      user1: { name: "Alice", age: 25 },
      user2: { name: "Bob", age: null },
      user3: { name: "Charlie", age: 30 }
    };
    const hasNullValue = Object.values(nestedObj).some(user => Object.values(user).some(value => value === null));
  }
    
  // If you're checking if any value in a large dataset meets a condition (e.g., detecting an invalid user in a large list), would you prefer Array.some() or another method? Justify your choice.
  checkInvalidUser() {
    const users = [
      { id: 1, valid: true },
      { id: 2, valid: true },
      { id: 3, valid: false }, // Invalid user
      { id: 4, valid: true }
    ];

    const hasInvalidUser = users.some(user => !user.valid);
    console.log(hasInvalidUser); // true (stops at the third user) while on other method like filter loop will iterate for all users
  }

}
