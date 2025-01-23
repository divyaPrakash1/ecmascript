import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-reduce-right',
  templateUrl: './reduce-right.component.html',
  styleUrl: './reduce-right.component.scss'
})
export class ReduceRightComponent implements OnInit {

ngOnInit(): void {
  // this.mainMethod();
  // this.withInitialValue();
  // this.reverseString();
  // this.reverseArray();
  // this.productArray();

  // const nested = [1, [2, 3], [4, [5, 6]], 7];
  // console.log(this.flatNestedArray(nested));

  // this.getSentenceFromStringArray();
  // this.calculateMathmaticalExpression();
  // this.stackLastInFirstOut();
  // this.removeStringyfyAndObject();
  this.useReduceRight();
}

  mainMethod() {
    const arr = ['a', 'b', 'c'];
    const reduceResult = arr.reduce((acc, curvalue) => {
      acc += curvalue;
      return acc
    }, '');
    const reduceRightResult = arr.reduceRight((acc, curvalue) => {
      acc += curvalue;
      return acc
    }, '');
    console.log('result', `Reduce result is ${reduceResult} and reduceRight result is ${reduceRightResult}`);
  }

  withInitialValue() { // @@@
    const arr = [1, 2, 3, 4];
    const reduceResult = arr.reduceRight((acc, curvalue) => {
      acc += curvalue;
      return acc
    }, 10);
    console.log('result', `Reduce result is ${reduceResult}`); // 0
  }

  reverseString() { // ###
    const words = ['world', 'hello'];
    const reduceResult = words.reduceRight((acc, curvalue) => {
      acc+= curvalue;
      return acc
    }, '');
    console.log('result', `Reduce result is ${reduceResult}`); // helloworld
  }

  reverseArray() { // $$$
    const originalArray = [1, 2, 3, 4, 5];
    const reduceResult = originalArray.reduceRight((acc: Array<number>, curvalue) => {
      acc.push(curvalue);
      return acc;
    }, []);
    console.log('result', `Reduce result is ${reduceResult}`); // 
  }

  productArray() { // %%%
    const originalArray = [1, 2, 3, 4, 5];
    const reduceResult = originalArray.reduceRight((acc:number, curvalue) => {
      acc = acc * curvalue;
      return acc;
    }, 1);
    console.log('result', `Reduce result is ${reduceResult}`); // 
  }

  flatNestedArray(arr: any) { // ^^^
    // const nested = [[1, 2], [3, 4], [5]];
    return arr.reduceRight((acc: any, curvalue: any) => {
      if (Array.isArray(curvalue)) {
        return acc.concat(this.flatNestedArray(curvalue));
      }
       return acc.concat(curvalue);
    }, []);
    // console.log('result', `Reduce result is ${reduceResult}`); // 
  }

  getSentenceFromStringArray() { // &&&
    const words = ['world', 'hello'];
    const sentence = words.reduceRight((acc, curvalue) => {
      acc = acc + ' ' +curvalue;
       return acc
    }, '');
    console.log('result', `Reduce result is ${sentence}`); // 
  }

  calculateMathmaticalExpression() { // ***

    const expression = [3, '+', 2, '*', 5];
    const result = expression.reduceRight((accumulator: any, currentValue, index, arra) => {
      // Check if the current element is an operator
      if (typeof currentValue === 'string' && ['+', '-', '*', '/'].includes(currentValue)) {
        // Get the operand on the left (next to the operator)
        const leftOperand: any = arra[index - 1];
        // Apply the operation and update the result
        switch (currentValue) {
          case '+':
            arra[index - 1] = leftOperand + accumulator;
            break;
          case '-':
            arra[index - 1] = leftOperand - accumulator;
            break;
          case '/':
            arra[index - 1] = leftOperand / accumulator;
            break;
        
          default:
            arra[index - 1] = leftOperand * accumulator;
            break;
        }
        return arra[index - 1];
      }
      // If it's a number, return it as the result for the first iteration
      return accumulator;
    });

    console.log('result', result);
  }

  stackLastInFirstOut() { // (((
    const stack = [1, 2, 3, 4, 5]; // Stack: 5 (top) -> 1 (bottom)
    const lifoResult = stack.reduceRight((acc: any, c: any) => {
      acc.push(c);
      return acc
    }, []);

    console.log('result', lifoResult);

  }

  removeStringyfyAndObject() { // )))
    const strArray = ['"world"', '"hello"'] // Expected result: ['hello', 'world']  
    const objects = [{ a: 1 }, { b: 2 }, { a: 3, c: 4 }]; // Expected result: { a: 3, b: 2, c: 4 }
    const arrResult = strArray.reduceRight((acc: any, c: any) => {
      acc.push(JSON.parse(c));
      return acc
    }, []);
    const objResult = objects.reduceRight((acc: any, c: any) => {
      return { ...acc, ...c }
    }, {});

    console.log('result', arrResult, objResult);

  }


  reduceVsReduceRight() { // @@!!@@
    // Choose reduce() when left - to - right order aligns with the natural flow of computation or for better readability in most cases.
    // Choose reduceRight() when the logic or data structure requires right - to - left processing.
  }

  useReduceRight() { // @@##@@
    const keys = ['a', 'b', 'c']; // Expected result: { a: { b: { c: {} } } }  
    const result = keys.reduceRight((accumulator, currentValue) => {
     return ({ [currentValue]: accumulator });
     
    }, {});
    console.log('result', result);
  }

//  What is the difference between reduce() and reduceRight() ? // !!! Reduce iterates from left side of array while reduceRight iterate from right side of the array
// ..Explain how the iteration order differs between the two methods.

// How does the initial value of reduceRight() affect the final result ? // @@@
// ..Ask the candidate to demonstrate the importance of the initial value with a small example.

// Can you provide a simple example of using reduceRight() to concatenate an array of strings in reverse order ? // ###
// const words = ['world', 'hello'];
// // Expected result: "helloworld"

// Write a function using reduceRight() to reverse an array. // $$$
// ..Without using the built-in reverse() method, reverse an array using reduceRight().

// Use reduceRight() to implement a function that calculates the product of all numbers in an array starting from the last element. // %%%
// const numbers = [1, 2, 3, 4];
// // Expected result: 24 (4 * 3 * 2 * 1)

// How would you use reduceRight() to convert a nested array into a single flattened array ? // ^^^
// const nested = [[1, 2], [3, 4], [5]];
// // Expected result: [5, 4, 3, 2, 1]

// Using reduceRight(), implement a function to process an array of words into a sentence, starting from the last word. // &&&
// const words = ['world', 'hello'];
// // Expected result: "hello world"

// Implement a reduceRight() function to evaluate a mathematical expression stored as an array. // ***
// const expression = [3, '+', 2, '*', 5];
// // Expected result: 13 ((2 * 5) + 3)

// How can reduceRight() be used to mimic the behavior of a stack(LIFO structure) ? // (((
// Demonstrate adding and removing elements using reduceRight().

// Write a function that uses reduceRight() to parse a stringified JSON array back into its original format. // )))
// const strArray = ['"world"', '"hello"']const objects = [{ a: 1 }, { b: 2 }, { a: 3, c: 4 }];
// // Expected result: { a: 3, b: 2, c: 4 }
// // Expected result: ['hello', 'world']

// Compare the performance of reduce() and reduceRight() in processing large datasets.When would one be preferred over the other ? // @@!!@@

// Use reduceRight() to generate a deeply nested object from an array. // @@##@@
// const keys = ['a', 'b', 'c'];
// // Expected result: { a: { b: { c: {} } } }

// When would you use reduceRight() instead of reduce() in real - world scenarios ? //  @@!!@@
// ..Ask for examples of use cases where iterating from the end is crucial.

// What are the risks or potential pitfalls of using reduceRight() with large or deeply nested arrays ? // XXXX
// ..Discuss stack overflow issues and performance considerations.

// Explain how the order of execution in reduceRight() might affect side effects, such as logging or asynchronous operations. // XXXX
// ..Explore how reversing the order of execution can lead to different outcomes in side - effect - heavy code.

// Recreate the reduceRight() function manually without using the built-in method. // XXXX
// ..Implement the function in a way that behaves identically to the native reduceRight().

// Using reduceRight(), implement a function to merge an array of objects into one, prioritizing the properties from right to left. // )))
// const objects = [{ a: 1 }, { b: 2 }, { a: 3, c: 4 }];
// // Expected result: { a: 3, b: 2, c: 4 }


// Write a function that uses reduceRight() to traverse a tree - like data structure from the bottom - up. // XXXX
// Example: A nested array or an object representing a directory structure.
  
// How could you use reduceRight() to implement a middleware system in JavaScript ? // XXXX
// ..For example, processing an array of middleware functions in reverse order.

// In functional programming, when and why might you prefer reduceRight() over other approaches like recursion or loops ? // XXXX
// ..Discuss scenarios like backtracking or post - order traversal in trees.

}
