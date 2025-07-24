import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-object-define-property',
  templateUrl: './object-define-property.component.html',
  styleUrl: './object-define-property.component.scss'
})
export class ObjectDefinePropertyComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // Create an empty object
    const person: any = {};

    // 1. Simple definition of a property with value
    Object.defineProperty(person, 'name', {
      value: 'Alice',
      writable: true,  // Allows the value to be changed
      enumerable: true, // Will show up in `for...in` loop or `Object.keys()`
      configurable: true // Can delete or modify the property
    });

    console.log(person.name); // Output: Alice

    // 2. Change the value of an existing property
    person.name = 'Bob';
    console.log(person.name); // Output: Bob

    // 3. Define a read-only property (writable: false)
    Object.defineProperty(person, 'age', {
      value: 30,
      writable: false, // Prevents modification
      enumerable: true,
      configurable: true
    });

    console.log(person.age); // Output: 30
    person.age = 35; // Won't work since `writable: false`
    console.log(person.age); // Output: 30

    // 4. Define a non-enumerable property (enumerable: false)
    Object.defineProperty(person, 'address', {
      value: '123 Main St',
      writable: true,
      enumerable: false, // This property will not show up in `for...in` loop or `Object.keys()`
      configurable: true
    });

    console.log(person.address); // Output: 123 Main St
    console.log(Object.keys(person)); // Output: [ 'name', 'age' ] (address is not listed)

    // 5. Define a non-configurable property (configurable: false)
    Object.defineProperty(person, 'gender', {
      value: 'Female',
      writable: true,
      enumerable: true,
      configurable: false // Can't delete or modify this property later
    });

    console.log(person.gender); // Output: Female

    // 6. Try to delete a non-configurable property (will fail)
    delete person.gender; // Fails silently in non-strict mode, throws error in strict mode
    console.log(person.gender); // Output: Female (property still exists)

    // 7. Use `Object.defineProperty()` to make a getter/setter
    let salary = 5000;
    Object.defineProperty(person, 'salary', {
      get() {
        return salary;
      },
      set(value) {
        salary = value;
      },
      enumerable: true,
      configurable: true
    });

    console.log(person.salary); // Output: 5000
    person.salary = 6000; // Sets the new salary
    console.log(person.salary); // Output: 6000

  }
}
