import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-array-from',
  templateUrl: './array-from.component.html',
  styleUrl: './array-from.component.scss'
})
export class ArrayFromComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example1();
    // this.example2();
    // this.withSparseArray();
    // this.getFormed();
    this.flattenArray();
  }

  // How does Array.from() work with the this argument in its mapping function? What is the behavior of the this keyword inside the callback function?
  // What is the purpose of the Array.from() method in JavaScript ? Can you explain how it works ?
  // What is the second parameter of Array.from() used for? Can you provide an example where this parameter is used ?
  // ...Array.from() allows you to convert these array-like or iterable objects into arrays. Optionally, you can also pass a mapping function to apply to each element during the conversion.
  // ... Array.from(arrayLike, mapFunction);
  example1() {
    const str = 'Hello';
    const arr = Array.from(str, map => map.toUpperCase())
    console.log('strrr', arr);
  }

  // How does Array.from() differ from using slice() or the spread operator([...]) to convert array - like objects to arrays ?
  // Can Array.from() be used on non - array iterable objects like Map or Set ? How does it behave in such cases ?
  // Can you provide an example of using Array.from() to create an array from a string or a Set ?
  example2() {
    const str = 'Hello';
    const arr = Array.from(str, map => map.toUpperCase())
    console.log('strrr', arr);

    const arr1 = [].slice.call(str) // Converting string to array
    console.log('strrr', arr1);

    const ssset = new Set([1, 2, 3])
    const arr2 = Array.from(ssset);
    console.log(arr2);
  }

  // What is the behavior of Array.from() when applied to sparse arrays ?
  // How does Array.from() handle undefined or empty slots in an array - like object ?
  withSparseArray() {
    const str = [1, 2, , 3, 4, , 5, 6,];
    const arr = Array.from(str);
    console.log(arr); // [1, 2, undefined, 3, 4, undefined, 5, 6]
  }
  
  // What is the time complexity of the Array.from() method, and are there any performance concerns when using it with large arrays or array - like objects ?
  // ...O(n)
  
  // Can you use Array.from() with a for...of loop to create an array of transformed elements ? Provide an example.
  getFormed() {
    const testStr = 'This is test string';
    const anotherTestStr = []
    for (let char of Array.from(testStr)) {
      anotherTestStr.push(char.toUpperCase())
    }
    console.log('asdfasdf', anotherTestStr);
  }
  
  // What happens if you use Array.from() on an object that is not iterable ?
  objectIterable() {
    let obj = { a: 1, b: 2, c: 3 };
    // let arr = Array.from(obj);  // This will throw a TypeError
  }

  // How would you use Array.from() to flatten an array of arrays ? Provide an example.
  flattenArray() {
    const arr = [[1, 2], [3, 4], [5, 6]];
    const flattenedArray = Array.from(arr, ele => ele).flat()
    console.log(flattenedArray);
  }

  // Can you use Array.from() to create an array from a NodeList or arguments object ? Provide an example. // XXXX

  // How does Array.from() handle non - numeric values when creating an array from a string or object with numeric keys ?
  numericKeys() {
    let str = "hello123";
    // Convert the string to an array
    let arrayFromString = Array.from(str);
    console.log(arrayFromString);  // ['h', 'e', 'l', 'l', 'o', '1', '2', '3']

    let obj: any = { 0: 'a', 1: 'b', 2: 'c', 3: 1, 4: 2 };

    // Convert the object to an array
    let arrayFromObject = Array.from(obj);
    console.log(arrayFromObject);  // ['a', 'b', 'c', 1, 2]


    let obj1: any = { 0: 'a', 1: 'b', 2: 'c', 3: 1, 4: 2 };

    // Convert object to an array with a mapping function to handle non-numeric values
    let arrayFromObjectWithMapping = Array.from(obj1, (value) => typeof value === 'string' ? value.toUpperCase() : value);

    console.log(arrayFromObjectWithMapping);  // ['A', 'B', 'C', 1, 2]


  }
  // Explain a real - world scenario where Array.from() would be useful over other array methods(like map() or slice()).
  realWorldScenario() {
    // Select all elements with class 'item'
    let nodeList = document.querySelectorAll('.item');
    // Convert NodeList to an array using Array.from(), and then map over it
    let transformedElements = Array.from(nodeList, element => {
      element.classList.add('active');
      return element;  // Return the element (if needed)
    });
    console.log(transformedElements); // Array of elements with 'active' class added
  }
}
