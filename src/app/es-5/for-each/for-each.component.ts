import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-for-each',
  templateUrl: './for-each.component.html',
  styleUrl: './for-each.component.scss'
})
export class ForEachComponent implements OnInit {

  numbers = [45, 4, 9, 16, 25];


  constructor() { }
  
  ngOnInit(): void {
    this.doForLoop();
    this.iterateWithSetAndObjects();
    this.modifyOriginalArrayWithForEach();
    this.modifyOriginalArrayWithAddingOne();
  }


  doForLoop() {
    this.numbers.forEach((n) => console.log('number', n));
    this.earlyTermination();
  }

  earlyTermination() { // **
    let tempArray = [12, 3, 4, 4, 4, 3, 32, 2, 2134, 21, 31, 3, 234, 24, 23, 434, 534, 54, 65, 756, 867, 754, 32, 423, 432, 54, 5];
    tempArray.forEach((element) => {
      try {
        if (element === 2) throw new Error('This loop has been truncated');
        console.log('element', element);
      } catch (error) {
        console.log("Stopped early", error);
      }
    })
  }

  iterateWithSetAndObjects() {
    let tempSet = new Set([1, 2, 3, 4, 4, 3, 2, 12]);
    tempSet.forEach((element) => console.log('set', element));
    let tempObject = new Object({ firstName: 'Divya Prakash', lastName: 'Mishra', gender: 'Male' });
    Object.keys(tempObject).forEach((ele) => console.log('Object', ele));
    // tempObject..forEach((element) => console.log('set', element);)
  }

  callBackFunction() { // ****
    [2, 3, 4, 2, 2, 2, 2, 2].forEach((element, index, array) => console.log('element, index, array', element, index, array));
  }

  modifyOriginalArrayWithForEach() { // !!
    let tempArray = [2, 3, 4, 5, 6, 7, 8, 9];
    tempArray.forEach((element, index, array) => {
      array[index] = element * 3;
    })
    console.log('tempArray', tempArray);
  }

  modifyOriginalArrayWithAddingOne() { // !!!
    let tempArray = [2, 3, 4, 5, 6, 7, 8, 9];
    tempArray.forEach((element, index, array) => {
      array[index] = element +1;
    })
    console.log('tempArray', tempArray);
  }


  chainingForE() { // @@@@
    let arr = [1, 2, 3];
    arr.map(x => x * 2).forEach(x => console.log(x));  // Output: 2, 4, 6

}



  // What is the purpose of the forEach() method in JavaScript ? // iterate each item once in an array
  // Can you give an example of how to use forEach() in JavaScript ? // this.numbers.forEach((n) => console.log('number', n));
  // Does forEach() return a value ? // No it will return undefined
  // What happens if you try to break out of a forEach() loop ? // can't break or retrun otherwise it 
  // How would you achieve early termination in a forEach() loop ? **
  // Can you use forEach() with other data structures like objects or sets ? ***
  // What parameters are passed to the callback function in forEach() ? ****
  // Is it possible to modify the original array while iterating with forEach() ? // Yes !!
  // How does forEach() compare with traditional for and for...of loops in terms of performance ? //performance of for and for...of loop more than forEach, the main difference is forEach has overhead due to function calls and is less optimized in some JavaScript engines.
  // What are the main advantages and disadvantages of using forEach() ? // Ad - Simplifies iteration, callback function syntax is clean and functional. Disad - Cannot break or exit, Not suitable for asynchronous operations if you're relying on sequential execution of tasks, Slower than for loop
  // How would you use forEach() to modify an array in place by adding 1 to each element ? // !!!
  // Can you chain forEach() with other array methods(like map(), filter(), etc.) ? // @@@@ While forEach() returns undefined, so it does not return a new array, you can chain other methods before or after forEach(). However, forEach() itself is not chainable because of the absence of a return value.





}
