import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-object-keys',
  templateUrl: './object-keys.component.html',
  styleUrl: './object-keys.component.scss'
})
export class ObjectKeysComponent implements OnInit {

  ngOnInit(): void {
    // this.getKeys();
    // this.getKeyFromArray();
    // this.getDifference();
    // this.createObject();
    // this.performIterationOnThem();
    // this.getCountOfObjectProp();
    this.filterBasedOnProperty();
  }

  // What is the purpose of Object.keys() in JavaScript ?
  // Explain the functionality of Object.keys().
  // How do you use Object.keys() to list the properties of an object ?
  // Provide a simple example of using Object.keys().

  // ..It allows you to get an array of an object's own property names, which can then be used for various operations such as looping through properties.
  getKeys() {
    const person = {
      name: 'John',
      age: 30,
      city: 'New York'
    };
    const keys = Object.keys(person)
    console.log('person', keys);
  }

  // What type of value does Object.keys() return? // Array
  // Discuss the type of value (e.g., array) returned by Object.keys(). // Array

  // Intermediate Questions
  // Can Object.keys() be used on arrays ? What will it return?
  // Show an example of using Object.keys() on an array and discuss the output.

  getKeyFromArray() {
    const arr = ['a', 'b', 'c'];
    const keys = Object.keys(arr);
    console.log('Keys from array', keys) // ['0','1','2']
  }

  // Explain what happens when an object has non - enumerable properties and Object.keys() is called.
  // Compare Object.keys() and Object.getOwnPropertyNames() in terms of their outputs.
  // How does Object.keys() handle non - enumerable properties ?
  // What is the difference between Object.keys() and Object.getOwnPropertyNames() ?
  // ..Object.keys() only returns enumerable properties.
  // ..Use Object.keys() when you need to work with properties that are intended to be enumerated in loops.

  // ..Object.getOwnPropertyNames() returns all own properties, both enumerable and non-enumerable.
  // ..Use Object.getOwnPropertyNames() when you need a complete list of property names, including those that are non - enumerable.
  getDifference() {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    Object.defineProperty(obj, 'd', {
      value: 4,
      enumerable: false
    });
    console.log(Object.keys(obj)); // Output: ['a', 'b', 'c']
    console.log(Object.getOwnPropertyNames(obj)); // Output: ['a', 'b', 'c', 'd']
  }

  // Advanced Questions
  // Can Object.keys() be used on objects created with Object.create(null) ?
  // Discuss the behavior of Object.keys() on objects with a null prototype.

  createObject() {
    const tempObj = Object.create(null);
    const keys = Object.keys(tempObj);
    console.log('null keys', keys); // []
  }

  // How would you use Object.keys() to iterate over the properties of an object and perform operations on them ?
  // Implement a function to demonstrate this use case.
  performIterationOnThem() {
    const obj: any = {
      name: 'Alice',
      age: 25,
      gender: 'female'
    };

    Object.keys(obj).forEach((e) => console.log(e, obj[e]));
    const mapObj = Object.keys(obj).map((e) => `${e}: ${obj[e]}`);
    console.log('mapObj', mapObj);
  }

  // Explain how Object.keys() interacts with inherited properties.
  getInhertedProp() {
    const prototype = { inherited: 'I am inherited' };
    const obj = Object.create(prototype);
    obj.own = 'I am own property';
    console.log(Object.keys(obj)); // Output: ["own"]
  }

  // Practical Questions
  // Write a function that uses Object.keys() to count the number of properties in an object.
  getCountOfObjectProp() {
    const obj: any = {
      name: 'Alice',
      age: 25,
      gender: 'female'
    };
    console.log('property count is - ', Object.keys(obj).length)
  }

  // Demonstrate how to use Object.keys() in combination with other methods like Array.prototype.map().
  // How would you use Object.keys() to filter out properties from an object based on a condition ?
  filterBasedOnProperty() {
    const person: any = {
      name: 'Alice',
      age: 30,
      occupation: 'Software Developer',
      city: 'New York',
      country: 'USA'
    };
    const filteredPerson = Object.keys(person)
      .filter(key => typeof person[key] === 'string')
      .reduce((acc: any, cur) => {
        acc[cur] = person[cur]
        return acc
      }, {});
    console.log('filteredValue', filteredPerson);
  }


}
