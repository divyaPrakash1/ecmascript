import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-logincal-or-assignment-optr',
  templateUrl: './logincal-or-assignment-optr.component.html',
  styleUrl: './logincal-or-assignment-optr.component.scss'
})
export class LogincalOrAssignmentOptrComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.example2();
    this.example8();
  }

  // What does the ||= operator do in JavaScript ?
  // ... assign value if false, 0, "", null, undefined, or NaN are falsy
  example1() {
    let x;
    let y;
    x ||= y;
    // OR

    if (!x) {
      x = y;
    }

    let a = null;
    a ||= 10;
    console.log(a) // 10
  }

  // How does ||= differ from the traditional || operator ?
  example2() {
    // ||=
    let a = null;
    a ||= 10;
    console.log(a) // 10

    let b = null;
    b = b || 10;
    console.log(b)
  }

  // Is ||= a short - circuiting operator ? Why or why not ?
  // ...Yes
  example3() {
    let a = 10;
    a ||= 20; // expression will not called as a is already truthy value
    console.log(a); // 10
  }

  // How can ||= be used to assign default values to variables ? Provide an example.
  // What happens if ||= is used with falsy values like 0, "", or false ?
  // How does ||= behave when used with null and undefined values ?
  example4() {
    let name;
    name ||= "Guest";
    console.log(name); // Output: "Guest"
  }

  // Can ||= be used inside loops to modify variables conditionally ? Provide an example.
  example5() {
    const arr = [, 2, 3, 4, 5, 6, , 7, , 8];
    let val;
    for (let e of arr) {
      val ||= e; // val = 2; // assign first non falsy value
    }
  }

  // How does ||= interact with optional chaining(?.) in JavaScript ?
  example6() {
    let user = { profile: null };
    // If `user.profile` is null or undefined, `?.` prevents an error
    // user.profile?.name ||= "Guest";
    // console.log(user.profile?.name); // Output: undefined (since `profile` is null)

    let usera = {};

    // Ensure `settings` exists before assigning a default
    // (usera.settings ||= {}).theme ||= "Light";

    // console.log(usera.settings.theme); // Output: "Light"
  }

  // What are some potential pitfalls when using ||= in JavaScript ?
  // ...Problem: ||= treats 0, false, and "" as falsy, which may cause unintended overwrites.
  // How does ||= compare with the Nullish Coalescing Assignment(??=) operator ?
  // When should you use ||= instead of an if statement for default assignments ?
  example7() {
    let count = 0;
    count ||= 10;  // Expected: 0, but gets reassigned to 10
    console.log(count); // Output: 10 (incorrect if `0` is a valid value)
    count ??= 10; // Only assigns if count is null or undefined
    console.log(count); // Output: 0 (expected behavior)
  }

  // Can ||= be used for lazy initialization of object properties ? Provide an example.
  // What happens if ||= is used on an object property that doesn’t exist ?
  example8() {
    let user: any = {};
    user.profile ||= { name: 'Rajan', age: 31 };
    console.log(user); // { profile: { name: "Guest", age: 25 } }
  }


  // Can ||= be used to initialize function parameters? Why or why not ?
  // ...No
  // greet(name ||= "Guest") {  // ❌ Syntax Error
  //   console.log(`Hello, ${name} !`);
  // }

  // What is the difference between ||= and &&= in terms of value assignment ?
  example9() {
    let a;
    a ||= 10 // a = 10

    let b;
    b &&= 10; // b = undefined
  }
}
