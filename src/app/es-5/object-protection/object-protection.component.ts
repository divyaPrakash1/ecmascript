import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-object-protection',
  templateUrl: './object-protection.component.html',
  styleUrl: './object-protection.component.scss'
})
export class ObjectProtectionComponent implements OnInit{

  ngOnInit(): void {
    this.protectAllProp();
  }



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
