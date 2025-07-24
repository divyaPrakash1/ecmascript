import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-js-padding',
  templateUrl: './js-padding.component.html',
  styleUrl: './js-padding.component.scss'
})
export class JsPaddingComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.example1();
  }


  // What is the purpose of string padding in JavaScript ?
  // ...String padding in JavaScript is used to add extra characters (such as spaces or specific symbols) to the start or end of a string, ensuring that the string reaches a specific length.
  // Can you explain the difference between padStart() and padEnd() in JavaScript ?
  // How do you pad a string with a custom character in JavaScript ?
  // What happens if the padding length is smaller than the string’s original length in JavaScript ?
  // Can padStart() and padEnd() methods handle padding for negative lengths ? If so, how ?
  // How do you pad a string to a fixed length without truncating the original string in JavaScript ?
  // What will happen if you pass undefined or null as the padding string to padStart() or padEnd() ?
  // How would you pad a string to a length of 10 with zeros at the start and the end ?
  example1() {
    let num = 11;
    console.log(num.toString().padStart(6, '0')) // 000011 (6 means final string will be 6 length with 0)
    let str = 'Hello';
    console.log(str.padEnd(7, 'p')); // Hellopp
    console.log(str.padEnd(2, 'p')); // Hello // in this case string will remain same if padding length is smaller than given string
    console.log(str.padStart(-5, '0')); // Hello
    console.log(str.padEnd(-5, '0')); // Hello
    // console.log(null.padEnd(-5, '0')); // The value 'null' cannot be used here.ts(18050)
    // console.log(undefined.padEnd(-5, '0')); // The value 'undefined' cannot be used here.ts(18050)
    console.log(str.padStart(6, '0').padEnd(10, '0')); // 0Hello0000
  }
  
  // Can you pad a string in JavaScript to an exact length, even if it's longer than the target length?
  // ...No, the padStart() and padEnd() methods in JavaScript cannot shrink or truncate a string
  // How would you handle edge cases, such as padding a string that already meets the desired length ?
  example2() {
    let text = "HelloWorld";
    let paddedText = text.padStart(5, '0');  // Target length is less than the string's current length

    console.log(paddedText); // Output: "HelloWorld" (no change, as the string is already longer than the target length)

  }

}
