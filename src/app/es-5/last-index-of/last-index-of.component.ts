import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-last-index-of',
  templateUrl: './last-index-of.component.html',
  styleUrl: './last-index-of.component.scss'
})
export class LastIndexOfComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // this.getLastOccurence();
    // this.getAllOccurence();
    // this.removeLastOccurence();
    // this.checkOccurrenceMoreThanOnce();
    console.log(this.isSymmetric([1, 2, 3, 2, 1])); // true
    console.log(this.isSymmetric([1, 2, 3, 4, 5])); // false
  }



  // What does Array.lastIndexOf() do in JavaScript ?
  // Expected answer: It returns the last index at which a given element can be found in the array, or - 1 if the element is not present.

  // What is the difference between Array.indexOf() and Array.lastIndexOf() ?
  // Expected answer: indexOf() searches from the beginning of the array, while lastIndexOf() searches from the end of the array.

  // What is the return value of Array.lastIndexOf() if the element is not found in the array ?
  // Expected answer: -1.

  // What arguments does Array.lastIndexOf() take ?
  // Expected answer: It takes two arguments: the element to search for and an optional fromIndex to specify where to start searching backward.

  // Write an example of using Array.lastIndexOf() to find the last occurrence of an element in an array.
  getLastOccurence() {
    const arr = [1, 2, 3, 2, 4];
    const lastOccurence = arr.lastIndexOf(2) // 
    console.log('last occurence of 2', lastOccurence)
  }

  //   What will be the output of the following code ? Why ?
  // const arr = [10, 20, 30, 40, 10];
  // console.log(arr.lastIndexOf(10, 2)); // ?
  getResult() {
    const arr = [10, 20, 30, 40, 10];
    console.log(arr.lastIndexOf(10, 2)) // 0 , because the search starts backward from index 2 and finds 10 at index 0.
  }

  // How does Array.lastIndexOf() handle NaN ?
  // Expected answer: lastIndexOf() does not find NaN because it uses strict equality(===), and NaN !== NaN.
  canHandleNaN() {
    const arr = [NaN, 2, 3];
    console.log(arr.lastIndexOf(NaN)); // -1
  }

  // What happens if the optional fromIndex parameter is greater than the length of the array in Array.lastIndexOf() ?
  // Expected answer: The method will behave as if fromIndex is the array’s length minus one, and search will begin from the end.
  ifFromIndexGreaterThan() {
    const arr = [1, 2, 3];
    console.log(arr.lastIndexOf(2, 10)); // 1
  }

  // How does Array.lastIndexOf() behave with negative fromIndex values ?
  // Expected answer: Negative values are treated as an offset from the end of the array
  ifFromIndexIsNegative() {
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.lastIndexOf(4, -2)); // 3
  }

  // Write a function that finds the last occurrence of a specific substring in a string using lastIndexOf().Example:
  getLastOccurenceOfString() {
    const str = "Hello, world! Hello!";
    const lastHello = str.lastIndexOf("Hello");
    console.log(lastHello); // 14
  }


  // How does Array.lastIndexOf() behave with nested arrays or objects ?
  // Expected answer: lastIndexOf() uses strict equality(===), so it compares references for objects and arrays, not their contents.
  getRefForNestedArray() {
    const obj = { a: 1 };
    const arr = [obj, { a: 1 }, obj];
    console.log(arr.lastIndexOf({ a: 1 })); // -1
    console.log(arr.lastIndexOf(obj)); // 2
  }

  // How can you use Array.lastIndexOf() to find all occurrences of an element in an array, starting from the end ? Example :
  
  getAllOccurence() {
    const arr = [1, 2, 3, 1, 2, 3];
    const target = 2;
    let targetArrayIndex = [];
    let idx = arr.lastIndexOf(target);
    while (idx !== -1) {
      targetArrayIndex.push(idx);
      idx = arr.lastIndexOf(target, idx - 1);
    }
    console.log('targetArrayIndex', targetArrayIndex);
  }

  // How would you use Array.lastIndexOf() to remove the last occurrence of a specific element in an array ? Example :
  removeLastOccurence() {
    let arr = [1, 2, 3, 2, 4];
    const target = 2;
    let idx = arr.lastIndexOf(target);
    arr.splice(idx, 1);
    console.log('array', arr);
  }

  // What are the limitations of Array.lastIndexOf() compared to other methods like Array.findLastIndex() ?
  // Expected answer:
  // lastIndexOf() only works with strict equality.
  // findLastIndex() allows you to use a callback function to define a more complex condition

  // How would you use Array.lastIndexOf() to find the last occurrence of a specific number in an array, starting from a custom index ? Example :
  getLastIndexFromStartingACustomIndex() {
    const arr = [1, 2, 3, 4, 2, 5];
    console.log(arr.lastIndexOf(2, 3)); // 1
  }

  // Write a function that uses Array.lastIndexOf() to check if a specific value appears more than once in an array.Example:
  checkOccurrenceMoreThanOnce() {
    const arr = [1, 2, 3, 2, 4];
    const two2occurrence = arr.lastIndexOf(2) === arr.indexOf(2);
    const two4occurrence = arr.lastIndexOf(4) === arr.indexOf(4);
    console.log('two2occurrence', two2occurrence);
    console.log('two4occurrence', two4occurrence);
  }

  // How can you use Array.lastIndexOf() to check if a given array is symmetric(mirrored around the center) ? Example :
  isSymmetric(array: string | any[]) {
    for (let i = 0; i < array.length / 2; i++) {
      // Get the mirrored counterpart
      const mirroredIndex = array.length - 1 - i;

      // Use lastIndexOf to find the position of the element
      if (array.lastIndexOf(array[i]) !== mirroredIndex) {
        return false; // Not symmetric if mismatch is found
      }
    }
    return true; // Array is symmetric
  }

}
