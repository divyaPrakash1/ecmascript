import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-object-rest-props',
  templateUrl: './object-rest-props.component.html',
  styleUrl: './object-rest-props.component.scss'
})
export class ObjectRestPropsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example1();
    // this.example2();
    // this.example4();
    const person = { name: 'Dadda', age: 30, city: 'Lucknow', state: 'UP' };
    this.example5(person);
  }

  // What is the purpose of the rest syntax(...) in JavaScript objects ?
  // ... The rest syntax in JavaScript (...) is used to collect the remaining properties of an object into a new object. It allows you to extract specific properties from an object while gathering the remaining ones.

  // What is the difference between object rest properties and object spread properties ?
  // ...Rest Properties(...): Used to collect the remaining properties from an object and create a new object.
  // ...Spread Properties(...): Used to copy properties from one object to another.It is used for cloning or merging objects.
  
  // How do you use the object rest properties syntax in JavaScript ?
  example1() {
    const person = { name: 'John', age: 30, city: 'New York' };
    const { name, ...rest } = person;
    console.log('name', name); // John
    console.log('rest', rest); // {age: 30, city: 'New York'}
  }

  // Can you use the object rest syntax on an array in JavaScript ?
  example2() {
    const arr = [1, 2, 3, 4];
    const [first, second, ...rest] = arr;
    console.log(first); // 1
    console.log(second); // 2
    console.log(rest); // [3, 4]
  }

  // What happens if you use the rest property and have a property that has already been destructured ?
  // ...You cannot use the rest property for a property that has already been destructured.The rest operator must be placed after any destructured properties, and it will collect all remaining properties.
  example3() {
    const person = { name: 'John', age: 30, city: 'New York' };
    const { name, ...rest } = person;
    // const { name, age, ...rest } = person;
  }
  
  // How do you combine object rest and spread properties in JavaScript ?
  // How would you handle immutability using object rest and spread properties in JavaScript ?
  example4() {
    const person = { name: 'John', age: 30, city: 'New York' };
    const { name, ...rest } = person; // rest
    const newPerson = { ...rest, country: 'USA' } // spread
    console.log('newPerson', newPerson); // { age: 30, city: 'New York', country: 'USA' }
  }

  // What is the significance of using object rest properties in a function parameter?
  example5({ name, ...rest }: any) {
    console.log(name);
    console.log(rest); // {age: 30, city: 'Lucknow', state: 'UP'}
  }
  
  // What will happen if you use the object rest operator in a non - destructured assignment ?
  example6() {
    const obj = { a: 1, b: 2 };
    // const obj1 = ...obj // syntax error
    const obj1 = { a: 1, b: 2, c: 3 };
    const { a, ...rest } = obj1;
    console.log(rest); // {b: 2, c: 3}

  }

  // How does the object rest syntax handle nested objects ?
  // Can you destructure nested objects using the object rest syntax?
  example7() {
    const obj = {
      a: 1,
      b: 2,
      nested: {
        x: 10,
        y: 20
      }
    };
    const { a, ...rest } = obj;
    console.log(a);    // 1
    console.log(rest); // { b: 2, nested: { x: 10, y: 20 } };
  }
  
  // Can you use both rest and spread operators on the same object ?
  // How does the rest operator differ from the spread operator when applied to objects ?
  // Can you use object rest properties to "exclude" specific properties from an object ?
  example8() {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };

    // Using spread to merge objects
    const mergedObj = { ...obj1, ...obj2 };
    console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

    // Using rest syntax while destructuring
    const { a, ...rest } = mergedObj;
    console.log(a);    // 1
    console.log(rest); // { b: 2, c: 3, d: 4 }

  }


}
