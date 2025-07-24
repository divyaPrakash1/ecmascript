import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-string-trim-end',
  templateUrl: './string-trim-end.component.html',
  styleUrl: './string-trim-end.component.scss'
})
export class StringTrimEndComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example1();
    // this.example2();
    // this.example3();
    // this.example4();
    this.example7();
  }


  // What does the String.trimEnd() method do in JavaScript ?
  // ...Remove whitespaces, newline, tabs from the end of the string
  example1() {
    const str = 'This is new string           ';
    console.log('str', str.trimEnd()); // 'This is new string'
  }

  // How does String.trimEnd() differ from String.trimStart() ?
  // ...trimEnd remove space from end while trimStart remove whitespaces from the start of the string
  
  // Can String.trimEnd() remove trailing spaces as well as leading spaces ?
  // ...No, only trailing spaces will remove
  example2() {
    const str = '     This is new string           ';
    console.log('str', str.trimEnd()); // '     This is new string'
  }

  // Is String.trimEnd() a mutating method ?
  // ...No, it just remove whitespace

  // How does String.trimEnd() behave when used with strings containing special characters(e.g., spaces, tabs) at the end ?
  // Can String.trimEnd() be used to trim non - whitespace characters, like tabs or newlines, from the end of a string ?
  // ...Yes, 
  example3() {
    const str = '      This is new string \t  \n';
    console.log('str', str.trimEnd()); // '     This is new string'
  }

  // Which environments support the String.trimEnd() method in JavaScript ?
  // ...Node.js (version 12+)

  // Does String.trimEnd() modify the original string or return a new string ?
  // What would happen if String.trimEnd() is called on a string that has no trailing whitespace ?
  // ...It will retrun original string as it is
  example4() {
    const str = 'This is test string';
    console.log(str.trimEnd()); // 'This is test string'
  }

  // How would you achieve the same result as String.trimEnd() in earlier versions of JavaScript(pre - ES2019) ?
  example5() {
    const str = 'Hello, World!   ';
    const trimmedStr = str.replace(/\s+$/, '');
    console.log(trimmedStr); // 'Hello, World!'
  }

  // Can String.trimEnd() be chained with other string methods ? Provide an example.
  example6() {
    const str = 'This is test string';
    console.log(str.trimEnd().includes('string')); // true
  }

  // Is String.trimEnd() capable of trimming whitespace at the beginning of the string ?
  // ...No 

  // Can String.trimEnd() be used in combination with String.trimStart() to trim both ends of the string ?
  example7() {
    const str = '   This is test string     ';
    console.log(str.trimStart().trimEnd()); // 'This is test string'
  }

  // Can you use String.trimEnd() on objects other than strings, such as numbers or arrays ?
  // ...No

}
