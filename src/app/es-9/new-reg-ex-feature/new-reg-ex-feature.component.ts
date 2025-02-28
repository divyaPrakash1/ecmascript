import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-new-reg-ex-feature',
  templateUrl: './new-reg-ex-feature.component.html',
  styleUrl: './new-reg-ex-feature.component.scss'
})
export class NewRegExFeatureComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }

  // u Flag: Enables Unicode mode for handling extended characters.
  // y Flag: Enables sticky mode for matching from a specific position.
  // Lookbehind Assertions: Allows matching patterns based on preceding characters((?<=...) and(?<!...)).
  // Named Capture Groups: Capture groups can be named for easier access((? <name>...)).
  // dotAll Flag(s flag): Allows the dot(.) to match newlines.
  // replaceAll() Method: Replaces all occurrences of a pattern in a string.
  // matchAll() Method: Returns an iterator for all matches, with access to capture groups.
  // Unicode Property Escapes: Allows matching characters based on their Unicode properties(e.g., \p{ Script=Greek }).

  // Unicode Mode
  example1() {
    const regex = /😊/u;
    const testStr = 'I love emojis 😊!';
    console.log(regex.test(testStr)); // true
  }

  // y Flag (Sticky Mode)
  // ...The y flag, introduced in ES6, enables sticky mode. This mode makes the regular expression match only at the current position in the string, rather than searching globally.
  // ...In sticky mode, the search starts at the last match position and matches only if it starts at that position.
  example2() {
    const regex = /abc/y;
    const str = 'abcabc';
    console.log(regex.exec(str)); // [ 'abc', index: 0, input: 'abcabc', groups: undefined ]
    console.log(regex.exec(str)); // null (because we're already at index 3, no match starts there)
  }

  // Lookbehind Assertions (Positive and Negative)
  // ...Positive lookbehind: (?<=...) checks if there's a match after a certain pattern.
  // ...Negative lookbehind: (? <!...) checks if there is no match after a certain pattern.
  example3() {
    const pRegex = /(?<=@)\w+/;
    const pStr = 'user@example.com';
    console.log(pStr.match(pRegex)); // [ 'example' ]

    const nRegex = /(?<!@)\w+/;
    const nStr = 'user@example.com';
    console.log(nStr.match(nRegex)); // [ 'user', 'com' ]
  }

  // Named Capture Groups
  // ...named capture groups allow you to name the captured portions of the regex for easier reference. Instead of referring to the groups by index, you can now use the group names directly.
  example4() {
    const regex = /(?<firstName>\w+) (?<lastName>\w+)/;
    const str = 'John Doe';
    const match: any = str.match(regex);
    console.log(match.groups.firstName); // 'John'
    console.log(match.groups.lastName);  // 'Doe'
  }

  // dotAll Flag (s Flag)
  // ...The s flag (introduced in ES2018) allows the . (dot) to match newlines. Normally, the dot (.) does not match line breaks, but with the s flag, it matches any character, including newlines.
  example5() {
    const regex = /a.b/s;
    const str = 'a\nb';
    console.log(regex.test(str)); // true (dot matches newline with `s` flag)
  }

  // replaceAll() Method
  // ...The replaceAll() method, introduced in ES2021, allows you to replace all occurrences of a pattern in a string, even if you don't use the global (g) flag in the regular expression.
  example6() {
    const str = 'hello world hello';
    const newStr = str.replaceAll('hello', 'hi');
    console.log(newStr); // 'hi world hi'
  }

  // matchAll() Method
  // ...The matchAll() method (introduced in ES2020) returns an iterator of all matches for a given pattern. This is useful when you need to process multiple matches with access to the match's capture groups.
  example7() {
    const regex = /\d+/g;
    const str = 'There are 123 apples and 456 oranges.';
    const matches = str.matchAll(regex);

    for (const match of matches) {
      console.log(match[0]); // '123', '456'
    }

  }

  // Unicode Property Escapes (ES2018)
  // ...Unicode property escapes allow you to match characters based on their Unicode properties. This provides a more semantic and readable way to match characters in a regular expression, rather than relying on character classes or manually specifying ranges.
  example8() {
    const regex = /\p{Script=Greek}/gu;
    const str = 'αβγδ'; // Greek letters
    console.log(regex.test(str)); // true
    // The \p{Script=Greek} syntax matches any character with the Unicode script property set to Greek.
  }






}
