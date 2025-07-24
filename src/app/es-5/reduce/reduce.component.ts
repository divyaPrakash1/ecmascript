import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-reduce',
  templateUrl: './reduce.component.html',
  styleUrl: './reduce.component.scss'
})
export class ReduceComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
    // console.log('reduce method in array');
    // this.generalMethod();
    // this.allParameterMethod();
    // this.flatMultiDimensionalArray();
    // this.computeMaxValueArray();
    // this.reduceObjectWithSpecificProperty();
    // this.reduceObjectWithSpexcificProperty();
    // this.reduceAndReduceRight();
    // this.implementFilterAndMapUsingReduce();
    // this.getTotalAmount();
    // this.getLongestString();
    // this.mergeMultipleArrayWithoutDuplicates();
    // this.getInSingleSentence();
    this.customObjectFromEntries();
    

  }

  // array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
  
  generalMethod() { // !!! used to iterate through an array and reduce its elements to a single accumulated value
    const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 91, 3];
    const sum = tempArray.reduce((acc, item) => acc + item, 0);
    console.log('sum', sum);
  }

  allParameterMethod() { // @@@
    const numbers = [1, 2, 3, 4];
    const result = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
      console.log(`Index: ${currentIndex}, Accumulator: ${accumulator}, Current Value: ${currentValue}, Array: ${array}`);
      return accumulator + currentValue;
    }, 2);

    console.log(result); // Output: 12
  }

  omitInitialValue() { // ###
    //  Providing an initialValue is generally safer because:
    //  It ensures that the reduce() method behaves predictably, even with empty arrays.
    //  It allows you to specify a base value for your operation, making the logic more explicit.
    const numbers = [1, 2, 3, 4];
    const result = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
      console.log(`Index: ${currentIndex}, Accumulator: ${accumulator}, Current Value: ${currentValue}, Array: ${array}`);
      return accumulator + currentValue;
    }, 0);

    console.log(result); // Output: 10
  }

  flatMultiDimensionalArray() { // $$$
    const arr = ['a', 'b', 'a'];
    const countOrrcurence = arr.reduce((acc: any, currentValue: any) => {
      if (acc[currentValue]) {
        acc[currentValue]++;
      } else {
        acc[currentValue] = 1;
      }
      return acc
    }, {});

    console.log('countOrrcurence', countOrrcurence);
  }

  computeMaxValueArray() { // %%%
    const arr = [1, 2, 3, 4, 324, 342, 342, 342, 342, 23, 4123, 41, 234, 99999, 1234, 12, 341, 234, 1234, 12, 34];
    let maxValue = 0;
    const value = arr.reduce((acc: any, currentValue: any) => {
      if (currentValue > maxValue) {
        maxValue = currentValue;
      }
      return maxValue;
    }, 0);

    console.log('max value', value);
  }

  reduceObjectWithSpecificProperty() { // ^^^ this object will be grouped by Age
    const people = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 25 },
      { name: 'David', age: 30 },
      { name: 'Eve', age: 35 },
    ];
    const groupedObject = people.reduce((accumulator: any, currentValue) => {
      let age = currentValue.age
      if (!accumulator[age]) {
        accumulator[age] = [];
      }
      accumulator[age].push(currentValue);
      return accumulator;
    }, {});
    console.log('groupedObject', groupedObject);
  }
  
  reduceObjectWithSpexcificProperty() { // &&&
    const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    const objectOccccurence = array.reduce((accumulator: any, currentValue) => {
      if (accumulator[currentValue]) {
        accumulator[currentValue]++;
      } else {
        accumulator[currentValue] = 1;
      }

      return accumulator
    }, {});
    console.log('groupedObject', objectOccccurence);
  }
  reduceAndReduceRight() { // ***

    // reduce(): Iterates from the first element to the last.
    // reduceRight(): Iterates from the last element to the first.
    // array.reduce(callback, initialValue);
    // array.reduceRight(callback, initialValue);

    const numbers = [1, 2, 3, 4];
    const result = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(result); // Output: 10
    const result1 = numbers.reduceRight((acc, curr) => acc + curr, 0);
    console.log(result1); // Output: 10


    const words = ['Hello', 'World', 'JavaScript'];
    const result2 = words.reduce((acc, curr) => acc + ' ' + curr);
    console.log(result2); // Output: "Hello World JavaScript"

    const result3 = words.reduceRight((acc, curr) => acc + ' ' + curr);
    console.log(result3); // Output: "JavaScript World Hello"
  }

  implementFilterAndMapUsingReduce() { // (((
    const tempArray = [1, 3, 235, 234, 43, 456, 56, 732, 5413, 452, 45, 4568, 567, 4625, 345, 1346, 356, 74, 67362, 344, 15];

    // Filter implementation
    const filterredArray = tempArray.reduce((accumulator: any[], currentValue) => {
      if (currentValue > 100) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
    console.log('filterredArray', filterredArray);

    // Map implementation
    const mapedArray = tempArray.reduce((accumulator: any[], currentValue) => {
        accumulator.push(currentValue / 2);
      return accumulator;
    }, []);
    console.log('mapedArray', mapedArray);
  }

  getTotalAmount() { // )))
    const transactions = [
      { id: 1, amount: 100 },  // Deposit
      { id: 2, amount: -50 },  // Withdrawal
      { id: 3, amount: 200 },  // Deposit
      { id: 4, amount: -30 }   // Withdrawal
    ];
    const amount = transactions.reduce((accumulator, currentValue) => {
      accumulator+= currentValue.amount;
      return accumulator
    }, 0);
    console.log('amount', amount);
  }

  getLongestString() { // ---
    const strings = ['Deposit', 'Withdrawal', 'Deposit', 'Withdrawal', 'This is Longest String'];
    let tempLongestString = '';
    const longestString = strings.reduce((accumulator, currentValue) => {
      if (currentValue.length > tempLongestString.length) {
        accumulator = currentValue;
      }
      return accumulator
    }, '');

    console.log('longestString', longestString);
  }

  mergeMultipleArrayWithoutDuplicates() { // ===
    const tempArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const tempArray2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const tempArray3 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    
    const mergedArray = tempArray1.concat(tempArray2).concat(tempArray3).reduce((accumulator: any, currentValue) => {
      if (!accumulator.includes(currentValue))
        accumulator.push(currentValue);
        return accumulator
    }, []);

    console.log('mergedArray', mergedArray);
  }

  getInSingleSentence() { // !!@@!!
    const people = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 }
    ]; // All people are Alice, Bob and Charlie

    const singleSentence = people.reduce((accumulator, currentValue, index) => {
      if (index === 0) {
        accumulator = `All people are ${currentValue.name}`
      } else if (index === people.length - 1) {
        accumulator = `${accumulator} and ${currentValue.name}.`
      } else {
        accumulator = `${accumulator}, ${currentValue.name}`
      }
      return accumulator;
    }, '');

    console.log('singleSentence', singleSentence);
  }
  
  customObjectFromEntries() { // ##@@##
    const entries = [
      ['name', 'Alice'],
      ['age', 25],
      ['city', 'Wonderland']
    ];

    const objectForm = entries.reduce((accumulator: any, [key, value]) => {
      if (!accumulator[key]) {
        accumulator[key] = value;
      }
      return accumulator;
    }, {});

    console.log('objectForm', objectForm);
  }


//   What is the reduce() method in JavaScript, and when would you use it ? // !!!
//   What are the parameters of the reduce() method, and what does each represent ? // @@@
//   What does the reduce() method return? // a single value
//   Explain the difference between reduce() and other array methods like map() or filter(). // reduce retrun single value, while filter and return array
//   Write a simple example of using reduce() to calculate the sum of an array of numbers. // !!!


//   What happens if you omit the initial value in the reduce() method ? How does it affect the iteration process ? // ###
//   How can reduce() be used to flatten a multi - dimensional array ? Provide a code example.  //  XXX
//   Write a reduce() function to count the occurrences of each element in an array(e.g., ['a', 'b', 'a'] to { a: 2, b: 1 }). // $$$
//   How would you implement reduce() to compute the maximum value in an array ? // %%%
//   Can reduce() handle asynchronous operations ? If so, how would you handle such cases ? // XXX


//   How would you use reduce() to group objects by a specific property ? Provide a detailed example. // ^^^
//   Write a function using reduce() that transforms an array into an object with keys derived from the array values. // &&&
//   What are the performance implications of using reduce() on large datasets ? // performance will be slow as it is using callback
//   Compare and contrast reduce() and reduceRight().When would you prefer one over the other ? // ***
//   How can you implement the functionality of map() or filter() using reduce() ? Provide code examples for both. // (((
    
    
//   Given an array of transactions, write a reduce() function to calculate the total balance for a user.Each transaction has an amount property. // )))
//   You have an array of strings. Write a reduce() function to return the longest string in the array. // ---
//   Implement a function using reduce() to merge multiple arrays into one without duplicates. // ===
//   Use reduce() to generate a formatted string summary from an array of objects.For example, summarize a list of people into a single sentence listing their names. // !!@@!!
//   How would you debug or optimize a complex reduce() implementation that’s hard to read or slow ? // Understand the logic and break into small piece of codes

  
//   Using reduce(), implement a function that emulates the behavior of the Object.fromEntries() method. // ##@@##
//   Write a polyfill for the reduce() method. // XXXX
//   Solve this: Convert an array of objects into a nested object based on multiple levels of keys using reduce(). // XXXX



}
