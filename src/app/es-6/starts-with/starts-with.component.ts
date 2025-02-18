import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-starts-with',
  templateUrl: './starts-with.component.html',
  styleUrl: './starts-with.component.scss'
})
export class StartsWithComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.simpleMethod();
    this.withNegativeNumber();
  }


  // Basic Understanding:
  // What does the startsWith() method do in JavaScript ?
  // Follow - up : Can you provide a simple example of how startsWith() is used ?
  simpleMethod() {
    const str = 'Hello World';
    const isStartWithHello = str.startsWith('Hello');
    console.log('isStartWithHello', isStartWithHello);
  }

  // How does startsWith() differ from the includes() method ?
  // Follow - up : Can you give an example where startsWith() would be preferred over includes() ?
  simpleMethodWithIncludes() {
    const str = 'Hello World';
    const isStartWithHello = str.startsWith('Hello');
    console.log('isStartWithHello', isStartWithHello);
    const isHelloIncludes = str.includes('Hello');
    console.log('isHelloIncludes', isHelloIncludes);
  }

  // What is the return type of the startsWith() method ? // boolean (true/false)
  // Follow - up : What will happen if you call startsWith() on an empty string ?

  // Parameters and Use Cases:
  // What are the parameters of the startsWith() method, and how are they used ?
  // Can you explain the significance of the start parameter in startsWith() ?
  // Follow - up : What is the purpose of the second parameter in startsWith() ?
  withAllParams() {
    const text = "Hello, world!";
    const result = text.startsWith("world", 7);  // Start checking from index 7
    console.log(result);  // Output: true
  }

  // Case Sensitivity:
  // Does the startsWith() method consider case sensitivity when checking the beginning of a string ? // Yes

  // Edge Cases:
  // What will startsWith() return if the string is empty ? // false

  // What happens when you call startsWith() on a string that does not contain the specified prefix ? //
  // Follow - up : Can you demonstrate how the method would behave in this case?
  specifiedPrefix() {
    const text = "JavaScript is awesome!";
    const result1 = text.startsWith("Java");
    console.log(result1);  // Output: true
    const result2 = text.startsWith("Script");
    console.log(result2);  // Output: false
  }

  // Performance and Optimization:
  // How does the startsWith() method perform in terms of time complexity ?
  // ...linear search O(n)

  // Practical Applications:
  // Can you provide a real - world use case where startsWith() would be more appropriate than other methods like substring() or indexOf() ?
  // ...startsWith() is the best choice in cases where you need to check if a string begins with a particular substring, such as validating URLs, file paths, or checking for specific identifiers in data.
  // ...It is more readable and intuitive compared to substring() or indexOf(), especially when you are specifically concerned with the beginning of the string.
  
  // How would you use startsWith() to validate input strings, such as checking if a string starts with "http" or "https" for a URL validation ?
  checkURL(url: string) {
    return (url.startsWith('http') || url.startsWith('https')) ? true : false;
  }

  // Comparisons with Other String Methods:
  // What are the differences between startsWith() and indexOf() ?
  // ...startswith return boolean value while indexOf retrun index (number)

  // How would you compare startsWith() with String.prototype.slice() for checking the beginning of a string ?

  // How does startsWith() compare to using a regular expression to check if a string starts with a specific pattern ?

  // Error Handling:
  // What will happen if you pass an invalid second parameter(e.g., a negative number) to startsWith() ?
  withNegativeNumber() {
    let str = "Hello, world!";
    console.log(str.startsWith("world", -6));  // Output: true
  }

  // Advanced :
  // Can you use startsWith() with strings containing special characters, like escape sequences or Unicode characters ?

  // Can you chain startsWith() with other string methods for more complex string manipulations ? If so, provide an example.
  test() {
    let str = "  hello, world!  ";
    let result = str.trim() // removes whitespace
      .toUpperCase() // converts to uppercase
      .startsWith("HELLO"); // checks if it starts with "HELLO"
  }

}
