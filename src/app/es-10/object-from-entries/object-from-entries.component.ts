import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-object-from-entries',
  templateUrl: './object-from-entries.component.html',
  styleUrl: './object-from-entries.component.scss'
})
export class ObjectFromEntriesComponent implements OnInit {
  constructor() { }
  nestedEntries = [
    ['key1', 'value1'],
    ['key2', [
      ['nestedKey1', 'nestedValue1'],
      ['nestedKey2', 'nestedValue2']
    ]]
  ];
  ngOnInit(): void {
    // this.example1();
    // this.example2();
    // this.example3();
    // this.example4();
    this.example5();
    this.example6(this.nestedEntries);
  }


  // What does the Object.fromEntries() method do in JavaScript ?
  // ...Object.fromEntries() method in JavaScript is used to create an object from an iterable (such as an array or a Map) that contains key-value pairs. The method takes an iterable, where each element is a two-item array (key-value pair), and returns a new object with those key-value pairs.
  // Can you use Object.fromEntries() to create an object from an array of key - value pairs ?
  // How would you transform the output of Object.entries() back into an object ?
  example1() {
    const arr = [['a', 1], ['b', 2], ['c', 3]];
    const obj = Object.fromEntries(arr);
    console.log(obj); // {a: 1, b: 2, c: 3}
  }

  // How does Object.fromEntries() differ from Object.entries() ?
  // ...Object.entries() and Object.fromEntries() are both JavaScript methods, but they serve opposite purposes:
  example2() {
    const obj = { a: 1, b: 2, c: 3 };
    const entries = Object.entries(obj); 
    console.log('entries', entries);  // [['a', 1], ['b', 2], ['c', 3]]
    const fromEntries = Object.fromEntries(entries);
    console.log('fromEntries', fromEntries); // { a: 1, b: 2, c: 3 }
  }

  // What types of data can be used with Object.fromEntries() to create an object ? // Array
  
  // How would you handle invalid or malformed entries when using Object.fromEntries() ?
  // How does Object.fromEntries() handle non - iterable values ?
  example3() {
    const entries = [['a', 1], ['b', 2], ['c', 3], ['d'], [4]];
    const validEntries = entries.filter(entry => Array.isArray(entry) && entry.length === 2);
    const fromEntries = Object.fromEntries(validEntries);
    console.log('fromEntries', fromEntries); // { a: 1, b: 2, c: 3 }
  }

  // What happens if the array passed to Object.fromEntries() contains duplicate keys ? // last value will be kept
  example4() {
    const entries = [['a', 1], ['b', 2], ['c', 3], ['a', 4]];
    const fromEntries = Object.fromEntries(entries);
    console.log('fromEntries', fromEntries); // { a: 4, b: 2, c: 3 }
  }

  // Can Object.fromEntries() be used with a Map object ? If so, how ?
  example5() {
    const entries = [['a', 1], ['b', 2], ['c', 3], ['a', 4]];
    const fromEntries = Object.fromEntries(entries);
    const doubleValue = Object.values(fromEntries).map((e: any) => e * 2);
    console.log('doubleValue', doubleValue); //  [8, 4, 6]
  }
  
  // Can you convert a Set object to an object using Object.fromEntries() ? // XXXX
  
  
  // What is the time complexity of using Object.fromEntries() ? // O(n)
  
  // How would you use Object.fromEntries() in combination with Array.prototype.map() ? // XXXX

  // Is Object.fromEntries() supported in all JavaScript environments ? If not, how would you handle compatibility in older browsers ? // No only es-10 or later

  // Can Object.fromEntries() be used with non - array iterables, like strings or custom iterables ? // XXXX

  // How would you handle nested structures while using Object.fromEntries() ?
  
  example6(nestedEntries: any[]): any {
    const transformedEntries = this.transformNestedEntries(this.nestedEntries);
    const obj = Object.fromEntries(transformedEntries);
    console.log(obj);
  }


  transformNestedEntries(entries: any[]): any[] {
    return entries.map(([key, value]) => {
      if (Array.isArray(value) && value.every(Array.isArray)) {
        return [key, Object.fromEntries(this.transformNestedEntries(value))];
      }
      return [key, value];
    });
  }

}