import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('FilterComponent initialized');
    // this.mainPurpose();
    // this.returnTypeOfArray();
    // this.isOriginalArrayMutableWithFilter();
    // this.noConditionMeetFilter();
    // this.getEvenNumberWithFilter();
    // this.handleSparshAraayWithFilter();
    // this.chainingFilterWithOtherMethod();
    // this.callbackReturnValue();
    // this.objectBasedFilter();
    // this.removeDuplicateFilter();
    // this.userUnderAge();
    // this.handleNANWithFilter();
    // this.getLengthGreaterThanFive();
    // this.getPrimeNumber();
    // this.filteringFromMixedArray();
    // this.filterFromSourceArray();
    // this.getCompletedTasks();
    // this.filterUniqueElement();
    // this.filterUndefinedElement();

  }

  // What is the filter() method in JavaScript ? How does it work ? // !!
  mainPurpose() { // !!
    const tempArray = [1, 2, 3, 4, 5];
    const filteredArray = tempArray.filter((item) => item % 2 === 0);
    console.log('filteredArray', filteredArray);
  }

  // What is the return value of the filter() method ? // @@ // New array
  returnTypeOfArray() { // @@
    const tempArray = [1, 2, 3, 4, 5];
    const filteredArray = tempArray.filter((item) => item % 2 === 0);
    console.log('typeof filteredArray', filteredArray);
  }

  // What are the arguments passed to the callback function of filter()? ##(element, index, array)
  argumentPassedInArray() { // ##
    const tempArray = [1, 2, 3, 4, 5];
    const filteredArray = tempArray.filter((item, index, array) => {
      console.log('item', item);
      console.log('index', index);
      console.log('array', array);
    });
    console.log('typeof filteredArray', filteredArray);
  }

  // Does the filter() method mutate the original array ? Why or why not ? $$ No, cause filter return another array
  isOriginalArrayMutableWithFilter() { // $$
    const originalArray = [1, 2, 3, 4, 5];
    const mutedArray = originalArray.filter((item) => item > 3);
    console.log('mutedArray', mutedArray);
    console.log('originalArray', originalArray);
  }

  // What happens if no elements in the array satisfy the condition in the filter() method ? //  %% it will return empty array
  noConditionMeetFilter() { // %%
    const originalArray = [1, 2, 3, 4, 5];
    const mutedArray = originalArray.filter((item) => item > 6);
    console.log('mutedArray', mutedArray);
  }

  // Write a program to filter out even numbers from an array. ^^
  getEvenNumberWithFilter() { // ^^
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const evenNumber = numbers.filter(num => num % 2 === 0);
    console.log('evenNumberArray', evenNumber)
  }

  // How does filter() handle empty slots in sparse arrays ? &&
  handleSparshAraayWithFilter() { // &&
    const numbers = [1, 2, 3, 4, 5, , 7, 8, , 10, 11, 12, , 14, 15, 16];
    const evenNumber = numbers.filter(num => (num || 0) % 2 === 0);
    console.log('evenNumberArray', evenNumber)
  }

  // What is the difference between filter() and map() ? **
  filterAndMapDifference() {
    // filter
    // Used to filter elements from an array based on a condition.
    // Returns a new array containing elements that satisfy the condition(truthy return from the callback).
    // The callback must return a boolean value(true to include the element, false to exclude it).	
    // The length of the result array is less than or equal to the original array(based on the condition).	
    // Does not modify the original array.	
    // Used when you want to extract specific elements from an array.

    // map()
    // Used to transform elements of an array into a new form.
    // Returns a new array where each element is the result of applying the callback function.
    // The callback can return any value, as it transforms each element of the array.
    // The length of the result array is always the same as the original array.
    // Does not modify the original array.
    // Used when you want to transform or compute a new array from the original array.
  }

  // How can you chain filter() with other array methods like map() or reduce() ? ((
  chainingFilterWithOtherMethod() { // ((
    const numbers = [1, 2, 3, 4, 5];
    const sumOfElement = numbers.map(n => n * 3).filter(m => m > 5).reduce((a, b) => a + b, 0);
    console.log('sumOfElement', sumOfElement);
  }

  // What happens if the callback function used in filter() does not return a boolean value ? // ))
  // How would you use filter() to remove falsy values(e.g., 0, null, undefined, false) from an array ? // ))
  callbackReturnValue() { // )) 
    const numbers = [1, 2, '', 4, 5, false, true, 'hello', null, 'Yes', undefined, 'No'];
    const filteredArray = numbers.filter((item) => item);
    console.log('filteredArray', filteredArray); // [1,2,4,5,true,hello,Yes,No]
  }

  // How does filter() behave with objects in an array ? Provide an example where you filter objects based on a specific property. // --
  objectBasedFilter() { // --
    const objectBasedFilter = [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
      { id: 3, name: 'Bob', age: 35 },
      { id: 4, name: 'Alice', age: 40 },
      { id: 5, name: 'Charlie', age: 45 },
      { id: 6, name: 'David', age: 50 },
    ];
    const filteredArray = objectBasedFilter.filter((item) => item.age > 35);
    console.log('filteredArray', filteredArray);

    // objectBasedFilter.filter(o => o.name.length>3)
  }

  // Can filter() be used to remove duplicates from an array ? If yes, how ? // ==
  removeDuplicateFilter() { // ==
    const duplicateElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 7, 7, 6, 5, 5, 3, 4, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 5, 4, 3, 3, 2, 2, 1];
    const withoutDuplicateElement = duplicateElement.filter((item, index, array) => array.indexOf(item) === index);
    console.log('withoutDuplicateElement', withoutDuplicateElement);

    const users = [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
      { id: 1, name: 'John', age: 25 },
      { id: 3, name: 'Alice', age: 40 },
      { id: 3, name: 'Alice', age: 40 },
    ]
    const uniqueUsers = users.filter((user, index, userArray) => userArray.findIndex(u => user.id === u.id) === index);
    console.log('uniqueUsers', uniqueUsers);

    const remoce = duplicateElement.filter((item, i, selfArr) => selfArr.indexOf(item) === i);
    const objectBased = users.filter((obj, i, selfArr) => i === selfArr.findIndex(u => obj.id === u.id));
    const again = users.filter((o, i, a) => i === a.findIndex(u => u.id === o.id));

    const againAnd = duplicateElement.filter((e, i, a) => i === a.indexOf(e));
  }

  // Given an array of objects, filter out objects where a specific property matches a condition.For example, filter out users who are under 18 years old. // ++
  userUnderAge() { // ++
    const users = [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
      { id: 3, name: 'Dadda', age: 35 },
      { id: 4, name: 'Alice', age: 40 },
      { id: 5, name: 'Alice44', age: 45 },
    ]
    const uniqueUsers = users.filter(user => user.age > 29);
    console.log('uniqueUsers', uniqueUsers);
  }

  //   How does the filter() method handle NaN values in an array ? // @!@
  handleNANWithFilter() { // @!@
    const numbers = [1, 2, 4, 5, 5, 6, 6, 4, 3, NaN, NaN, 333, 222, 333, 22221, NaN];
    const uniqueUsers = numbers.filter(n => !Number.isNaN(n));
    console.log('uniqueUsers', uniqueUsers);
  }

  // Write a program that uses filter() to find all elements in an array whose string length is greater than 5. // @#@
  getLengthGreaterThanFive() { //@#@
    const strArray = ['Munna Tripathi', 'Kaleen Bhaiya', 'Dadda Tyagi', 'Munna', 'Maqbool', 'Mantri Ji'];
    const uniqueUsers = strArray.filter(n => n.length > 5);
    console.log('uniqueUsers', uniqueUsers);
  }

  // How would you combine filter() with a regular expression to filter elements matching a specific pattern ? // @$@
  regularExpression() { // @$@
    const fruits = ['apple', 'banana', 'grape', 'pineapple', 'apricot'];
    // Filter elements containing the word 'apple'
    const appleFruits = fruits.filter(fruit => /apple/.test(fruit));
    console.log(appleFruits); // Output: ['apple', 'pineapple']
  }

  // Filter prime numbers from an array of integers. // @%@
  getPrimeNumber() { // @%@
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];
    const primeNumbers = numbers.filter((item) => {
      if (item <= 1) return false;
      if (item === 2) return true;
      if (item % 2 === 0) return false;
      const sqrtItem = Math.sqrt(item);
      for (let i = 3; i <= sqrtItem; i = i + 2) {
        if (item % i === 0) return false;
      }
      return true;
    });

    console.log('primeNumbers', primeNumbers);
    const onlyPrimeNumbers = numbers.filter(n => {
      if (n <= 1) return false;
      if (n === 2) return true;
      if (n % 2 === 0) return false;
      const sqrt = Math.sqrt(n);
      for (let i = 3; i <= sqrt; i = i + 2) {
        if (n % i === 0) return false;
      }
      return true;
    });
    console.log('onlyPrimeNumbers', onlyPrimeNumbers);
  }

  // Filter all strings from a mixed array of numbers, strings, and objects. // @^^@
  filteringFromMixedArray() { // @^^@
    const mixedArray = [
      42,
      "hello",
      { name: "Alice", age: 25 },
      3.14,
      "world",
      { type: "car", brand: "Toyota" },
      100,
      "JavaScript",
      { id: 1, isActive: true },
      -15,
      "mixed data",
      { category: "books", count: 12 }
    ];

    const stringArray = mixedArray.filter(item => typeof item === 'string');
    console.log('stringArray', stringArray);

  }

  // Create a function that filters elements from an array based on whether they are present in another array.  // @@##@@
  filterFromSourceArray() { // @@##@@
    const sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 2];
    const filterArray = [2, 4, 6, 8];
    const resultArray = sourceArray.filter(item => filterArray.includes(item));
    console.log('resultArray', resultArray); // Output: [2, 4, 6, 8];
  }

  // Given an array of tasks with a completed property, use filter() to extract tasks that are marked as completed. // ##@@##
  getCompletedTasks() { // ##@@##
    const tasks = [
      { id: 1, title: "Wash the dishes", completed: true },
      { id: 2, title: "Vacuum the house", completed: false },
      { id: 3, title: "Write a report", completed: true },
      { id: 4, title: "Go grocery shopping", completed: false },
      { id: 5, title: "Read a book", completed: true },
    ];

    const completedTasks = tasks.filter(item => item.completed);
    console.log('completedTasks', completedTasks);
  }

  // Write a function that filters unique elements from an array using filter() and indexOf().  // ((**))
  filterUniqueElement() { // ((**))
    const mixedArray = [1, 12, 2, 3, 3, 4, 5, 5, 2, 6, 7, 7, 8, 2, 8, 7, 2, 6, 5, 4, 4, 3, 3, 3, 3, 2, 2, 1, 5, 1, 2, 3, 3, 4, 4, 1, 5, 5, 6, 6, 7, 78, 8, 89];
    const uniqueArray = mixedArray.filter((n, i, ma) => ma.indexOf(n) === i);
    console.log('uniqueArray', uniqueArray);
  }

  // How does filter() handle undefined elements in the array ?  // &&^^&&
  filterUndefinedElement() { // &&^^&&
    const mixedArray = [1, undefined, 2, undefined, 3, undefined, 9];
    const uniqueArray = mixedArray.filter(e => e);
    console.log('uniqueArray', uniqueArray);
  }

  //   Can you use the this argument in the filter() method? Provide an example. XXXX
  //   What is the time complexity of the filter() method ? // O(n)
  //   Write a polyfill for the filter() method. // XXXX
  //   What happens if filter() is called on an empty array ? // it will return empty array
  //   What happens if the callback function in filter() throws an error ? // as filter method return a array as a result it callback will throw an error, it will not return anything
  //   Can filter() be used on non - array objects, such as array - like objects or strings ? // Yes 
  //   What happens if the filter() callback function is asynchronous or returns a promise ?  // XXXX


}
