import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-common-1',
  templateUrl: './common-1.component.html',
  styleUrl: './common-1.component.scss'
})
export class Common1Component implements OnInit {
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
    // console.log(this.getGCD(60, 90));
    // this.mergeTwoArray();
    // this.findMissingNumber();
    // console.log(this.binarySearch([1,2,3,4,5,6,7,8,9,10], 6));

    // const arr = [1, [2, [3, 4, [5, 6]]], 7, 8];
    // console.log(this.flattenedArray(arr));

    // const arr1 = [1, 2, 3, 4, 5, 6, 7];
    // const k = 3;
    // console.log(this.rotateArray(arr1, 3));

    // this.getMostFrequent();

    // console.log(this.isPerfectSquare(9));
    // this.getInterSection();
    // this.getUnion();
    // this.countVowels();
    // this.removeFalsyValues();
    // console.log(this.checkAnagramsStr('dadda', 'ddsada'));
    // console.log(this.getCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
    // console.log(this.getCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
    // console.log(this.getCommonPrefix(["interspecies", "interstellar", "interstate"])); // Output: "inter"


    // Example usage:
    // console.log(this.hasUniqueCharacters("abcdef")); // Output: true
    // console.log(this.hasUniqueCharacters("hello"));   // Output: false
    // console.log(this.hasUniqueCharacters("12345"));   // Output: true
    // console.log(this.hasUniqueCharacters("aabbcc"));  // Output: false

    // this.convertLowerCaseWithoutLowercase();
    this.sortArray();
    console.log(this.factorils(8));
    this.sortArray();
    this.findFirstNonRepeatingCharector();
    console.log(this.fibonaaci(13));
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

  // 11. Write a function to merge two sorted arrays.
  mergeTwoArray() {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [6, 7, 8, 9, 10];
    const mergedArray = array1.concat(array2);
    console.log('mergedArray', mergedArray);
  }

  // 12. Write a function to find the missing number in an array of numbers 1 to n.
  findMissingNumber() {
    const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21];
    let sortedArray = tempArray.sort((a, b) => a - b);
    console.log(sortedArray)
    let missingNumbers: number[] = [];
    for (let i = sortedArray[0]; i <= sortedArray[sortedArray.length-1]; i++) {
      if (!sortedArray.includes(i)) missingNumbers.push(i);
    }
    console.log(missingNumbers);
  }

  // 13. Write a function to implement binary search.
  binarySearch(arr: number[], target: number): number {
    let left = arr[0];
    let right = arr[arr.length - 1];
    while (left <= right) {
      const mid = Math.floor((left + right) / 2); // Find the middle index
      if (arr[mid] === target) {
        return mid;// Target found, return the index
      } else if (arr[mid] > target) {
        left = mid - 1; // Move the right pointer to the left of mid
      } else {
        right = mid + 1; // Move the left pointer to the right of mid
      }
    }
    return -1; // Target not found
  }
  
  // 14. Write a function to flatten an array.
  flattenedArray(arra: any[]): any[] {
    let resultArray: any[] = [];
    arra.forEach(item => {
      if (Array.isArray(item)) {
        resultArray = resultArray.concat(this.flattenedArray(item))
      } else {
        resultArray.push(item);
      }
    });
    return resultArray
  }
  
  // 15. Write a function to find the largest sum of non - adjacent numbers in an array. // XXXX
  
  
  // 16. Write a function to check if a number is a power of two.
  checkPowerOfTwo(num: number): boolean {
    if (num < 0) return false;   // If n is less than or equal to 0, it's not a power of two
    while (num % 2 === 0) {   // Loop while n is divisible by 2
      num = num / 2;
    }
    return num === 1;   // If n becomes 1, it was a power of two
  }
  
  // 17. Write a function to rotate an array by k positions.
  rotateArray(arr: any[], k: number) {
    const n = arr.length;
    // Handle the case where k is larger than the array length
    k = k % n;

    // Step 1: Reverse the whole array
    this.reverse(arr, 0, n - 1);

    // // Step 2: Reverse the first k elements
    // this.reverse(arr, 0, k - 1);

    // // Step 3: Reverse the remaining n-k elements
    // this.reverse(arr, k, n - 1);
    return arr;
  }

  // Helper function to reverse a portion of the array
  reverse(arr: { [x: string]: any; }, start: number, end: number) {
    while (start < end) {
      // Swap elements at the start and end indices
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
    
  // 18. Write a function to implement a deep clone of an object.
  deepObject(obj: Object) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  // 19. Write a function to find the most frequent element in an array.
  getMostFrequent() {
    const arr = [1, 2, 3, 3, 2, 2, 4, 5, 3, 2];
    const occurrence: any = {};
    arr.forEach((e) => {
      occurrence[e] = (occurrence[e] || 0) + 1;
    });

    let mostFrequent: any = arr[0];
    let maxFrequency = occurrence[mostFrequent];

    for (let element in occurrence) {
      if (occurrence[element] > maxFrequency) {
        maxFrequency = occurrence[element];
        mostFrequent = element;
      }
    }
    console.log('mostFrequent', mostFrequent);

  }
  
  // 20. Write a function to check if a number is a perfect square.
  isPerfectSquare(num: number): boolean {
    if (num < 0) return false;
    const sqrt = Math.sqrt(num); // get square
    return sqrt === Math.floor(sqrt) // compute sqrt is perfect integer
  }

  // 21. Write a function to find the intersection of two arrays.
  getInterSection() {
    const arr1 = [1, 2, 2, 3, 4];
    const arr2 = [2, 2, 4, 6];
    let commonElements: number[] = [];
    arr1.forEach(e => {
      if (arr2.includes(e)) {
        commonElements.push(e);
      }
    });
    commonElements = commonElements.filter((e: number, i: number, self: number[]) => self.indexOf(e) === i);
    console.log('commonElements', commonElements);
  }

  // 22. Write a function to find the union of two arrays.
  getUnion() {
    const arr1 = [1, 2, 2, 3, 4];
    const arr2 = [2, 2, 4, 6];
    let commonElements: number[] = [...arr1, ...arr2];
    commonElements = commonElements.filter((e: number, i: number, self: number[]) => self.indexOf(e) === i);
    console.log('commonElements', commonElements);
  }

  // 23. Write a function to count the number of vowels in a string.
  countVowels() {
    const testString: string = 'This is test string to count number of vowels.'; // 12 
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    testString.split('').forEach((e, i) => {
      if (vowels.includes(e)) {
        count += 1;
      }
    });
    console.log('vowels count is - ', count);
  }

  // 24. Write a function to remove all falsy values from an array.
  removeFalsyValues() {
    const values = [false, 0, "", null, undefined, NaN, -1, "Hello", []];
    const properValues = values.filter(e => !!e);
    console.log('properValues', properValues);
  }

  // 25. Write a function to check if a string is an anagram of another string.
  checkAnagramsStr(str1: string, str2: string) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
  }

  // 26. Write a function to reverse a string.
  reverseStrings(str1: string) {
    return str1.split('').reverse().join('');
  }
  
  // 27. Write a function to check if a string is a palindrome.
  isPalindromes(str1: string) {
    return str1.split('').reverse().join('') === str1;
  }
  
  // 28. Write a function to find the longest palindrome in a string. // XXXX
  
  // 29. Write a function to find the longest common prefix among an array of strings.
  getCommonPrefix(arr: string[]): string |undefined {
    if (!arr.length) return '';
    // Sort the array of strings
    arr.sort();
    // Get the first and last string in the sorted array
    let first = arr[0];
    let last = arr[arr.length - 1];
    let i = 0;
    while (i < first.length && i < last.length && first[i] === last[i]) {
      i++;
    }  
    return first.slice(0, i);
  }
  
  // 30. Write a function to check if a string contains only unique characters.
  hasUniqueCharacters(str: string): boolean {
    let strChar: string[] = [];
    let isUnique: boolean = true;
    for (let i = 0; i < str.length; i++) {
      if (!strChar.includes(str[i])) {
        strChar.push(str[i]);
      } else {
        isUnique = false;
      }
    }
    return isUnique;
  }

  // 31. Write a function to convert a string to lowercase without using toLowerCase().
  convertLowerCaseWithoutLowercase() {
    const tempStr: string = 'THIS IS THE STRING TO CONVERT LOWERCASE WITHOUT USING LOWERCASE';
    let strArr = tempStr.split('');
    let lowerCaseStr = '';
    strArr.forEach(e => lowerCaseStr = lowerCaseStr + (e != ' ' ? (String.fromCharCode(e.charCodeAt(0) + 32)) : ' '));
    console.log('asdfasdf', lowerCaseStr);
  }
  
  // 32. Write a function to sort an array of numbers in ascending order.
  sortArray() {
    const tempArray = [1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 3, 2, 2];
    for (let i = 0; i < tempArray.length; i++) {
      for (let j = 0; j < tempArray.length; j++) {
        if (tempArray[i] < tempArray[j]) {
          let temp = tempArray[i];
          tempArray[i] = tempArray[j];
          tempArray[j] = temp;
        }
      }
    }
    console.log('sortedArray', tempArray);
  }
  
  // 33. Write a function to implement the bubble sort algorithm. // XXXX
  
  // 34. Write a function to implement the insertion sort algorithm. // XXXX
  
  // 35. Write a function to implement the selection sort algorithm. // XXXX
  
  // 36. Write a function to implement the merge sort algorithm. // XXXX
  
  // 37. Write a function to implement the quicksort algorithm. // XXXX
  
  // 38. Write a function to find the first non - repeating character in a string.
  findFirstNonRepeatingCharector() {
    let str = 'level';
    let charCount: any = {}
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1; 
    }
    let nonRepeatingChar: string = '';
    for (let c of str) {
      if (charCount[c] === 1) {
        nonRepeatingChar = c;
        console.log('charCount[c]', nonRepeatingChar);
        return;
      }
    }
  }

  // 39. Write a function to calculate the factorial of a number recursively.
  factorils(n: number): number {
    if (n === 0 || n === 1) return 1
    else return n * this.factorils(n - 1);
  }

  // 40. Write a function to generate the Fibonacci sequence up to n numbers.
  fibonaaci(n: number): number[] {
    if (n === 0) return [0];
    let libSeries = [0, 1];
    if (n === 1) return libSeries;
    while (n > 1) {
      libSeries.push(libSeries[libSeries.length - 1] + libSeries[libSeries.length - 2]);
      n--;
    }
    return libSeries
  }




}