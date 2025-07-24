import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-numeric-separators',
  templateUrl: './numeric-separators.component.html',
  styleUrl: './numeric-separators.component.scss'
})
export class NumericSeparatorsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.example1();
    this.example2();
  }


  // What are numeric separators(_) in JavaScript, and why are they used?
  
  // ...Underscores(_) are ignored by JavaScript, meaning 1_000 === 1000 is true.
  // ...Cannot start or end with _(e.g., _1000 or 1000_ is invalid).
  // ...Cannot have multiple consecutive _(e.g., 1__000 is invalid).
  // ...Not supported in JSON(JSON does not allow _ in numbers).
  // How do numeric separators improve code readability ? Provide an example.
  // Can numeric separators be used in decimal numbers ? // ...Yes
  // Are numeric separators allowed in hexadecimal, binary, and octal literals ? Provide examples.
  example1() {
    const bigNumber = 1_000_000_000; // 1 billion
    const fileSize = 4_294_967_296; // 4 GB in bytes
    const hexCode = 0xAB_CD_EF; // Hexadecimal representation
    const binaryMask = 0b1010_0011_1101; // Binary format
    const piApprox = 3.141_592_653_589; // Readable floating-point number

    console.log(bigNumber); // 1000000000
    console.log(hexCode);   // 11259375 (Decimal equivalent of 0xABCDEF)

  }

  // Where in a number are numeric separators not allowed ?
  // What happens if you place two consecutive underscores(__) inside a number ?
  // Can numeric separators be used at the beginning or end of a number ? Why or why not ?
  // Do numeric separators impact JSON parsing ?
  // ...Underscores(_) are ignored by JavaScript, meaning 1_000 === 1000 is true.
  // ...Cannot start or end with _(e.g., _1000 or 1000_ is invalid).
  // ...Cannot have multiple consecutive _(e.g., 1__000 is invalid).
  // ...Not supported in JSON(JSON does not allow _ in numbers).
  
  
  
  // Do numeric separators affect mathematical operations in JavaScript ?
  example2() {
    const num1 = 4_000; // 4000
    const num2 = 2_000; // 2000
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 / num2);
    console.log(num1 * num2);
  }

  // Are numeric separators preserved when converting a number to a string ?
  // ...✅ Numeric separators are ignored in JavaScript at runtime.
  // ...✅ When converting a number to a string, _ does not appear in the output.
  // ...✅ Use.toLocaleString() for human - readable formatting.
  example3() {
    console.log((1_000_000).toLocaleString()); // "1,000,000"
  }
  // Can you use numeric separators in template literals ? Why or why not ?
  example4() {
    const num = 1_000_000;
    console.log(num.toString());  // "1000000"
    console.log(String(num));     // "1000000"
    console.log(`${num}`);        // "1000000"
  }

  // How does JavaScript handle numeric separators in function arguments like parseInt() or Number() ?
  example5() {
    console.log(parseInt("1_000")); // NaN (Invalid number format)
  }
  
  // Are numeric separators supported in all JavaScript engines and browsers ? How can you check compatibility ?
  
  // What are some real - world use cases where numeric separators improve code clarity ?
  
  // What error message do you get if you incorrectly use numeric separators in JavaScript ?


}
