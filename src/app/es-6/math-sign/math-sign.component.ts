import { Component, OnInit } from '@angular/core';
import { Sign } from 'crypto';

@Component({
  selector: 'ecmspt-math-sign',
  templateUrl: './math-sign.component.html',
  styleUrl: './math-sign.component.scss'
})
export class MathSignComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example1();
    this.withAllNumbers();
  }


  // What does the Math.sign() function do in JavaScript ?
  // ...used to determine the sign of a number
  // Math.sign(x)
  // ...  1 if the number is positive.
  // ...- 1 if the number is negative.
  // ...0 if the number is zero(positive or negative zero).
  // ...NaN if the number is NaN(Not - a - Number).
  // ...Infinity if the number is positive Infinity.
  // ...- Infinity if the number is negative Infinity.
  // How does Math.sign() handle positive and negative numbers ?
  // What value does Math.sign() return for 0 and - 0 ?
  // What is the return value of Math.sign() when the argument is NaN ?
  // How does Math.sign() behave when applied to Infinity or - Infinity ?
  // Can you explain the difference between Math.sign(5) and Math.sign(-5) ?
  // How can Math.sign() be used to determine the direction of a number(positive, negative, or zero) in a given mathematical algorithm or application ?
  // Is Math.sign() a reliable way to check if a number is positive or negative in JavaScript ? Why or why not ?
  // Can Math.sign() be used to handle the behavior of both 0 and - 0 correctly in mathematical algorithms ?
  // Explain how you would use Math.sign() to implement a function that returns 1 for positive numbers, -1 for negative numbers, and 0 for zero.
  example1() {
    console.log(Math.sign(42));         // Output: 1  (positive number)
    console.log(Math.sign(-42));        // Output: -1 (negative number)
    console.log(Math.sign(0));          // Output: 0  (zero)
    console.log(Math.sign(-0));         // Output: -0 (negative zero)
    console.log(Math.sign(5));          // Output: 1  (zero)
    console.log(Math.sign(-5));         // Output: -1 (negative zero)
    console.log(Math.sign(NaN));        // Output: NaN (Not-a-Number)
    console.log(Math.sign(Infinity));   // Output: 1  (positive Infinity)
    console.log(Math.sign(-Infinity));  // Output: -1 (negative Infinity)
  }

  // How would Math.sign() behave when applied to a string representation of a number like "42" ?
  // What would be the output of Math.sign() when called with null, undefined, or an empty string ?
  // If Math.sign() is called with a string like "abc", what would the result be and why ?
  // What happens if you pass an object or an array to Math.sign() ?
  withString() {
    // console.log(Math.sign('42')); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
    // console.log(Math.sign(null)); // Argument of type 'null' is not assignable to parameter of type 'number'.ts(2345)
    // console.log(Math.sign(undefined)); // Argument of type 'undefined' is not assignable to parameter of type 'number'.ts(2345)
    // console.log(Math.sign('')); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
    // console.log(Math.sign('abc')); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
    // console.log(Math.sign([])); // Argument of type ''never[]'' is not assignable to parameter of type 'number'.ts(2345)
    // console.log(Math.sign({})); // Argument of type '{}' is not assignable to parameter of type 'number'.ts(2345)
  }

  // How can you use Math.sign() in combination with other Math functions, like Math.abs() or Math.pow() ?
  withAllNumbers() {
    let number = -42;
    let result = Math.sign(number) * Math.abs(number);  // Output: -42
    console.log(result);

    let base = -2;
    let exponent = 3;
    let result1 = Math.sign(Math.pow(base, exponent));  // Output: -1
    console.log(result1);

    let number1 = -4;
    let poweredResult = Math.pow(number1, 2);  // 16 (positive result)
    let flippedResult = Math.sign(poweredResult) * Math.abs(poweredResult);  // Output: 16
    console.log(flippedResult);

    let randomValue = Math.sign(Math.random() - 0.5) * Math.random();
    console.log(randomValue);

    let value = -5;
    let direction = Math.sign(value);  // -1 (direction)
    let magnitude = Math.abs(value);   // 5 (magnitude)
    console.log(direction * magnitude);  // Output: -5

  }

  // How does Math.sign() behave when working with floating - point numbers, particularly those close to zero, like 0.0000001 ?
  // ... 1 cause for all positive number it will return 1

  // How would you implement your own version of Math.sign() without using the built-in function? // XXXX

  // In what real - world scenarios might you find Math.sign() useful ? Can you give an example ?
  profitOrLoss() {
    let stockPriceChange = -50; // Negative change in stock price (loss)
    let result = Math.sign(stockPriceChange);
    if (result === 1) {
      console.log("Profit!");
    } else if (result === -1) {
      console.log("Loss!");
    } else {
      console.log("No change.");
    }
  }

  // How does Math.sign() differ from Math.trunc() and Math.floor() in terms of handling negative and positive values ?
  // What would Math.sign() return when called with a negative floating - point number, e.g., -3.14 ?
  withSignTruncFloor() {
    // Sign
    // Purpose: Determines whether the number is positive, negative, or zero.
    // Returns: 1, -1, 0, -0, NaN based on the sign.
    // Does not modify the number itself, just tells you its sign.
    console.log(Math.sign(3.5));   // 1 (positive)
    console.log(Math.sign(-3.5));  // -1 (negative)
    console.log(Math.sign(0));     // 0  (positive zero)

    // Math.trunc():
    // Purpose: Removes the decimal part, truncating the number towards zero.
    // Behavior with negative numbers: Moves towards zero, so Math.trunc(-4.9) results in -4.
    // Behavior with positive numbers: Just removes the decimal, Math.trunc(4.9) results in 4.
    console.log(Math.trunc(3.5));  // 3  (truncates decimal)
    console.log(Math.trunc(-3.5)); // -3 (truncates towards zero)

    // Math.floor():
    // Purpose: Rounds the number down to the nearest integer less than or equal to the number.
    // Behavior with negative numbers: Rounds towards negative infinity, so Math.floor(-4.9) results in -5.
    // Behavior with positive numbers: Rounds down to the nearest integer, so Math.floor(4.9) results in 4.
    console.log(Math.floor(3.5));  // 3  (rounds down)
    console.log(Math.floor(-3.5)); // -4 (rounds down towards negative infinity)
  }
  
}
