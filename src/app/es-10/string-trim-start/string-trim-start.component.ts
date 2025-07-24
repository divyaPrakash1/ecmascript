import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-string-trim-start',
  templateUrl: './string-trim-start.component.html',
  styleUrl: './string-trim-start.component.scss'
})
export class StringTrimStartComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.example1();
    this.example4();
  }

  // What does the String.trimStart() method do in JavaScript ?
  // ...removes whitespace (spaces, tabs, newlines, etc.) from the beginning (start) of a string.
  example1() {
    const str = ' This is new string.'
    console.log(str.trimStart()); // This is new string.
  }

  // How does String.trimStart() differ from String.trim() ?
  // ...trimStart() remove whitespaces only from the beginning/leading while trim remove from both side (leading and trailling)
  example2() {
    const str = ' This is new string. '
    console.log(str.trimStart()); // 'This is new string. ' // (leading spaces removed)
    console.log(str.trim()); // 'This is new string.' // (both leading and trailing spaces removed)
  }

  // Can String.trimStart() remove trailing spaces as well as leading spaces ?
  // ...No only leading space(tab, whitespace, newlines)
  
  // Is String.trimStart() a mutating method ?
  // ...No, String.trimStart() is not a mutating method.
  // ...In JavaScript, strings are immutable, which means that methods like trimStart() do not modify the original string.

  // Which environments support the String.trimStart() method in JavaScript ? 
  // ...ES-10

  // What would happen if String.trimStart() is called on a string that has no leading whitespace ? 
  // it will retrun same string
  
  // How would you achieve the same result as String.trimStart() in earlier versions of JavaScript(pre - ES2019) ?
  example3() {
    const str = '   Hello, World!';
    const trimmedStr = str.replace(/^\s+/, '');
    console.log(trimmedStr); // 'Hello, World!'
  }

  // Can String.trimStart() be chained with other string methods ? Provide an example.
  example4() {
    const str = '  This is test string'
    const isThisAvailable = str.trimStart().includes('This', 0);
    console.log('isThisAvailable', isThisAvailable);
  }

  // Is String.trimStart() able to trim non - whitespace characters, like tabs or newlines ?
  // ... Yes

  // Does String.trimStart() modify the original string or return a new string ?
  // ... not modify the original string. It returns a new string with the leading whitespace removed, while the original string remains unchanged.

  // Can String.trimStart() be used on objects other than strings, such as numbers or arrays ?
  // ...No

  // How does String.trimStart() behave when used with strings containing special characters(e.g., spaces, tabs) ?
  // ...When String.trimStart() is used with strings containing special characters like spaces, tabs, or newlines, it will remove all leading whitespace characters, which includes:
  // ...Space characters(' ')
  // ...Tab characters('\t')
  // ...Newline characters('\n' and '\r')
  // ...Other whitespace characters like carriage return ('\r'), etc.
  // ...How would you handle trimming spaces from the start of a string without using String.trimStart() ?
  example5() {
    const str = '\t   \n  Hello, World!';
    console.log(str.trimStart()); // 'Hello, World!'
  }
  
  // Can String.trimStart() be used with regular expressions to trim specific characters ?
  // ...No, String.trimStart() cannot directly be used with regular expressions to trim specific characters. It is designed to only remove leading whitespace characters (spaces, tabs, newlines, etc.).

}
