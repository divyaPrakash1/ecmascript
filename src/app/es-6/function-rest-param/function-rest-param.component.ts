import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-function-rest-param',
  templateUrl: './function-rest-param.component.html',
  styleUrl: './function-rest-param.component.scss'
})
export class FunctionRestParamComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // console.log(this.calculateSum(1, 2, 3, 4, 5));
    // this.withoutArgument();
    // this.combineMultipleArray();
    // this.withBothParams('Rajan'); // Rajan, []
    // this.withBothParams('Rajan', 'Mishra'); // Rajan, [Mishra]
    // this.withBothParams(); // Dadda, []

    this.combineArrays([12, 3, 4, 5], [1, 2, 3, 4, 5]);
    this.myFunction(1, undefined, 3); //[1, undefined, 3]

  }

  // What is a rest parameter in JavaScript, and how is it different from the arguments object ?
  // How do you define a rest parameter in a function, and what are the rules for its usage ?
  // How would you use a rest parameter to handle a variable number of arguments in a function?
  // Can you provide an example where using a rest parameter improves code readability and flexibility?
  // How would you handle an array of arguments using the rest parameter?
  calculateSum(...numbers: number[]): number {
    return numbers.reduce((acc: number, cv: number) => acc + cv, 0);
  }

  // Can you use rest parameters with non - last parameters in a function? Why or why not ?
  // calculateSum1(...numbers: number[], a: number, b: number, c: number) { // No Can't
  //   console.log('aaaaaaaaaa', numbers, a, b, c);
  // }

  // What happens if you pass more arguments than the rest parameter can capture in a function?
  calculateSum2(a: number, b: number, c: number, ...numbers: number[]): number {
    return numbers.reduce((acc: number, cv: number) => acc + cv, 0);
  }

  // What is the significance of the rest parameter when destructuring an array or object ?
  // How does the rest parameter behave when used with objects or arrays as arguments ?
  destructuringArray() {
    const numbers = [1, 2, 3, 4, 5];
    const [first, second, ...rest] = numbers;
    console.log(first);  // 1
    console.log(second); // 2
    console.log(rest);   // [3, 4, 5]
  }

  destructuringObject() {
    const user = {
      name: 'Alice',
      age: 30,
      occupation: 'Engineer',
      country: 'USA'
    };

    const { name, age, ...rest } = user;
    console.log(name);  // Alice
    console.log(age); // 30
    console.log(rest);   // {occupation: 'Engineer', country: 'USA'}
  }

  // Can you mix regular parameters and rest parameters in a function? What’s the order in which they should appear ?
  mixRegularAndRestParam(name: string, age: number, ...restParam: any) {
    console.log(name, age, restParam);
  }

  // How would you combine the rest parameter with other array methods, such as map(), reduce(), or forEach() ?
  combineRestWithArrayMethod(...numbers: number[]) {
    const sum = numbers.reduce((acc, cv) => acc + cv, 0);
    const modifiedData = numbers.map((ele) => ele * 2);
    const loopEachData = numbers.forEach((ele) => console.log(ele));
  }

  // What would happen if you try to call a function with a rest parameter and no arguments at all ?
  withoutArgument(...numbers: any[]) {
    console.log(numbers) // [] // will console empty array
  }

  // How do you use the rest parameter to combine multiple arrays into a single array in a function?
  combineArrays(...arrays: any[]) {
    return [].concat(...arrays);
  }

  // Can a function have both a rest parameter and default parameters ? How do they work together ?
  withBothParams(name: string = 'Dadda', ...rest: any) {
    console.log('asdfasdfasd', name, rest);
  }

  // What are the differences between the rest parameter(...) and the spread operator(...) in JavaScript ?
  restAndSpread(...dadda: any[]) {
    console.log('finalArray with rest parameter', dadda);
    const a1 = [1, 2, 3, 4, 5];
    const a2 = [3, 4, 5, 6, 7,];
    const a3 = [6, 7, 8, 9, 10, 11, 12, 13, 14];
    const finalArray = [...a1, ...a2, ...a3];
    console.log('finalArray with spread parameter', finalArray);
  }

  // Can you provide a real - world scenario or a use case where rest parameters are particularly useful ?
  // In what situations would you prefer to use the rest parameter over the arguments object in a function?
  // ...when this is not confirm that how many parameter can be passed in function

  // What would happen if you try to call a function with a rest parameter and pass undefined explicitly as an argument ?
  myFunction(...args: any) {
    console.log(args); // [1, undefined, 3]
  }

  // Can rest parameters be used with arrow functions ? Provide an example.
  // const restParam = (...rest) => {
  //   console.log(rest);
  // }

  // How do you handle multiple rest parameters in a function? Is it possible ? // No
  // testMultipleRestParams(...test1: any, ...test2: any) {
  // }

}
