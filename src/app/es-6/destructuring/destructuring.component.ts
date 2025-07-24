import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-destructuring',
  templateUrl: './destructuring.component.html',
  styleUrl: './destructuring.component.scss'
})
export class DestructuringComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.destructing();
    // this.destructurArray();
    // this.destructuringNestedObj();
    // this.destructureFewer();
    // this.greet({ name: 'Alice', age: 30 }); // Hello, my name is Alice and I am 30 years old.
    // this.restSyntax();
    this.destructProps();
  }


  // 1. What is destructuring in JavaScript ?
  destructing() {
    const obj = { a: 1, b: 2 };
    let { a, b } = obj;
    console.log(a, b);
  }

  // 2. How do you destructure arrays in JavaScript ?
  destructurArray() {
    const arr = [1, 2, 3, 4, 5];
    let [a, b, c, d, e] = arr
    console.log(a, b, c, d, e);
  }
  
  // 3. How do you destructure objects in JavaScript ?
  destructingObject() {
    const obj = { a: 1, b: 2 };
    let { a, b } = obj;
    console.log(a, b);
  }

  // 4. Can you provide an example of destructuring a nested object ?
  destructuringNestedObj() {
    const user = {
      name: 'John Doe',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        zip: '12345'
      },
      contact: {
        email: 'john.doe@example.com',
        phone: '555-1234'
      }
    };
    const { name, age, address: { street, zip }, contact: { email } } = user;
    console.log(name, age, street, email);
  }

  // 5. What happens if you destructure an array with fewer elements than expected ?
  destructureFewer() {
    const arr = [1, 2, 3, 4, 5, 6];
    const [a, b, c, d, e, f, g, h, i, j, k] = arr;
    console.log(a, b, c, d, e, f, g, h, j, k,);
  }
  // 6. How do you provide default values when destructuring ?
  destructureFewerWithDefault() {
    const arr = [1, 2];
    const [a, b, c=3, d=4] = arr;
    console.log(a, b, c, d);
  }

  // 7. How can you rename variables while destructuring objects ?
  renamingVariable() {
    const obj = { a: 1, b: 2 };
    let { a: x, b: y } = obj
    console.log(x, y);
  }

  // 8. Can you destructure function parameters? Provide an example.
  // 20. How do you destructure an object in a function parameter with default values ?
  // 21. Can you destructure function arguments? Provide an example.
  greet({ name, age }: any) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  }

  // 9. What is the use of the rest syntax(...) in destructuring ?
  restSyntax() {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const { a, b, ...anything } = obj;
    console.log(a, b, anything);
  }

  // 10. How do you swap values between two variables using destructuring?
  swapingWithDestructing() {
    let a = 2;
    let b = 3;
    [a, b] = [b, a];
  }

  // 11. Can you destructure the return value of a function? Provide an example.
  getUser() {
    return {
      name: 'Divya Prakash',
      age: 30,
      email: 'exampl@gmail.com'
    }
  }

  destructProps() {
    const { name, age, email } = this.getUser();
    console.log('name', name, 'age', age, 'email', email);
  }

  // 12. How do you handle missing properties when destructuring objects ?
  destructMissingProperty() {
    // const obj = {
    //   name: 'Divya Prakash',
    //   age: 30,
    //   email: 'exampl@gmail.com'
    // }
    // const { name, age, email, address= 'Sitapur' } = obj;
  }

  // 13. What are the differences between array destructuring and object destructuring ?
  objectAndArray() {
    const obj = {
      name: 'Divya Prakash',
      age: 30,
      email: 'exampl@gmail.com'
    }
    const { name, age, email } = obj;

    const tempArray = [1, 2, 3];
    const [a, b, c] = tempArray;
  }
  
  // 14. How do you destructure arrays with the rest syntax ?
  // 16. How do you destructure an object while ignoring certain properties ?
  // 17. How do you combine destructuring with the spread operator ?
  restSyntaxProp() {
    const obj = {
      name1: 'Divya Prakash',
      age1: 30,
      email: 'exampl@gmail.com',
      address: 'Noida',
    }
    const { name1, age1, ...rest } = obj;

    const users = [
      { name: 'Alice', age: 30, city: 'Wonderland' },
      { name: 'Bob', age: 25, city: 'Builderland' },
    ];
    const [{ name: firstName, ...rest1 }, { name: secondName, ...rest2 }] = users;
  }

  // 15. Can you destructure strings in JavaScript ? Provide an example.
  destructString() {
    const str = 'Hi';
    const [first, second, third = 'o'] = str;
  }

  // 18. What happens if you destructure non - iterable values ?
  noniterableValue() {
    let obj = null;

    // Destructuring null (non-iterable)
    // const { name } = obj; // TypeError: Cannot destructure property 'name' of 'null' as it is null.

  }

  // 19. How can you destructure arrays with nested arrays ?
  // 24. How do you handle deeply nested destructuring assignments ?
  destrucutredNestedArray() {
    const arr: any = [1, [2, [3, 4]], 5];
    const [first, [second, [third, fourth]], fifth] = arr;
  }

  // 22. How do you destructure an array returned from a promise ?  // XXXX

  // 25. How can you destructure arrays and objects in a for...of loop ?
  forInLoop() {
    const users = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 }
    ];

    for (const { name, age } of users) {
      console.log(name, age)
    }
  }

}
