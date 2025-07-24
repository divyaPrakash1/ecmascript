import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-math-cbrt',
  templateUrl: './math-cbrt.component.html',
  styleUrl: './math-cbrt.component.scss'
})
export class MathCbrtComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.withOtherMethod();
    this.negativeFloatingNumber();
  }

  // What does the Math.cbrt() function do in JavaScript ?
  // ...Math.cbrt(x)
  // ...cube root of a given number. The cube root of a number x is the value y
  // ...Positive numbers: Returns the cube root of positive numbers.
  // ...Negative numbers: Returns the cube root of negative numbers(i.e., for negative x, the cube root will also be negative).
  // ...Zero: Returns 0 when the input is 0.
  // ...NaN: If the input is NaN, the result will be NaN.
  // ...Infinity: If the input is Infinity, the result is also Infinity.
  // ...Negative Infinity: If the input is - Infinity, the result is - Infinity.
  // How does Math.cbrt() handle negative numbers in JavaScript ?
  // What will Math.cbrt() return when applied to 0 ?
  // Can Math.cbrt() be used for non - integer values ? What will be the result ?
  // What is the behavior of Math.cbrt() when used with NaN or Infinity ?
  // Is Math.cbrt() a static method ? How would you use it in JavaScript code ?
  example() {
    console.log(Math.cbrt(8));        // 2 (since 2^3 = 8)
    console.log(Math.cbrt(-8));       // -2 (since (-2)^3 = -8)
    console.log(Math.cbrt(27));       // 3 (since 3^3 = 27)
    console.log(Math.cbrt(0));        // 0 (the cube root of zero is zero)
    console.log(Math.cbrt(-27));      // -3 (the cube root of a negative number is negative)
    console.log(Math.cbrt(NaN));      // NaN (cube root of NaN is NaN)
    console.log(Math.cbrt(Infinity)); // Infinity (cube root of Infinity is Infinity)
    console.log(Math.cbrt(-Infinity));// -Infinity (cube root of negative Infinity is negative Infinity)
  }

  // How does Math.cbrt() behave when working with very large or very small numbers ?
  veryLargeAndSmallNumber() {
    console.log(Math.cbrt(1e-15));  // 2.154434690031884e-05 (cube root of 1e-15)
    console.log(Math.cbrt(1e+15));  // 1000000000000 (cube root of 1e+15)
  }

  // How can you use Math.cbrt() in combination with other Math methods, such as Math.pow() or Math.round() ?
  withOtherMethod() {
    const result1 = Math.cbrt(Math.pow(8, 3)); // Take cube, then cube root
    console.log(result1); // 8 (because (8^3)^(1/3) = 8)
    const result2 = Math.round(Math.cbrt(27.9));  // Find cube root and round to nearest integer
    console.log(result2); // 3 (because the cube root of 27.9 is approximately 3.037)
  }

  // What would be the result of applying Math.cbrt() to a negative floating - point number ?
  negativeFloatingNumber() {
    const result1 = Math.cbrt(-29.5); // -3.089873302932822
    console.log(result1);
  }

  // How does Math.cbrt() differ from other methods like Math.sqrt() ? // cbrt calculate cube while sqrt calculate root fo given numebr

  // In what real - world scenarios might you use Math.cbrt() ? Can you provide an example ? // Calculating Volume from Density:
  
  // What is the return type of Math.cbrt() ? // number
  
  // Does Math.cbrt() work consistently across all browsers ? Are there any edge cases to be aware of ? //Yes
  
  // Can Math.cbrt() be used for complex numbers ? Why or why not ? // Yes
  complexNumber() {
    console.log(Math.cbrt(1e+300));  // Very large number (cube root may lose precision)
    console.log(Math.cbrt(1e-300));  // Very small number (cube root may lose precision)
  }
  
  // How would you implement a polyfill for Math.cbrt() in older JavaScript environments that do not support this function?

}
