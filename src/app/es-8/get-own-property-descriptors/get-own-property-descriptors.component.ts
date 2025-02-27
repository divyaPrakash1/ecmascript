import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-get-own-property-descriptors',
  templateUrl: './get-own-property-descriptors.component.html',
  styleUrl: './get-own-property-descriptors.component.scss'
})
export class GetOwnPropertyDescriptorsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.example1();
  }


  // What is the purpose of Object.getOwnPropertyDescriptors() in JavaScript ?
  // ...Object.getOwnPropertyDescriptors(obj);
  example1() {
    const obj = {
      name: 'John',
      age: 30,
      get fullName() {
        return `${this.name} Doe`;
      },
    };
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    console.log(descriptors);
  }

  // How does Object.getOwnPropertyDescriptors() differ from Object.getOwnPropertyDescriptor() ?
  // What does Object.getOwnPropertyDescriptors() return when called on an object with no own properties ?
  // Can you explain how to use Object.getOwnPropertyDescriptors() to clone an object, including its getters, setters, and property descriptors ?
  // If an object has a non - enumerable property, how does Object.getOwnPropertyDescriptors() handle it ?
  // What would Object.getOwnPropertyDescriptors() return for an object with getter or setter methods ? Can you provide an example ?
  // How would you use Object.getOwnPropertyDescriptors() to modify the properties of an object before setting them on another object ?
  // What are some potential use cases for Object.getOwnPropertyDescriptors() in JavaScript ?
  // How would Object.getOwnPropertyDescriptors() behave on an object that has a toString method ? Can it return the descriptor of toString ?
  // How does Object.getOwnPropertyDescriptors() handle properties that have been defined with Object.defineProperty() ?
  // What does Object.getOwnPropertyDescriptors() return for properties with the writable, configurable, and enumerable flags set to false ?
  // If a property is defined with Object.defineProperty() and has specific get and set methods, how would Object.getOwnPropertyDescriptors() represent this property ?
  // How does Object.getOwnPropertyDescriptors() compare to Object.entries() or Object.keys() when retrieving properties from an object ?
  // Can Object.getOwnPropertyDescriptors() be used with prototypes, or does it only deal with own properties of an object ?
  // Can you modify the descriptors returned by Object.getOwnPropertyDescriptors() ? If yes, how would you go about it ?


}
