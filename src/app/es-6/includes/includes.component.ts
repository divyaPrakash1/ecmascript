import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-includes',
  templateUrl: './includes.component.html',
  styleUrl: './includes.component.scss'
})
export class IncludesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.mainMethod1();
    // this.getVal();
    // this.retrunValue();
    this.includeBehaviour();
  }


  // Basic Understanding:
  // Can includes() be used to detect the presence of a substring in a string starting from a specific index ? How ?
  // What does the includes() method do in JavaScript ?
  // ...The includes() method in JavaScript is used to check whether a given string or array contains a specific value or substring. It returns a boolean value: true if the value or substring is found, and false if it is not.
  // ... str.includes(searchString, position)
  mainMethod() {
    const message = "Hello, world!";
    console.log(message.includes("Hello"));  // true
    console.log(message.includes("hello"));  // false (case-sensitive)
    console.log(message.includes("world", 7));  // true (starts searching from index 7)

    const arr = [1, 2, 3, 4, 5];
    console.log(arr.includes(3));  // true
    console.log(arr.includes(6));  // false
    console.log(arr.includes(3, 3));  // false (searches starting from index 3)
  }

  // What type of value does includes() return when called on a string ? // boolean
  // How does the includes() method handle case sensitivity in JavaScript ? 
  // ...method will consider the exact casing (uppercase or lowercase) of the characters. If the case does not match exactly, includes() will return false.
  
  // Can includes() be used with arrays in JavaScript ? Explain.
  // If you use includes() to check for a substring at a specific index, is there any way to customize the search ?

  mainMethod1() {
    const arr = [1, 2, 3, 4, 5];
    const is4Includeafter4Index = arr.includes(4, 4); // false cause searching will starts from 4 index
    const is4Include = arr.includes(4); // true cause searching will starts from 0 index
    console.log('is4Includeafter4Index', is4Includeafter4Index);
    console.log('is4Include', is4Include);
  }

  // What will str.includes('sub') return when the string is 'substring' ? // true
  getVal() {
    const str = 'substring';
    console.log(str.includes('sub'));
  }

  // Edge Cases:
  // What will str.includes(' ') return when the string is 'Hello World' ?
  // How would you use includes() to check if a string contains a specific word or phrase ?
  retrunValue() {
    const str = 'Hello World';
    console.log(str.includes(' ')); // true
  }

  // How does includes() behave when the substring is an empty string ?
  includeBehaviour() {
    const emptyString = '';
    console.log(emptyString.includes('dadda'));
  }

  // What happens if you use includes() on a string with NaN or undefined as the argument ?
  // What will str.includes(undefined) return when str = 'Hello World' ?
  // What is the behavior of includes() when applied to strings that are null or undefined ? How does JavaScript handle this ?

  withUndefinedOrNaN() {
    const str = 'This is dadda\'s string';
    // console.log('dadda string', str.includes(NaN)); // Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
    // console.log('dadda string', str.includes(undefined)); // Argument of type 'undefined' is not assignable to parameter of type 'string'.ts(2345)
  }
  
  // Practical Use:
  // How would you check if a string starts or ends with a certain substring using includes() ?
  checkIfString() {
    const str = 'Hello World';
    // Check if starts with 'Hello'
    const startsWithHello = str.substring(0, 5).includes('Hello'); // true
    // Check if starts with 'World'
    const startsWithWorld = str.substring(0, 5).includes('World'); // false

    // Check if starts with 'Hello'
    const endsWithHello = str.substring(-5).includes('Hello'); // false
    // Check if starts with 'World'
    const endsWithWorld = str.substring(-5).includes('World'); // true
  }


  // Performance :
  // Is includes() an efficient way to check if a string contains a substring ? Are there any performance concerns with large strings or frequent usage ?
  // ...efficient way to check if a string contains a substring in JavaScript, but there are some performance considerations depending on the size of the string and the frequency of the operation.

  // How does includes() compare to indexOf() in terms of performance ?
  includesWithIndexOf() {
    const str = "Hello, World!";

    // Using includes()
    console.time("includes");
    console.log(str.includes("World"));  // true
    console.timeEnd("includes");

    // Using indexOf()
    console.time("indexOf");
    console.log(str.indexOf("World") !== -1);  // true
    console.timeEnd("indexOf");
  }

  // includes() with Regular Expressions:
  // Can includes() be used with regular expressions ? Why or why not ?
  // How would you achieve case -insensitive substring matching using includes() ?
  caseInSensitive() {
    const str = "Hello, World!";
    const searchTerm = "world";
    // Convert both the string and search term to lowercase for case-insensitive comparison
    const isPresent = str.toLowerCase().includes(searchTerm.toLowerCase());
    console.log(isPresent);  // Output: true
  }

  // How would you check if a string contains a pattern or substring using includes() without worrying about exact character match(e.g., ignoring spaces or punctuation) ?
  checkWith() {
    const str = "Hello,   World! How are you?";
    const searchTerm = "world how";
    // Use a regular expression to remove non-alphanumeric characters (excluding spaces)
    const cleanString = str.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();
    const cleanSearchTerm = searchTerm.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();
    // Check if the cleaned string contains the cleaned pattern
    const isPresent = cleanString.includes(cleanSearchTerm);
    console.log(isPresent);  // Output: true
  }

  // Real - World Applications:
  // How can includes() be used to validate user input, like checking for the presence of a forbidden word or phrase in a string ? // XXXX
  // In what scenarios would you prefer to use includes() over other string methods like indexOf() or match() ?
  // ...1. When You Need a Simple True/False Result
  // ...2. When You Don’t Need to Know the Index
  // ...3. When You Want to Check for Case-Insensitive Matching
  // ...4. When Checking for the Existence of a Pattern (Not the Exact Position)
  // ...5. When You Want to Check for a Substring in Arrays (Not Just Strings)
  // ...6. When You Don’t Need a Regular Expression
  // ...7. When You Want More Readable and Concise Code

  // How would you use includes() to check if a URL contains certain query parameters or path segments ? // XXXX
  // Advanced :
  // What would be the result of calling includes() on a string and an object(e.g., myString.includes({})) ?
  checkObject() {
    const myString = 'Hellow Dadda';
    // console.log(myString.includes({})) // Argument of type '{}' is not assignable to parameter of type 'string'.ts(2345)
  }

  // How does includes() differ from startsWith() and endsWith() ? When would you prefer to use each of these methods ?

}
