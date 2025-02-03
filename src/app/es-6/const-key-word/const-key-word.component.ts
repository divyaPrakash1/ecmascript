import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-const-key-word',
  templateUrl: './const-key-word.component.html',
  styleUrl: './const-key-word.component.scss'
})
export class ConstKeyWordComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }




  // What is the difference between const, let, and var in JavaScript ?
  differenceConstVarAndLet() {
    // const (Block-scoped and Immutable Reference)

    const x = 10;
    console.log(x); // 10
    // x = 20; // TypeError: Assignment to constant variable.

    const obj = { name: "John" };
    obj.name = "Jane"; // Allowed, modifying object properties is fine
    console.log(obj.name); // Jane


    // let (Block-scoped and Reassignable)

    // let x = 10;
    // console.log(x); // 10
    // x = 20; // Reassigning the value is allowed
    // console.log(x); // 20

    // let x = 30; // SyntaxError: Identifier 'x' has already been declared

    // var (Function-scoped and Hoisted)
    var y = 10;
    console.log(y); // 10
    var y = 20; // No error
    console.log(x); // 20

  }
  // Can you reassign a variable declared with const? // No
  // Can you change the properties of an object declared with const? // Yes
  // What happens if you try to re - declare a const variable in the same scope ? // It will give an error

  // How does hoisting behave with const?
  constHoisting() {
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    // const x = 5;
    // console.log(x); // 5
  }

  // Can you declare a constant in the global scope using const?What happens if you try to modify it later ?
  constGlobal() {
    // Yes can declare const in global scope but can't modify it later except Object or Array
  }

  // Is it possible to declare a constant with const inside a block (like a for loop)?
  constInsideForLoop() {
    for (let i = 0; i < 3; i++) {
      const x = i * 2;  // Declaring a constant in the loop block
      console.log(x);   // x is valid only within this iteration of the loop
    }
    // Trying to access x outside the loop will result in an error
    // console.log(x);  // ReferenceError: x is not defined
  }

  // Can you use const to declare a function in JavaScript ? If so, what is the behavior ?
  // Yes // You can still call the function as normal, and it behaves the same way as any other function declaration or expression.

  // What is the difference between a const reference and an immutable value in JavaScript ?
  isDoable() {
    // const person = { name: "Alice", age: 30 };
    // person.age = 31; // This is allowed. The object is mutable, so we can change its properties.
    // console.log(person); // Output: { name: "Alice", age: 31 }

    // const str = "hello";
    // str[0] = "H"; // Does nothing, because strings are immutable.
    // console.log(str); // Output: "hello"
  }
  
  // Can you use const in destructuring assignments ? What would happen if the value being destructured is null or undefined ?
  testMethod() {
    // const { name, age } = { name: 'Alice', age: 30 };
    // name = 'Bob'; // Error: Assignment to constant variable.
    // console.log(name); // Output: Alice

    // const person = null;
    // const { name, age } = person; // Error: Cannot destructure property 'name' of 'person' as it is null.

    // const person = undefined;
    // const { name, age } = person; // Error: Cannot destructure property 'name' of 'person' as it is undefined.

    // Assigning Default Values
    // const { name, age } = { name: 'Alice', age: 30 };
    // name = 'Bob'; // Error: Assignment to constant variable.
    // console.log(name); // Output: Alice

  }
  // TypeScript(const) Interview Questions:

  // Does TypeScript allow you to assign a new value to a variable declared with const?Why or why not? // No
  // Can you use const for declaring types in TypeScript ? If so, how ? // Yes

  // How does const behave in TypeScript with respect to type inference for objects and arrays ?
  constWithArrayAndObject() {
    const tempArray1 = [1, 2, 3, 4];
    tempArray1.push(5);
    console.log('tempArray1', tempArray1);
    // tempArray1 = [5, 6]; // Error: Cannot assign to 'arr' because it is a constant

    const tempObject1 = { a: 1, b: 2 };
    tempObject1.a = 3;
    tempObject1.b = 4;

    // tempObject1 = { a: 3, b: 4 }; // Error: Cannot assign to 'obj' because it is a constant

    const arr: readonly number[] = [1, 2, 3];
    // arr.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'

  }
  
  // What is the impact of const on the immutability of an object in TypeScript ?
  immutabilityConcept() {
    const tempObject = { a: 1, b: 2 };
    tempObject.a = 3;
    tempObject.b = 4;

    const tempObject1: Readonly<{ a: number, b: number }> = { a: 2, b: 4 };
    // tempObject1.a = 3; // Cannot assign to 'a' because it is a read-only property.ts(2540)

  }

  // How does const in TypeScript compare to using readonly with class properties?
  // Can const be used to declare a variable with a readonly modifier in TypeScript ?
  tempss() {
    const arr: readonly number[] = [1, 2, 3];
    // arr.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'
  }

  // How does TypeScript handle const in function parameters and argument types ? // can't use const in function parameter

  // In TypeScript, how do you ensure an object declared with const is not accidentally modified?
  immutabilityConceptForObject() {
    const tempObject1: Readonly<{ a: number, b: number }> = { a: 2, b: 4 };
    // tempObject1.a = 3; // Cannot assign to 'a' because it is a read-only property.ts(2540)
  }

  // Can you use const in TypeScript with arrays ? What are the limitations or restrictions ?
  constWithArray() {
    const tempArray1 = [1, 2, 3, 4];
    tempArray1.push(5);
    console.log('tempArray1', tempArray1);
    // tempArray1 = [5, 6]; // Error: Cannot assign to 'arr' because it is a constant
  }

  // How can Object and Array can be modify while it is declare as const
  withArrayAndObject() {
    const tempArray1 = [1, 2, 3, 4];
    tempArray1.push(5);
    console.log('tempArray1', tempArray1);
    // tempArray1 = [5, 6]; // Error: Cannot assign to 'arr' because it is a constant

    const tempObject1 = { a: 1, b: 2 };
    tempObject1.a = 3;
    tempObject1.b = 4;

    // tempObject1 = { a: 3, b: 4 }; // Error: Cannot assign to 'obj' because it is a constant

    const arr: readonly number[] = [1, 2, 3];
    // arr.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'

  }

}
