import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-default-param',
  templateUrl: './default-param.component.html',
  styleUrl: './default-param.component.scss'
})
export class DefaultParamComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.defineUndefined(); // Dadda
    // this.defineUndefined(undefined); // Dadda
    // this.defineUndefined('Rajan'); // Rajan

    // this.configureApp();  // Output: App configured with theme: light and language: en
    // this.configureApp({ theme: 'dark' });  // Output: App configured with theme: dark and language: en
    // this.configureApp({ language: 'fr' });  // Output: App configured with theme: light and language: fr

    // this.calculateTotal(150);      // Output: Original Price: $150, Discount: 10%, Final Price: $135
    // this.calculateTotal(50);       // Output: Original Price: $50, Discount: 0%, Final Price: $50
    // this.calculateTotal(150, 0.2); // Output: Original Price: $150, Discount: 20%, Final Price: $120

    // this.nanOrInfinityParams(); // Dadda
    // this.nanOrInfinityParams(NaN); // NaN
    // this.nanOrInfinityParams(Infinity); // Infinity
    // this.nanOrInfinityParams();

    // this.mixParams();
    // this.mixParams('dadda', 'asdfa', 111111);
    // this.mixParams();

    // this.defaultWithOnjectOrArray([1, 2, 3, 4, 5]);
    // this.defaultWithOnjectOrArray({name: 'Divya'});
    // this.defaultWithOnjectOrArray();

    // this.createUserProfile();                // Output: Name: Anonymous, Age: 18, Country: Unknown
    // this.createUserProfile('Alice', 25);      // Output: Name: Alice, Age: 25, Country: Unknown
    // this.createUserProfile('Bob', 30, 'USA'); // Output: Name: Bob, Age: 30, Country: USA


    this.gtttt(undefined); // Dadda
    this.gtttt(null); // null

  }

  // Basic Understanding
  // What are default parameters in JavaScript, and how do they work ?
  // How do you define default parameters in a JavaScript function?
  // Is it possible to assign a default parameter value using a function expression in JavaScript ?
  defaultParams(name = 'Divya Prakash', age = 30) {
    console.log(name, age);
  }

  // Can you pass undefined as an argument to a function with default parameters ? What happens in that case?
  // What happens if you don’t provide a value for a parameter with a default value ?
  // If you call a function with an argument explicitly set to null, how does it behave compared to calling the function with no argument at all ?
  // Is it possible to use undefined as the default value for a parameter ? How would you handle this ?
  defineUndefined(name = 'Dadda') {
    console.log(name);
  }

  // Specific Scenarios
  // Can you provide an example where default parameters are useful in a JavaScript function?
  configureApp(options: any = { theme: 'light', language: 'en' }) {
    console.log(`App configured with theme: ${options.theme} and language: ${options.language}`);
  }

  // How would you handle default parameters if the default value depends on another parameter ?
  // Can you use expressions or functions to define default parameter values in JavaScript ? Can you give an example ?
  // Can you change the default value of a parameter dynamically, based on external factors or conditions ?
  calculateTotal(price: number, discount = (price > 100 ? 0.1 : 0)) {
    const discountedPrice = price - (price * discount);
    console.log(`Original Price: $${price}, Discount: ${discount * 100}%, Final Price: $${discountedPrice}`);
  }

  // What would happen if you try to assign a default value to a parameter in an arrow function?
  // const greet = (name = 'Guest') => {
  //     console.log(`Hello, ${name}!`);
  // };

  // greet();          // Output: Hello, Guest! (No argument passed, default value used)
  // greet('Alice');   // Output: Hello, Alice! (Argument provided, so default value is overridden)

  // Edge Cases
  // Can default parameters be used with rest parameters(...args) ? Provide an example.
  restParams(...rest: any) {
    console.log('asdfasf', rest);
  }

  // What happens if you provide a default value for a parameter, but pass an argument as NaN or Infinity ?
  nanOrInfinityParams(obj: any = 'Dadda') {
    console.log('asdfasf', obj);
  }

  // Can you mix default parameters with destructuring in JavaScript ? Provide an example.
  mixParams(name = 'Divya', ...ressst: any) {
    console.log(name, ressst)
  }

  // What happens if the default value for a parameter is an object or an array ? Are there any considerations ?
  // How does JavaScript handle default parameters when you use null or undefined explicitly as arguments ?
  defaultWithOnjectOrArray(param: any = undefined) {
    console.log(param)
  }

  // Advanced / Complex Use Cases
  // What would happen if you provide a default parameter value inside a for loop or another dynamic context ?
  undefinedForLoop() {
    const users = [undefined, 'Alice', undefined, 'Bob'];
    for (let i = 0; i < users.length; i++) {
      // Simulating a default parameter inside a loop
      const name = users[i] !== undefined ? users[i] : 'Guest'; // Default to 'Guest' if undefined
      console.log(`Hello, ${name}!`);
    }
  }

  // Can you give an example where using default parameters would lead to a cleaner, more readable code compared to using if statements for checking undefined ?
  createUserProfile(name: any = undefined, age: any = undefined, country: any = undefined) {
    if (name === undefined) {
      name = 'Anonymous';
    }
    if (age === undefined) {
      age = 18;
    }
    if (country === undefined) {
      country = 'Unknown';
    }
    console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
  }

  // How would you avoid potential issues with mutable objects(like arrays or objects) as default parameter values in JavaScript ?
  // Best Practices and Performance
  // What are the best practices for using default parameters in JavaScript ?
  gtttt(name: any = 'Dadda') {
    console.log(name);
  }

  // When would you avoid using default parameters in JavaScript ?
  // ...Complex logic: When determining the default value requires complex calculations or external dependencies.
  // ...Confusing function signatures: When defaults clutter the function signature, making it harder to understand.
  // ...Side effects: When the default parameter involves modifying shared state or performing operations with side effects.
  // ...Distinguishing null and undefined

}
