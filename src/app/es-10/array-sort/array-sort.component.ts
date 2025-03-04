import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-array-sort',
  templateUrl: './array-sort.component.html',
  styleUrl: './array-sort.component.scss'
})
export class ArraySortComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example1();
    // this.example1();
    // this.example3();
    this.example4();
  }


  // What is the default behavior of Array.prototype.sort() ?
  // How can you sort an array of numbers in ascending order using sort() ?
  example1() {
    const arr = [30, 1, 4, 21, 100];
    const defaultSortedArray = arr.sort();
    console.log(defaultSortedArray); // [1, 100, 21, 30, 4];
    const sortedArray = arr.sort((a, b) => a-b);
    console.log(sortedArray); // [1, 4, 21, 30, 100];
  }

  // How does Array.prototype.sort() compare elements by default?
  // ...in the string form

  // Why might the default sort() method not work correctly for numbers ?
  example2() {
    const arr = [30, 1, 4, 21, 100];
    arr.sort();
    console.log(arr); // Output: [1, 100, 21, 30, 4]

    // The sort() method treats the numbers as strings:
    // '30', '1', '4', '21', and '100' are compared lexicographically.
    // '1' comes before '100' because '1'(in string form) is lexicographically smaller than '100'.
    // Similarly, '21' comes before '30' for the same reason.
  }

  // How can you sort an array of strings in case -insensitive order using sort() ?
  example3() {
    const arr = ['banana', 'Apple', 'cherry', 'apple', 'Banana'];
    const sortedArray = arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    console.log('sortedArray', sortedArray); // ['Apple', 'apple', 'banana', 'Banana', 'cherry']
  }

  // Explain how to sort an array of objects by a specific property using sort().
  example4() {
    const people = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 20 }
    ];
    const withAge = people.sort((a, b) => a.age - b.age);
    console.log('withAge', withAge);
    const withName = people.sort((a, b) => a.name.localeCompare(b.name));
    console.log('withName', withName);
  }

  // What is the time complexity of the sort() method ?
  // ...O(n log n)

  // Can Array.prototype.sort() be used to sort an array in descending order ? How ?
  example5() {
    const people = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 20 }
    ];
    const withAge = people.sort((a, b) => b.age - a.age);
    console.log('withAge', withAge);
    const withName = people.sort((a, b) => b.name.localeCompare(a.name));
    console.log('withName', withName);
  }

  // How does Array.prototype.sort() handle NaN, undefined, or other special values in the array ?
  example6() {
    // NaN is treated as a string "NaN" and is placed at the end.
    const arr1 = [NaN, 2, 1, 3];
    console.log(arr1.sort()) // Output: [1, 2, 3, NaN]

    // undefined is treated as a string "undefined" and is also placed at the end.
    const arr2 = [3, 1, undefined, 2];
    console.log(arr2); // Output: [1, 2, 3, undefined]

    // null is treated as a string "null" and is placed at the end.
    const arr3 = [3, 1, null, 2];
    console.log(arr3); // Output: [1, 2, 3, null]

    // Infinity and - Infinity are treated as numbers and sorted accordingly, with -Infinity at the start and Infinity at the end.
    const arr4 = [1, Infinity, 3, -Infinity, 2];
    console.log(arr4); // Output: [-Infinity, 1, 2, 3, Infinity]
    
    // Boolean values(true, false) are treated as numbers (false as 0 and true as 1), so false will appear before true.
    const arr = [true, false, 3, 1];
    console.log(arr); // Output: [false, 1, 3, true]
  }

  // How would you sort an array of dates using Array.prototype.sort() ?
  example7() {
    const dates = [
      new Date('2025-08-10'),
      new Date('2023-04-11'),
      new Date('2024-05-12'),
      new Date('invalid date'),
      new Date('2022-03-04'),
      new Date('2021-02-04'),
    ];
    const sortedDates = dates.sort((a, b) => {
      if (isNaN(a.getTime())) return 1; // Move invalid dates to the end
      if (isNaN(b.getTime())) return -1;
      return a.getTime() - b.getTime()
    });
    console.log('sortedDates', sortedDates);
  }

  // How do you sort an array of objects by a nested property ?
  example8() {
    const people = [
      { name: 'Alice', address: { city: 'London', zip: '1234' } },
      { name: 'Bob', address: { city: 'New York', zip: '5678' } },
      { name: 'Charlie', address: { city: 'Los Angeles', zip: '2345' } },
      { name: 'David', address: { city: 'Chicago', zip: '6789' } }
    ];

    const sortedWithCity = people.sort((a, b) => {
      const cityA = a.address.city.toLowerCase();
      const cityB = b.address.city.toLowerCase();
      return cityA.localeCompare(cityB);
    });

    console.log(sortedWithCity);
  }

  // What is a comparison function in Array.prototype.sort(), and how does it work ? // XXXX

  // Can Array.prototype.sort() mutate the original array ?
  // ...Yes, Array.prototype.sort() mutates the original array.
  example9() {
    const numbers = [2, 1, 4, 3, 7, 5, 3];
    numbers.sort();
    console.log(numbers); // [1,2,3,3,4,5,7];
  }
  
  // How do you implement a stable sort with Array.prototype.sort() ?
  // ...By default, Array.prototype.sort() is not guaranteed 

  // What is the difference between Array.prototype.sort() and Array.prototype.reverse() ?
  // ...sort method sort array with accending or decending order while reverse method reverse whole array


}
