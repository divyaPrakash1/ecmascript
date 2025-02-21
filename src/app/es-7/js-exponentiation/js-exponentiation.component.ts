import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-js-exponentiation',
  templateUrl: './js-exponentiation.component.html',
  styleUrl: './js-exponentiation.component.scss'
})
export class JsExponentiationComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.exponentiate();
    console.log(this.safeExponentiation(10, 1000)); // Infinity();
  }


  // What is the output of 2 ** 3 in JavaScript ?
  // How does JavaScript handle exponentiation with negative exponents ? For example, what is the result of 2 ** -3 ?
  // What will be the result of 2 ** 0 in JavaScript and why ?
  // How does JavaScript handle exponentiation with floating - point numbers(e.g., 2.5 ** 2) ?
  // What is the result of 0 ** 0 in JavaScript and how is it interpreted ?
  exponentiate() {
    console.log('1111111111111', 2 ** 3); // 8
    console.log('2222222222222', 3 ** 2); // 9
    console.log('3333333333333', 3 ** 1); // 3
    console.log('4444444444444', 1 ** 3); // 1
    console.log('5555555555555', 4 ** 3); // 64
    console.log('6666666666666', 2 ** -3); // 0.125
    console.log('7777777777777', NaN ** 3); // NaN
    console.log('8888888888888', 2 ** NaN); // NaN
    console.log('9999999999999', 2 ** 0); // 0
    console.log('8888888888888', 0 ** 4); // 1
    console.log('111111111111', 0 ** 0); // 1
    console.log('222222222222', 2.5 ** 2); // 6.25
  }

  // Explain the difference between Math.pow(base, exponent) and base ** exponent in JavaScript.
  // ...Return Type-	base ** exponent
  // ...number or BigInt
  // ...Syntax- Operator syntax
  // ...Performance-	Faster(direct operator)
  // ...Readability- More concise and readable
  // ...Special Case Handling- Coerces to number
  // ...Compatibility- Works from ES6 onward

  // ...Math.pow(base, exponent)	
  // ...Syntax- Function call
  // ...Return Type-	number
  // ...Performance-	Slightly slower
  // ...Readability-	Less concise
  // ...Special Case Handling-	Coerces to number
  // ...Compatibility-	Works in all JS environments
  
  // What happens when you perform exponentiation on a non - numeric value in JavaScript(e.g., 2 ** 'abc') ? // can't accept string value
  
  // Can you use the exponentiation operator(**) with BigInt in JavaScript ? What will happen if you try? // No
  
  // What is the difference in behavior between Math.pow and ** for large exponentiation values in JavaScript ?
  withlargeValue() {
    console.log(Math.pow(10, 1000)); // Infinity (because the result exceeds the max limit)
    console.log(10 ** 1000); // Infinity (same result as Math.pow)

    console.log(Math.pow(10, 308)); // 1e+308 (maximum value close to Number.MAX_VALUE)
    console.log(10 ** 308); // 1e+308 (same as Math.pow)
  }

  // How does the exponentiation operator(**) behave with NaN or Infinity in JavaScript ?
  // What are the edge cases when using the ** operator in JavaScript ?
  edgeCase() {
    console.log(2 ** 0);   // 1
    console.log(2 ** -0);  // 1

    console.log(2n ** 3n); // 8n (works with BigInt operands)
    console.log(2 ** 3);   // 8 (works with Number operands)
    // console.log(2n ** 3);  // TypeError: Cannot mix BigInt and other types

    console.log(4 ** 0.5);  // 2 (square root of 4)
    console.log(8 ** (1 / 3)); // 2 (cube root of 8)
    console.log((-4) ** 0.5); // NaN (cannot take fractional powers of negative numbers)

    console.log(10 ** 1000); // Infinity (too large to represent in JavaScript)

    console.log(NaN ** 2);   // NaN
    console.log(2 ** NaN);   // NaN
    console.log(NaN ** NaN); // NaN

    console.log(Infinity ** 2);    // Infinity
    console.log(Infinity ** -2);   // 0
    console.log((-Infinity) ** 2); // Infinity (even exponent)
    console.log((-Infinity) ** 3); // -Infinity (odd exponent)
    console.log(Infinity ** 0);    // 1

    console.log(0 ** 2);   // 0
    console.log(0 ** -2);  // Infinity (dividing by zero)
    console.log(0 ** 0);   // 1 (JavaScript defines this as 1)
    
    console.log(2 ** -2); // 0.25 (1 / 2^2)
    console.log(5 ** -1); // 0.2 (1 / 5^1)
  }
  
  // Does the exponentiation operator(**) in JavaScript have the same precedence as multiplication or addition ?
  precisionWise() {
    console.log(2 + 3 ** 2); // 2 + (3 ** 2) = 2 + 9 = 11
    console.log(2 * 3 ** 2); // 2 * (3 ** 2) = 2 * 9 = 18
  }
  
  // How would you use exponentiation to calculate the square of a number in JavaScript ? // n ** 2
  
  // Is the ** operator in JavaScript left - associative or right - associative ? Provide an example.
  associationee() {
    console.log(2 ** 3 ** 2); // 512 (evaluates as 2 ** (3 ** 2))
    console.log((2 ** 3) ** 2); // 64 (evaluates as (2 ** 3) ** 2)
  }

  // Explain how you can calculate large powers in JavaScript without encountering precision issues.
  safeExponentiation(base: number, exponent: number) {
    if (exponent > 710) { // Anything greater than 710 will overflow in JavaScript
      return Infinity;
    }
    return Math.pow(base, exponent);
  }
}
