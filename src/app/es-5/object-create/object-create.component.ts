import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-object-create',
  templateUrl: './object-create.component.html',
  styleUrl: './object-create.component.scss'
})
export class ObjectCreateComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.createObject();
  }

  // Basic Understanding
  // What is the purpose of Object.create() in JavaScript ?
  createObject() {
    const obj = Object.create({}, {
      property1: {
        value: 42,
        writable: true,
        enumerable: true,
        configurable: true
      }
    });
    console.log('createObject', obj); // Output: 42
  }
  // How does Object.create() differ from new Object() ?
  
  // How would you use Object.create() to set a prototype for a new object ?
  // Can you use Object.create() to create an object without any prototype ? What would the result be ?
  // How does the prototype chain work with objects created using Object.create() ?
  // What happens if you pass null as the prototype in Object.create() ?
  // What are the advantages of using Object.create() over using a constructor function?
  // Advanced Usage
  // How would you use Object.create() to simulate classical inheritance in JavaScript ?
  // How can Object.create() be used for object composition in JavaScript ?
  // Can you add properties to the object created with Object.create() ? How ?
  // How can you add methods to the object created with Object.create() ?
  // Can Object.create() be used to override the constructor property of an object ? How ?
  // How would you implement object inheritance using Object.create() without using ES6 classes?
  // How would you implement object composition using Object.create() ?
  // What would happen if you add a property to an object created by Object.create() after it has already been created ?
  // Edge Cases and Behavior
  // How does Object.create() handle enumerable properties ?
  // What happens if you call Object.create() with an empty object as the prototype ?
  // How would you use Object.create() to create a shallow copy of an object ?
  // How can you ensure that an object created with Object.create() does not inherit from Object.prototype ?
  // Can Object.create() be used to create an object with a specific internal prototype ? How ?
  // Performance and Optimization
  // Are there performance concerns when using Object.create() compared to other object creation methods ?
  // When would you prefer using Object.create() over using a class or constructor function in JavaScript ?
  // Conceptual Understanding
  // Can you explain the significance of the prototype property when using Object.create() ?
  // What is the role of Object.create() in prototypal inheritance ?
  // How can Object.create() be used to extend or modify the behavior of an existing object ?
  // How does Object.create() differ from Object.assign() in terms of functionality and usage ?
  // Practical Application
  // How would you use Object.create() to simulate a singleton pattern in JavaScript ?
  // How can you use Object.create() to create an object that has only non - enumerable properties ?
  // Can you explain how Object.create() interacts with methods like Object.getPrototypeOf() ?
  // Can Object.create() be used to clone an object ? If so, how ?
  // Potential Pitfalls
  // What are the limitations of using Object.create() in certain scenarios ?
  // Can Object.create() be used to create an object with getters and setters ? How ?
  // What happens when Object.create() is used to create an object with a prototype that has a constructor property ?
  // How does Object.create() behave with objects that have circular references in the prototype chain ?
  // Testing and Debugging
  // How would you test whether an object was created using Object.create() or a constructor function?
  // How would you debug issues where the prototype is not set correctly using Object.create() ?

}
