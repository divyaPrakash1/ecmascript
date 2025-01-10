import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-char-at',
  templateUrl: './char-at.component.html',
  styleUrl: './char-at.component.scss'
})
export class CharAtComponent implements OnInit {

  testString: string = 'The quick brown fox jumps over the lazy dog multiple times, wondering why the dog never responds. Meanwhile, the sun shines brightly, casting shadows on the ground. Birds chirp in the distance, adding a melodic backdrop to the otherwise quiet meadow. Nearby, a stream flows gently, its water sparkling under the golden rays. The fox pauses, sniffing the air for signs of prey, but none appear.'
  constructor() {

  }

  ngOnInit(): void {
    this.getLetter();
    this.reverseStringUsingCharAt();
    this.firstOccurence();
  }

  getLetter(): void {
    const letterIndexWithRealNumber = this.testString.charAt(89);
    const letterIndexWithFloatingNumber = this.testString.charAt(89.3); // it will also treated as 89
    // const letterIndexWithString = this.testString.charAt('89'); // in 
    // const letterIndexWithNull = this.testString.charAt(null);
    console.log('typeof letterIndexWithRealNumber', typeof (letterIndexWithRealNumber)); // retrun string (in case of the given index is out of scope the it will return "" string);
    console.log('letterIndexWithRealNumber', letterIndexWithRealNumber);
    console.log('typeof letterIndexWithFloatingNumber', typeof (letterIndexWithFloatingNumber));
    console.log('letterIndexWithFloatingNumber', letterIndexWithFloatingNumber);
    // console.log('typeof letterIndexWithString', typeof (letterIndexWithString));
    // console.log('letterIndexWithString', letterIndexWithString);
    // console.log('typeof letterIndexWithNull', typeof (letterIndexWithNull));
    // console.log('letterIndexWithNull', letterIndexWithNull);
  }

  reverseStringUsingCharAt() { // reversed String using charAt method
    let str = 'The quick brown fox jumps over the lazy dog multiple times';
    let reversedStr = '';
    for (let i = str.length-1; i >= 0; i--) {
      reversedStr = reversedStr + str.charAt(i);
    }
    console.log('reversedStr', reversedStr);
  }

  firstOccurence() { // First occurence index of 'i'
    let str = 'The quick brown fox jumps over the lazy dog multiple times';
    let char = 'o';
    let index = null;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === char && index == null) {
        index = i;
        console.log('reversedStr', index);
        return;
      }
    }
  }

//   What does the charAt() method do in JavaScript ?
//   What is the syntax of the charAt() method ?
//   If you call charAt() with an index out of range, what does it return?
//   What is the difference between charAt() and accessing a character using bracket notation ([]) ?
        
//   How would you retrieve the first character of a string using charAt() ?
//   Write a function that uses charAt() to reverse a string.
//   If a string is "hello", what will charAt(1) return?
//   What happens if you use a negative index with charAt() ?
    
//   How does charAt() handle non - integer or non - numeric index values ?
//   Can charAt() be used with Unicode characters ? If so, are there any limitations ?
//   Explain the performance implications of using charAt() in a loop versus other methods like substring().
//   How would you find the first occurrence of a character in a string using charAt() ?
  
//   Is charAt() a mutating method ? Why or why not ?
//   How does charAt() compare to modern JavaScript methods like `String.prototype

}
