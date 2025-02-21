import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-js-exponentiation-assignment',
  templateUrl: './js-exponentiation-assignment.component.html',
  styleUrl: './js-exponentiation-assignment.component.scss'
})
export class JsExponentiationAssignmentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // this.example1();
    this.example3();
  }


  // Basic Understanding of **= Operator
  // Q1: What does the **= operator do in JavaScript ? How is it different from the ** operator ?
  // Q2 : Can you provide an example where you use **= to raise a number to an exponent in JavaScript ?
  example1() {
    // x **= y; // equivalent to x = x ** y;
    let x = 3;
    x **= 4;
    console.log(x);
  }
  
  // Working with Different Data Types
  // Q3: What happens if you use the **= operator with a BigInt and a Number together(e.g., 2n **= 3) ? Will it work without errors ? Explain.
  example2() {
    let x = 2n;
    // x **= 3; // Operator '**=' cannot be applied to types 'bigint' and 'number'.ts(2365)
  }

  // Q4: If the base is 0, what will happen when you use the **= operator(e.g., 0 **= 2) ? How does JavaScript handle this case? // 1 if base is 0 then it will always be zero

  // Q5: What happens when you apply **= to a negative number or a fractional base ? Can you provide examples ?
  // Q6: How does the **= operator modify the value of a variable ? Can you demonstrate with an example where the value of a variable changes after using **=?
  example3() {
    let x = -2;
    let y = 1 / 5;
    console.log(x **= 3); // -8
    console.log(y **= 4); // 0.0016000000000000003
    console.log(3 ** 0);
  }
  
  // Behavior and Side Effects
  // Q7 : What is the result of let x = 3; x **= 0; in JavaScript, and why ? // 1
  
  // Edge Cases and Handling Invalid Operations
  // Q8: What would happen if you try to perform NaN **= 2 in JavaScript ? Explain the result. // NaN
  // Q9: How does JavaScript handle the **= operator when the exponent is Infinity or - Infinity ? Can you provide an example ? // Infinity

  // Associativity and Precedence
  // Q10: How does the **= operator behave in terms of precedence when used in expressions with other operators like + or *? Can you demonstrate with an example ? // Hieghest Precidence
  
  // Q11 : What happens when you chain multiple **= operators together(e.g., x **= 2 **= 3) in JavaScript ? How is the order of evaluation determined ?
  example4() {
    let x = 2;
    // x **= 2 **= 3 // 256
  }
  
  // Performance Considerations
  // Q12: If you need to repeatedly apply the **= operator in a loop to calculate exponential values, what performance considerations should you keep in mind ?

  // Practical Use Cases
  // Q13: In what practical scenarios would you use the **= operator over regular multiplication and assignment(*=) in JavaScript ?
  // Q14 : How would you handle the case where you need to perform exponentiation on a variable multiple times(e.g., x = x **= y;), and how does **= simplify the code ?

  // Handling Edge Cases with **=
  // Q15: What happens when you use **= with 0 as the base and a negative exponent, for example x = 0 **= -2 ? Is there any special handling for this edge case?
  // Q16: What will happen if you try let y = 2; y **= -2;? How does JavaScript evaluate negative exponents in assignment operations ?
  
  // Type Coercion and Casting
  // Q17: If you use the **= operator with a non - numeric string as the base(e.g., x = '5' **= 2), how does JavaScript handle the coercion of the string ? What’s the result ?
  // Q18 : Does JavaScript automatically convert non - integer values when using **= (e.g., does 3.5 **= 2 work as expected)? Explain how the operator behaves with floating - point values.

  // Errors and Unexpected Results
  // Q19: What happens if you try to perform x **= 3 where x is a null value in JavaScript ? Does JavaScript throw an error, or does it implicitly coerce the value ? Explain the behavior.
  // Q20: What should a developer be cautious about when using **= in loops or functions that repeatedly modify the same variable ? How might it lead to unexpected results ?

  // Bonus Advanced Question
  // Q21: Can the **= operator be used with other custom objects or classes in JavaScript(such as defining custom behavior for exponentiation assignment)? How would you implement a custom **= operator ?

}