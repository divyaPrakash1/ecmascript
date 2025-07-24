import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-object-management',
  templateUrl: './object-management.component.html',
  styleUrl: './object-management.component.scss'
})
export class ObjectManagementComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.allManagingExample();
  }

  // Managing Objects
  //   // Adding or changing an object property
  // Object.defineProperty(object, property, descriptor)

  // // Adding or changing object properties
  // Object.defineProperties(object, descriptors)

  // // Accessing a Property
  // Object.getOwnPropertyDescriptor(object, property)

  // // Accessing Properties
  // Object.getOwnPropertyDescriptors(object)

  // // Returns all properties as an array
  // Object.getOwnPropertyNames(object)

  // // Accessing the prototype
  // Object.getPrototypeOf(object)
    

  allManagingExample() {
    // Adding or changing an object property
    const myObject = {};
    Object.defineProperty(myObject, 'name', {
      value: 'Alice',
      writable: true,
      enumerable: true,
      configurable: true
    });
    console.log('adding name', myObject);

    // Adding or changing multiple object properties
    Object.defineProperties(myObject, {
      age: {
        value: 30,
        writable: true,
        enumerable: true,
        configurable: true
      },
      job: {
        value: 'Developer',
        writable: true,
        enumerable: true,
        configurable: true
      }
    });
    console.log('adding two prop', myObject);

    // Accessing one Property
    const nameDescriptor = Object.getOwnPropertyDescriptor(myObject, 'name');
    console.log('getOwnPropertyDescriptor', nameDescriptor);

    // Accessing all Properties
    const nameDescriptors = Object.getOwnPropertyDescriptors(myObject);
    console.log('getOwnPropertyDescriptors', nameDescriptors);
    
    // Returns all properties as an array
    const propertyName = Object.getOwnPropertyNames(myObject);
    console.log('propertyName', propertyName);

    // Accessing the prototype
    const prototype = Object.getPrototypeOf(myObject);
    console.log('prototype', prototype); // Output: {} (since it's the default

  }
    

  //   Protecting Objects
  // // Prevents adding properties to an object
  // Object.preventExtensions(object)

  // // Returns true if properties can be added to an object
  // Object.isExtensible(object)

  // // Prevents changes of object properties (not values)
  // Object.seal(object)

  // // Returns true if object is sealed
  // Object.isSealed(object)

  // // Prevents any changes to an object
  // Object.freeze(object)

  // // Returns true if object is frozen
  // Object.isFrozen(object)

  protectAllProp() {
    // Prevents adding properties to an object
    const myObject: any = { name: 'Alice' };
    Object.preventExtensions(myObject);

    myObject.age = 30; // This will not add a new property
    console.log(myObject); // Output: { name: 'Alice' }
    console.log(Object.isExtensible(myObject)); // Output: false

    // 2. Object.isExtensible() - Returns true if properties can be added to an object
    console.log(Object.isExtensible(myObject)); // Output: false

    // 3. Object.seal() - Prevents changes to existing properties (but not their values) 
    Object.seal(myObject);
    myObject.name = 'Bob'; // Can change the value
    myObject.job = 'Developer'; // Cannot add new properties
    console.log(myObject); // Output: { name: 'Bob' }
    console.log(Object.isSealed(myObject)); // Output: true

    // 4. Object.isSealed() - Returns true if the object is sealed
    console.log(Object.isSealed(myObject)); // Output: true

    // 5. Object.freeze() - Prevents any changes to an object (properties and values)
    Object.freeze(myObject);
    myObject.name = 'Charlie'; // This won't change the property value
    myObject.age = 25; // Cannot add new properties
    console.log(myObject); // Output: { name: 'Bob' }
    console.log(Object.isFrozen(myObject)); // Output: true

    // 6. Object.isFrozen() - Returns true if the object is frozen
    console.log(Object.isFrozen(myObject)); // Output: true

  }

}
