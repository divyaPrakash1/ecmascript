import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-let',
  templateUrl: './let.component.html',
  styleUrl: './let.component.scss'
})
export class LetComponent implements OnInit {
  ngOnInit(): void {
    this.withoutInitializing();
    this.example(5, 6);
  }

  // What is the difference between let and var in JavaScript ?
  differenceLetAndVar() {
    // let
    // Block - scoped	
    // Hoisted but not initialized(TDZ)	
    // Cannot redeclare in the same scope	
    // Does not attach to the global object	

    // var
    // Function - scoped or global
    // Hoisted and initialized to undefined
    // Can redeclare in the same scope
    // Becomes a property of the global object

    // Scoping
    if (true) {
      let a = 10;
      console.log(a); // a
    }
    // console.log(a) // ReferenceError: a is not defined (because `a` is block-scoped)

    if (true) {
      var b = 12;
      console.log(b);
    }
    console.log(b) // 12 (because `b` is function-scoped)

    // Hoisting
    // ..Using let (TDZ)
    // console.log(c); // ReferenceError: Cannot access 'a' before initialization
    let c = 5;

    // Using var (hoisted and initialized to undefined)
    console.log(b); // undefined
    var b = 10;


    // Using let
    let x = 1;
    // let x = 2; // SyntaxError: Identifier 'x' has already been declared

    // Using var
    var y = 1;
    var y = 2; // No error, y is re-declared and overwritten
    console.log(y); // 2

    // Using var
    // var z = 100;
    // console.log(window.z); // 100 (because var is attached to the global object)

    // // Using let
    // let w = 200;
    // console.log(window.w); // undefined (because let is not attached to the global object)

  }

  // How does the scoping behavior of let differ from var?
  scopingBehaviour() {
    // Scoping
    if (true) {
      let a = 10;
      console.log(a); // a
    }
    // console.log(a) // ReferenceError: a is not defined (because `a` is block-scoped)

    if (true) {
      var b = 12;
      console.log(b);
    }
    console.log(b) // 12 (because `b` is function-scoped)
  }

  // Can you redeclare a variable with let in the same scope ? Why or why not ?
  // ..does not allow redeclaration of the same variable in the same block or scope because it avoids accidental overwrites,
  redeclareVariableWithLet() {
    let a = 10;
    //  let a = 23; // Cannot redeclare block-scoped variable 'a'.ts(2451)
  }

  // What is the "temporal dead zone"(TDZ) in JavaScript, and how does it relate to let ?
  letWithTDZ() {
    // Hoisting
    // ..Using let (TDZ)
    // console.log(c); // ReferenceError: Cannot access 'a' before initialization
    let c = 5;
  }

  // Is it possible to declare a variable using let without initializing it?If so, what will its value be? // Yes, Undefined
  withoutInitializing() {
    let a;
    console.log('a', a); // undefined
  }

  // What will happen if you declare a variable with let inside a loop and access it outside the loop ?
  declareVariableInsideLoopAndAccessOutside() {
    for (let index = 0; index < 10; index++) {
      console.log(index)
    }
    // console.log(index); // element will not be available as is it block scoped


    for (var index = 0; index < 10; index++) {
      console.log(index)
    }
    console.log(index); // element will be available as is it function or global scoped
  }

  // Can you explain the behavior of let in a block - level scope(e.g., inside a loop or an if statement)?
  levelScope() {
    const tempArray = [1, 2, 3, 4, 5, 6, 7, 8];
    tempArray.forEach((e, i, selfArray) => {
      if (e === 1) {
        var a = 12;
        e = a;
      }
      // console.log(a) 
    });
    // console.log('aaaaa', a); // not accessible outside the scope
  }

  // How does let handle variable hoisting compared to var?
  // What will happen if you try to access a let - declared variable before its declaration(within the same block scope) ?

  variableHoisting() {
    // console.log(x); // undefined, due to hoisting
    // var x = 5;
    // console.log(x); // 5

    // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    // let x = 5;
    // console.log(x); // 5
  }

  // Can you use let in the global scope ? What is the difference between using let and var in the global scope ?
  globalScope() {
    // let x = 10;
    // console.log(window.x); // undefined, because 'x' is not a property of the global object

    // var y = 20;
    // console.log(window.y); // 20, because 'y' is a property of the global object

  }

  // Can let be used in function parameters? What behavior might you expect if you try to redeclare a parameter using let within the same function?
  example(a: any, b: any) {
    // let a: any = 10;  // SyntaxError: Identifier 'a' has already been declared
    // console.log(a, b);
  }

  // What happens if you try to use let in an object destructuring assignment with invalid syntax ?
  destructuringObject() {
    let person = { name: "John", age: 30 };
    let { name, age } = person;  // Correct syntax
    console.log(name, age); // "John" 30
  }


}