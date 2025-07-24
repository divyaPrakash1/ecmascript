import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-str-replace-all',
  templateUrl: './str-replace-all.component.html',
  styleUrl: './str-replace-all.component.scss'
})
export class StrReplaceAllComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example1();
    this.example6();
  }


  // What does the replaceAll() method do in JavaScript ?
  // ...method in JavaScript replaces all occurrences of a specified substring or regex pattern within a string with a given replacement.
  // ...string.replaceAll(searchValue, replaceValue)
  // How does replaceAll() differ from replace() ?
  // What happens if the substring to be replaced does not exist in the string ?
  // How does replaceAll() behave with case -sensitive replacements ?
  example1() {
    let text = "apple banana apple orange apple";
    let replacedText = text.replaceAll('apple', 'grapes'); // all matched text will be replaced
    let mismatchedText = text.replaceAll('kiwi', 'grapes'); // nothing will be replaced as searched string is not available in original str
    let caseSensitive = text.replaceAll('Apple', 'grapes'); // nothing will be replaced as Apple is case sensitive is not available in original str
    console.log("replacedText", replacedText);
    console.log("mismatchedText", mismatchedText); // apple banana apple orange apple
    console.log("caseSensitive", caseSensitive); // apple banana apple orange apple
    let replacedText1 = text.replace('apple', 'grapes'); // only first matched text will be replaced
    console.log("replacedText", replacedText1);
  }
  
  // Can replaceAll() work with both strings and regular expressions ? Explain with an example.
  example2() {
    let sentence = "Hello world! Hello everyone!";
    let updated = sentence.replaceAll(/hello/gi, "Hi"); // 'g' flag ensures all matches are replaced, 'i' makes it case-insensitive
    console.log(updated); // Output: "Hi world! Hi everyone!"
  }
  
  // How can you perform a case -insensitive replacement using replaceAll() ?
  example3() {
    let text = "Hello World! hello everyone. HELLO there!";
    let newText = text.replaceAll(/hello/gi, "Hi");
    console.log(newText); // Output: "Hi World! Hi everyone. Hi there!"
  }
  
  // What will happen if you pass a regular expression without the global(g) flag to replaceAll() ?
  // ...regular expression to replaceAll() without the global (g) flag, it will throw a TypeError.
  example4() {
    let text = "apple apple apple";
    let newText = text.replaceAll(/apple/, "banana"); // Missing 'g' flag
    console.log(newText);
  }
  
  // How does replaceAll() handle special characters in the replacement string ?
  // ...When using replaceAll(), special characters like $&, $1, $2, etc., have special meanings in the replacement string. These are known as replacement patterns and can be used for inserting matched substrings.
  // ...$& Inserts the entire matched substring
  // ...$`	Inserts the portion of the string before the match
  // ...$'	Inserts the portion of the string after the match
  // ...$n	Inserts capturing group n from the regex
  
  example5() {
    let text = "Hello World";
    let newText = text.replaceAll("World", "Mr. $&!");
    console.log(newText); // Hello Mr. World! ($& is replaced with "World".)

    let text1 = "abc 123 xyz";
    let newText1 = text1.replaceAll(/\d+/g, "($')");
    console.log(newText1); // abc ( xyz) xyz  .... $' inserts the text after the matched numbers.

    let text2 = "Price: $10";
    let newText2 = text2.replaceAll("$", "\\$");
    console.log(newText2); // Price: \$10   .... The dollar sign is now treated as a literal.
  }
  
  // Can replaceAll() be used with a function as the replacement argument ? Provide an example.
  example6() {
    const text = "apple banana apple orange apple";
    const result = text.replaceAll('apple', (match) => match.toUpperCase());
    console.log('result', result);
  }

  // What are the alternatives to replaceAll() in older JavaScript versions that don’t support it ? // ...For Loop
  
  // Does replaceAll() modify the original string or return a new string ? // ...return new string
  
  // How does replaceAll() handle escape sequences like \n, \t, etc.?
  
  // Can you use replaceAll() to remove all occurrences of a specific character in a string ?
  
  // How can replaceAll() be used for formatting a template string dynamically ?
  
  // Is replaceAll() available in all JavaScript environments ? How can you check for browser compatibility ?

}
