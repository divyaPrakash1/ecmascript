import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-multiline-string',
  templateUrl: './multiline-string.component.html',
  styleUrl: './multiline-string.component.scss'
})
export class MultilineStringComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    console.log('sdfsdfdsfSFSDF');
    this.mainMethod();
    let str = 'This is line one \
    This is line two \
    This is line three'

    const multiline = `
    This is line one.
    This is line two.
        This is line three.
`;
    
    console.log(this.getSingleLine(str));
    console.log(this.getSingleLine(multiline));
  }

  mainMethod() {
    let str = 'Hello \
       Kashish';
    console.log('string line 1', str.trim());
    
    console.log('string line 2', 'Hello' + " " +
      'Kashish');
    
    console.log('It\'s good');
  }

  getSingleLine(str: string): string { //  Write a function that takes a multiline string and returns it as a single line with spaces replacing newlines.
    return str
      .split('\n')
      .map(line => line.trim())
      .join(' ')
  }


//   What is a multiline string in JavaScript, and why is it used ?
//   How can you create a multiline string using template literals in JavaScript ? ``
//   Before ES6, how were multiline strings handled in JavaScript ?  '' + '' + ''
//   Write a simple example of a multiline string using backticks (`). ``

//   What are the key differences between template literals and traditional string concatenation when creating multiline strings?
//   Can you embed variables or expressions in a multiline string? Provide an example.
//   How do multiline strings handle whitespace and line breaks when displayed in the browser console?
//   How can you preserve indentation in a multiline string while maintaining proper formatting in the output? .trim();

//   How can you include special characters (e.g., backticks, quotes) in a multiline string without breaking it?  // const singleQuote = 'It\'s a great day!';, const doubleQuote = "He said, \"Hello, world!\"";, const backslash = "This is a backslash: \\"; means everything written after \ one char will be ignored
//   Is there a performance difference between using a single string with \n characters versus template literals for multiline strings? Why or why not?
//   Write a function that takes a multiline string and returns it as a single line with spaces replacing newlines.
//   How does JavaScript handle multiline strings in JSON files or when using JSON.stringify()? // "This is first line \n this is second line \n this is third line."
//   Discuss how multiline strings work with internationalization (i18n) libraries. What are some best practices for maintaining multiline strings in translated content?

}
