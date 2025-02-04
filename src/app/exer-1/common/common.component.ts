import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-common',
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss'
})
export class CommonComponent implements OnInit {
  ngOnInit(): void {
    // console.log(this.isPrime(31));
    // this.reverseString();
    // console.log(this.isPalindrome('madam'));
    // console.log(this.isPalindrome('dadda'));
    // console.log(this.getVowelsCount('This is dummy string to check count of vowels'))
    // console.log(this.getLongestWord('This is dummssssssssssssssssssssssssy string tossssssssssssssssssss check count of vowels'))
    // this.removeDuplicatesFromArray();
    // this.calculateSum();
    // console.log(this.isAnagrams('hello', 'llohe'));
    // console.log(this.getFactorial(6));
    console.log(this.getGCD(60, 90));
  }

  // 1. Write a function to check if a number is prime.
  isPrime(num: number): boolean {
    if (num >= 1) {
      if (num === 2) {
        return true;
      }
      if (num % 2 === 0) {
        return false;
      } else {
        for (let i = 3; i * i < num; i+=2) {
          if (num % i === 0) {
            return false
          }
        }
        return true;
      }
    } else {
      return false
    }
  }

  // 2. Write a function to reverse a string.
  reverseString(): void {
    const testString: string = 'This is test string which is to be reversed.'
    const reversedString = testString.split('').reverse().join('');
    console.log('reversedString', reversedString);
  }

  // 3. Write a function to check if a string is a palindrome.
  isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
  }

  // 4. Write a function to count the number of vowels in a string.
  getVowelsCount(str: string): number {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    str.toLowerCase().split('').forEach(e => {
      if (vowels.includes(e)) {
        vowelCount += 1;
      }
    });
    return vowelCount;
  }

  // 5. Write a function to find the longest word in a string.
  getLongestWord(str: string): string {
    let longestWord: string = '';
    str.split(' ').forEach(e => {
      if (e.length > longestWord.length) {
        longestWord = e;
      }
    })
    return longestWord;
  }

  // 6. Write a function to remove duplicate elements from an array.
  removeDuplicatesFromArray(): void {
    const duplicateArray: number[] = [1, 2, 3, 4, 5, 6, 22, 7, 8, 6, 22, 5, 4, 3, 33, 3, 12, 12, 341, 3, 234, 63, 573, 567, 45, 13, 426, 45, 45];
    const finalArray = duplicateArray.filter((e, i, self) => i === self.indexOf(e));
    console.log('finalArray', finalArray);
  }

  // 7. Write a function to sum all the numbers in an array.
  calculateSum(): void {
    const testArray: number[] = [1, 2, 3, 4, 5, 6, 22]; // 43;
    const sum = testArray.reduce((accu, currVal) => {
      accu = accu + currVal;
      return accu
    }, 0)
    console.log('sumsumsumsumsumsum', sum);
  }
  
  // 8. Write a function to check if two strings are anagrams.
  isAnagrams(str1: string, str2: string): boolean {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
  }
  
  // 9. Write a function to find the factorial of a number.
  getFactorial(num: number): number {
    let factorial: number = 1;
    if (num > 0) {
      if (num === 1) return factorial;
      if (num === 2) return factorial * 2;
      return num * this.getFactorial(num - 1);
    }
    return factorial;
  }
  
  // 10. Write a function to find the greatest common divisor of two numbers.
  // it is Using the Euclidean Algorithm
  // Divide 60 by 36:
  // 60 ÷ 36 = 1 remainder 24.
  // (So, we replace 60 with 36, and 36 with 24).
  // Now, divide 36 by 24:
  // 36 ÷ 24 = 1 remainder 12.
  // (Replace 36 with 24, and 24 with 12).
  // Now, divide 24 by 12:
  // 24 ÷ 12 = 2 remainder 0.
  // Since the remainder is 0, the GCD is the last non - zero remainder, which is 12.
  // So, the GCD of 36 and 60 is 12.
  getGCD(a: number, b: number): number {
    while (b !== 0) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }
    return a;
  }



}