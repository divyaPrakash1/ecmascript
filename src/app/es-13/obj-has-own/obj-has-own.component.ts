import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-obj-has-own',
  templateUrl: './obj-has-own.component.html',
  styleUrl: './obj-has-own.component.scss'
})
export class ObjHasOwnComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }


  // What does Object.hasOwn() do in JavaScript ?
  example1() {
    const user = { name: "Alice", age: 25 };
    console.log(Object.hasOwn(user, "name"));  // true
    console.log(Object.hasOwn(user, "gender")); // false
  }

  // How does Object.hasOwn() differ from hasOwnProperty() ?
  // ... Unlike hasOwnProperty(), Object.hasOwn() is safer because it works even if the object has been modified
  // Can Object.hasOwn() be used on objects with null or undefined prototypes ? Why or why not ?
  example2() {
    const obj = Object.create(null); // No prototype
    obj.key = "value";
    console.log(Object.hasOwn(obj, "key"));  // ✅ true
    console.log(obj.hasOwnProperty?.("key")); // ❌ TypeError if ?. is not used
  }

  
  // How does Object.hasOwn() handle inherited properties ?
  
  // Is Object.hasOwn() affected by properties added via Object.prototype ? Why ?
  
  // How can Object.hasOwn() be used to filter only direct properties from an object ?
  
  // Can Object.hasOwn() be used on arrays ? If so, how ?
  
  // What happens if you pass a non - object argument to Object.hasOwn() ?
  
  // How does Object.hasOwn() compare to Reflect.has() in JavaScript ?
  
  // Why was Object.hasOwn() introduced in ES2022 ?

}
