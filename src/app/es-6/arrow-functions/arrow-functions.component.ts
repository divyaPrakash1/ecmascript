import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-arrow-functions',
  templateUrl: './arrow-functions.component.html',
  styleUrl: './arrow-functions.component.scss'
})
export class ArrowFunctionsComponent implements OnInit {
  constructor() { }
  tempArray: number[] = [1, 2, 3, 4, 5, 6];
  emptyArray: number[] = [1, 2];
  ngOnInit(): void {
    // this.thisKeywordInArrow();
    // this.useArrowFnWithMapFilterReduce();
    this.multilineArraoFunction();
  }

  // What is the syntax of an arrow function, and how does it differ from a traditional function declaration?
  mainArrowFunction() {
    const arrowFunctions = (a: number, b: number) => a + b;
  }

  // How does the return statement work in an arrow function with a single expression ?
  // How does the this keyword behave in an arrow function compared to a regular function?
  // What is the significance of the implicit return in an arrow function? Can you provide an example ?
  thisKeywordInArrow() {
    const filterredValue = this.tempArray.filter(e => !this.emptyArray.includes(e));
    console.log('filterredValue', filterredValue);
  }

  // Why might you choose to use an arrow function over a traditional function?
  // What happens if you use an arrow function as a method in an object ? Can you give an example ?
  // Can you explain the difference between an arrow function and a function expression in terms of this binding ?
  // Can you explain the behavior of arrow functions when they are used inside a class or an object method ?
  thisWithArrowAndNormal() {
    // const obj = {
    //   value: 42,
    //   arrowFunction: () => {
    //     console.log(this.value); // `this` refers to the surrounding context, not `obj`
    //   }
    // };
    // obj.arrowFunction(); // undefined (because `this` is not bound to `obj`)

    // const obj1 = {
    //   value: 42,
    //   regularFunction: function () {
    //     console.log(this.value); // `this` refers to `obj`
    //   }
    // };
    // obj1.regularFunction(); // 42 (because `this` is bound to `obj`)
  }

  // Can you use the arguments object in an arrow function? Why or why not ?
  argumentsObject() {
    // const arrowFunction = (...args) => {
    //   console.log(args); // Logs all arguments as an array
    // };

    // arrowFunction(1, 2, 3); // Logs: [1, 2, 3]
  }

  // How do arrow functions handle the new keyword ? Can an arrow function be used as a constructor function? // XXXX
  // How do arrow functions behave with respect to the super keyword in classes ? // XXXX

  // In what scenarios might arrow functions be problematic or lead to unexpected behavior ? 
  problematicArrowFunction() {
    // 1. Arrow Functions as Methods in Objects
    // const obj = {
    //   name: "Alice",
    //   greet: () => {
    //     console.log(this.name); // `this` does not refer to `obj`
    //   }
    // };
    // obj.greet(); // undefined (instead of 'Alice')

    // 2. Use of arguments Object
    // const sum = () => {
    //   console.log(arguments); // ReferenceError: arguments is not defined
    // };
    // sum(1, 2, 3); // Error

    // 3. Use of new Keyword
    // const Person = (name) => {
    //   this.name = name;
    // };
    // const john = new Person('John'); // TypeError: Person is not a constructor

    // 4. Event Handlers(Especially in DOM)
    // const button = document.querySelector('button');
    // button.addEventListener('click', () => {
    //   console.log(this); // `this` does not refer to the button
    // });

    // 5. Confusion with this in Classes
    // class MyClass {
    //   constructor() {
    //     this.value = 42;
    //   }
    //   getValue = () => {
    //     return this.value;
    //   }
    // }
    // const obj = new MyClass();
    // console.log(obj.getValue()); // Works fine, but it's not typical
  }

  // Can you use an arrow function as a callback in array methods like map, filter, or reduce ? Why is this useful ?
  useArrowFnWithMapFilterReduce() {
    const tempArray = [1, 2, 3, 4, 5, 5, 6];
    const mappedData = tempArray.map(e => e * 3);
    const filterredData = tempArray.filter(e => e > 3);
    const reducedData = tempArray.reduce((a, c) => {
      a = a + c
      return a;
    }, 0);
    console.log('mappedData', mappedData, 'filterredData', filterredData, 'reducedData', reducedData);
  }

  // How does an arrow function impact the performance of your code compared to a regular function?
  // .. Arrow fn don't have callback so it is faster compare to regular fn because
  // What is the difference between an arrow function and a traditional function when it comes to hoisting ? // XXXX
  // Can an arrow function have a constructor, and if not, why ? // XXXX
  // How do you handle multi - line arrow functions with explicit return values ? Can you give an example ?

  multilineArraoFunction() {
    const tempArray = [1, 2, 3, 4, 5, 5, 6];
    const modifiedArrayWithObject = tempArray.map((e, i) => {
      return {
        [i]:e
      }
    });
    console.log('modifiedArrayWithObject', modifiedArrayWithObject);
  }

  
}