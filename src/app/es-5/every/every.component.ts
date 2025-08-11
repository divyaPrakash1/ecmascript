import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'ecmspt-every',
  templateUrl: './every.component.html',
  styleUrl: './every.component.scss'
})
export class EveryComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // console.log('every component called');
    // this.mainMethod();
    // this.withEmptyArray();
    // this.combinationwithEvery();
    // this.validateProperty();
    // this.checkAllIsNonEmpty();
    this.checkCartIsNonEmpty();
  }

  // How would you use Array.every() to check if all elements in an array are even numbers ? // $$$
  mainMethod() { // $$$
    // besic checks
    const numbers = [2, 4, 6, 8];
    const isAllEven = numbers.every(n => n % 2 === 0);
    console.log('isAllEven', isAllEven); // true

    // Advanced check
    const users: User[] = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 35 },
    ];
    const isAllHasNameProperty = users.every((user: User) => Object.prototype.hasOwnProperty.call(user, "name"));
    console.log('isAllHasNameProperty', isAllHasNameProperty); // true
  }

  // What is the return value of Array.every() when called on an empty array ? // !!! // return true
  withEmptyArray() { // !!!
    // The behavior of Array.every() on an empty array is based on the concept of "vacuous truth" in mathematics. 
    // It states that a condition that is tested over no elements is always considered true because there are no counterexamples to disprove the condition.
    const result = [].every(e => e % 2 === 1);
    console.log('result', result); // true
  }

  // What are the parameters of the callback function used in Array.every() ? // @@@
  callbackParameter() { // @@@
    // array.every((element, index, array) => {
    //   // Your logic here
    // });
  }

  // How does Array.every() differ from Array.some() ?    // ###
  everyVsSome() { // ###
    // Every
    // Tests whether all elements satisfy the condition.	
    // Returns true if all elements pass the test; otherwise, false.	
    // Stops as soon as an element fails the condition(false).	
    // Always returns true(vacuous truth).	

    // Some
    // Tests whether at least one element satisfies the condition.
    // Returns true if any element passes the test; otherwise, false.
    // Stops as soon as an element satisfies the condition(true).
    // Always returns false.
  }

  // How can you use Array.every() in combination with other array methods, like filter() or map() ? // %%%
  combinationwithEvery() { // %%%
    const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = tempArray.filter(e => e % 2 === 0).map(el => el + 5).every(ele => ele > 3);
    console.log('aaaaa', result);
  }

  // Can Array.every() be used to validate objects in an array ? // ^^^
  validateProperty() { // ^^^
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 35 },
    ];
    const isAllObjectEqual = users.every(user => Object.prototype.hasOwnProperty.call(user, 'name') && Object.prototype.hasOwnProperty.call(user, 'age'));
    console.log('isAllObjectEqual', isAllObjectEqual);
  }

  // How would you use Array.every() to validate form inputs(e.g., check if all inputs in a form are non - empty)? //  ***
  checkAllIsNonEmpty() { // ***
    const users = [
      { name: "Alice", age: 25 },
      { name: "", age: 30 },
      { name: "Charlie", age: 35 },
    ];
    const isAllObjectsAreNonEnmpty = users.every(user => user.name && user.age);
    console.log('isAllObjectsAreNonEnmpty', isAllObjectsAreNonEnmpty);
  }


  // Write a function using Array.every() to determine if all items in a shopping cart have a quantity greater than zero. //&&&
  checkCartIsNonEmpty() { // &&&
    const shoppingCart = [
      { name: "Apple", quantity: 5 },
      { name: "Banana", quantity: 3 },
      { name: "Orange", quantity: 0 },
    ];
    const isAllObjectsAreNonEnmpty = shoppingCart.every(user => user.quantity > 0);
    console.log('isAllObjectsAreNonEnmpty', isAllObjectsAreNonEnmpty);
  }

  // What does Array.every() do? // it checks provided condition for every element in array if all element meets condition true then it will finally return true else return false

  // Does Array.every() stop iterating once it finds a value that does not satisfy the condition ? // Yes

  // What are the performance implications of using Array.every() on very large arrays ? // O(n)

}
