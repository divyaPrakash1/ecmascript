import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-nullish-coalescing',
  templateUrl: './nullish-coalescing.component.html',
  styleUrl: './nullish-coalescing.component.scss'
})
export class NullishCoalescingComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example4();
    this.example5();
  }


  // What is the purpose of the nullish coalescing operator(??) in JavaScript ?
  // ...If the value on the left-hand side of ?? is null or undefined, the right - hand side value will be used.
  // ...If the left - hand side is any other value(e.g., a number, string, or boolean), it will return that value.
  example1() {
    const value1 = null;
    const value2 = 'Hello';
    console.log(value1 ?? 'Default Value'); // Default Value
    console.log(value2 ?? 'Default Value'); // Hello
  }

  // Explain how the nullish coalescing operator works in comparison to the logical OR(||) operator.
  // What values are considered "nullish" when using the ?? operator ?
  // What is the behavior of the nullish coalescing operator when the left - hand side is undefined or null ?
  // What happens if you use the nullish coalescing operator(??) with false, 0, or an empty string as the left - hand operand ?
  // ...The logical OR (||) operator returns the right-hand side value if the left-hand side is any falsy value (e.g., false, 0, "", null, undefined, NaN). 
  // ...While the nullish coalescing operator only checks for null or undefined and not other falsy values.
  example2() {
    const value = 0;
    console.log(value || 'Default Value'); // Default Value
    console.log(value ?? 'Default Value'); // 0
  }
  
  // Can the nullish coalescing operator be used to handle cases where an object’s property is null or undefined ?
  example3() {
    const user = {
      name: null
    };
    console.log(user.name ?? 'Dafault User'); // Dafault User 
  }

  
  // What is the result of the expression null ?? "default" ? // default
  
  // How does the nullish coalescing operator behave when the left - hand operand is NaN ?
  example4() {
    const value = NaN;
    console.log(value ?? 'Default Value'); // NaN
  }

  // Can you chain multiple nullish coalescing operators ?
  example5() {
    const value1 = null;
    const value2 = undefined;
    const value3 = NaN;
    console.log(value1 ?? value2 ?? value3 ?? 'Default Value'); // NaN
  }

  // Can the nullish coalescing operator(??) be used in conjunction with the logical OR(||) operator ?
  example6() {
    const a = 0;
    const b = undefined;
    const c = 'Hello';
    const d = (a ?? b) || c; // Hello;
  }

  // How does the nullish coalescing operator handle function return values that are undefined or null ?
  getValue() {
    return 42;
  }

  example7() {
    let result = this.getValue() ?? 32; // 42
  }

  // Explain a real - world scenario where the nullish coalescing operator would be beneficial.
  example8() {
    const userPreferences = {
      themeColor: ""
    };

    const themeColor1 = userPreferences.themeColor || 'lightblue'; // lightblue
    const themeColor2 = userPreferences.themeColor ?? 'lightblue'; // ""

  }
  // What is the difference between ?? and && (logical AND operator)?
  example9() {

    // let value = null ?? "default";
    // console.log(value); // "default"

    // let value2 = 0 ?? "default";
    // console.log(value2); // 0 (because 0 is not null or undefined)


    let result = true && "Hello";
    console.log(result); // "Hello" (both values are truthy, so returns last value)

    let result2 = false && "Hello";
    console.log(result2); // false (stops at first falsy value)

  }
  
  // Is the nullish coalescing operator(??) supported in all JavaScript environments ?
        
    
}
