import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-reg-exp',
  templateUrl: './reg-exp.component.html',
  styleUrl: './reg-exp.component.scss'
})
export class RegExpComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {

  }

  // What does the \d metacharacter represent in JavaScript regular expressions?
  example1() {
    const regEx = /\d/;
    console.log(regEx.test('Hello123')); // true (because "123" contains digits)
    console.log(regEx.test('Hello')); // false (no digits in the string)
  }

  // How does \d differ from \D in regular expressions ?
  // ... \d	Matches any digit(0 - 9)[0 - 9]	"123" in "abc123xyz"
  // ... \D	Matches any non - digit character[^ 0 - 9]	"abcXYZ!" in "abc123XYZ!"
  
  // What is the equivalent character class for \d in JavaScript regex ?
  // How can you use \d to match a single digit in a string ? (Provide an example)
  // What will be the output of the following regex: /\d+/g.test("abc123xyz") ?
  // How do you match exactly three consecutive digits using \d in a string ?
  // Can \d be used to match decimal numbers ? Why or why not ?
  // What happens when you use \d with a Unicode flag(u) ?
  // How does \d behave in different locales or Unicode character sets ?
  // What is the difference between /\d / and / [0 - 9] /? Are they always the same ?
  // Why does \d not match non - ASCII numeric digits, such as ١ (Arabic numeral 1)?
  // What are some potential performance pitfalls when using \d in large text processing ?
  // How can you optimize a regex pattern using \d for efficiency ?
  

}
