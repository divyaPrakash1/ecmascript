import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-string-match-all',
  templateUrl: './string-match-all.component.html',
  styleUrl: './string-match-all.component.scss'
})
export class StringMatchAllComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example1();
    this.example3();
  }

  // What is the purpose of the matchAll() method in JavaScript ?
  // ...str.matchAll(regexp);
  // ...regexp: The regular expression to be matched against the string, which must include the global flag (g) for matchAll() to function properly.
  // How does matchAll() differ from String.prototype.match() ?
  // What does the iterator returned by matchAll() contain ?
  // How can you use matchAll() to find all occurrences of a regular expression in a string ?
  // Explain the significance of the global flag(g) when using matchAll().
  // What will happen if matchAll() is used without a regular expression that includes the global flag ?
  // How can you loop over the results returned by matchAll() ?
  // What will be the output of matchAll() if no matches are found in the string ?
  example1() {
    const str = 'abc123abc456';
    const regex = /abc(\d+)/g;
    const matchesAll = str.matchAll(regex);
    // Iterating over matches
    for (const match of matchesAll) {
      console.log(match);
    }
    // ['abc123', '123', index: 0, input: 'abc123abc456', groups: undefined]
    // ['abc456', '456', index: 3, input: 'abc123abc456', groups: undefined ]

    const regex1 = /zxz(\d+)/g;
    const matchesAll1 = str.matchAll(regex1);
    for (const match of matchesAll1) {
      console.log(match); // Nothing will be logged if no match found
    }

    const matches = str.match(regex);
    console.log(matches); // ['abc123', 'abc456']

  }

  // Can you use matchAll() with a regular expression that has flags like i(case -insensitive) ?
  example2() {
    const str = "Hello World, hello world!";
    const regex = /hello/gim;  // g = global, i = case-insensitive, m = multiline
    const matches = str.matchAll(regex);
    for (const match of matches) {
      console.log(match);
    }
  }

  // How does matchAll() handle capturing groups in regular expressions ?
  example3() {
    const str = "John: 30, Jane: 35, June: 22";
    const regex = /(?<name>\w+): (?<age>\d+)/g;  // Named capturing groups
    const matches = str.matchAll(regex);
    for (const match of matches) {
      console.log(match);
    }
  }
  
  // How does matchAll() behave when used with non - global regular expressions ?
  // What are the limitations of String.prototype.matchAll() ?
  // How would you handle situations where the matches found by matchAll() contain extra whitespace or unwanted characters ?
  // Can you combine matchAll() with other array methods(like map(), filter(), or reduce()) to process the matches ?
  // How do you use matchAll() to find all matches of a regular expression in a string and extract specific parts of each match ?


}
