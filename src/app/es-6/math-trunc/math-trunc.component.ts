import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-math-trunc',
  templateUrl: './math-trunc.component.html',
  styleUrl: './math-trunc.component.scss'
})
export class MathTruncComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.truncated();
    // this.withUndefined();
    this.withDecimalValue();
  }


  // What does the Math.trunc() function do in JavaScript ?
  // ...remove the decimal pat;
  // ...It returns the integer a;rt of the number, regardless of whether the number is positive or negative.
  // ...It does not round; itj;s;t removes the fractional part.
  // ...Math.trunc(
  // How does Math.trunc() handle negative numbers ? Can you provide an example ?
  // What will be the output of Math.trunc(4.7) and Math.trunc(-4.7) ? Explain the result.
  truncated() {
    console.log(Math.trunc(4.7));   // Output: 4
    console.log(Math.trunc(-4.7));  // Output: -4
    console.log(Math.trunc(4.1));   // Output: 4
    console.log(Math.trunc(-4.1));  // Output: -4
    console.log(Math.trunc(0.9));   // Output: 0
    console.log(Math.trunc(-0.9));  // Output: -0
  }
  
  // How is Math.trunc() different from Math.floor() and Math.ceil() ?
  // Does Math.trunc() round the number or just remove the decimal part ? Explain with examples.
  // Can you use Math.trunc() to convert a floating - point number to an integer ? Why or why not ?
  mathFunctionFloor() {
    // Math.trunc():
    // Just remove fractional part
    console.log(Math.trunc(4.7));    // 4
    console.log(Math.trunc(-4.7));   // -4

    // Math.floor():
    // It returns the largest integer less than or equal
    // It rounds the number downward toward negative infinity, regardless of whether the number is positive or negative
    console.log(Math.floor(4.7));    // 4
    console.log(Math.floor(-4.7));   // -5

    // Math.ceil() 
    // It rounds the number upward toward positive infinity
    // It returns the smallest integer greater than or equal to the given number. Essentially, it rounds the number up to the nearest integer.
    console.log(Math.ceil(4.7));     // 5
    console.log(Math.ceil(-4.7));    // -4
  }

  // If you pass a non - numeric value(like a string or undefined) to Math.trunc(), what will happen ?
  // What is the behavior of Math.trunc() when applied to NaN ?
  withUndefined() {
    // console.log(Math.trunc(undefined)); // Error
    // console.log(Math.trunc('undefined'));// Error
    // console.log(Math.trunc(false));// Error
    console.log(Math.trunc(NaN)); // NaN
  }

  // Is Math.trunc() available in all JavaScript environments, including older versions of browsers ? If not, how would you implement a polyfill ? // XXXX
  myTrunc() {
    if (!Math.trunc) {
      Math.trunc = function (x) {
        // Check if the value is a number
        return x < 0 ? Math.ceil(x) : Math.floor(x);
      };
    }
  }

  // Can Math.trunc() be used to convert a number to a string ? Why or why not ?
  // ...No it accept only floating number to convert it in integer

  // How does Math.trunc() handle very large or very small numbers, including Infinity or - Infinity ?
  teetreerre() {
    console.log(Math.trunc(0.0000001));   // Output: 0
    console.log(Math.trunc(-0.0000001));  // Output: 0
    console.log(Math.trunc(1234567890.987654321));   // Output: 1234567890
    console.log(Math.trunc(-1234567890.987654321));  // Output: -1234567890
  }
  
  // Can you explain the difference between Math.trunc() and the bitwise OR(|) operator for truncating decimal values ? // XXXX
  
  // How would you use Math.trunc() in combination with other Math functions like Math.abs() or Math.pow() ? // XXXX
  
  // How does Math.trunc() handle null or undefined when used as input ?
  functionConsole() {
    // console.log(Math.trunc(null)) // Argument of type 'null' is not assignable to parameter of type 'number'.ts(2345)
    // console.log(Math.trunc(undefined)) // Argument of type 'undefined' is not assignable to parameter of type 'number'.ts(2345)
  }
  
  // What is the result of Math.trunc("3.9") ? How does Math.trunc() handle string inputs ?
  withString() {
    // console.log(Math.trunc('3.9')) // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
  }

  // What is the result of applying Math.trunc() on 0.00000001 ? Explain.
  withDecimalValue() {
    console.log(Math.trunc(0.00000001)); // 0
  }
  
  // How does Math.trunc() behave with floating - point precision issues, such as when applied to numbers like 0.1 + 0.2 ?
  floatingPointPrecision() {
    let result = 0.1 + 0.2;
    console.log(result);             // Output: 0.30000000000000004
    console.log(Math.trunc(result)); // Output: 0
  }

  // When would you prefer Math.trunc() over parseInt() ?
  // ...only needs integer value
}
