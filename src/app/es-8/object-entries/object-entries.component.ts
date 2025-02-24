import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-object-entries',
  templateUrl: './object-entries.component.html',
  styleUrl: './object-entries.component.scss'
})
export class ObjectEntriesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example1();
    // this.entriesKeysValues();
    // this.iterateEntries();
    // this.emptyObjects();
    // this.withMap();
    this.swapValue();
  }

  // What does the Object.entries() method do in JavaScript ?
  // ...The Object.entries() method in JavaScript returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
  // What is the return value of Object.entries() when applied to an object ?
  // How would you use Object.entries() to convert an object into an array of key - value pairs ?
  example1() {
    const obj = {
      name: 'Dadda',
      age: 45,
      address: 'Noida'
    }
    const entries = Object.entries(obj);
    console.log('entries', entries); // [[name, 'Dadda], [age, 45], [address, 'Noida]];
  }

  // How does Object.entries() differ from Object.keys() and Object.values() ?
  entriesKeysValues() {
    const obj = {
      name: 'Dadda',
      age: 45,
      address: 'Noida'
    }
    const entries = Object.entries(obj);
    console.log('entries', entries); // [[name, 'Dadda'], [age, 45], [address, 'Noida']];
    const keys = Object.keys(obj);
    console.log('keys', keys); // [name, age, address];
    const values = Object.values(obj);
    console.log('values', values); // ['Dadda', 45, 'Noida'];
  }

  // Can you iterate over the entries returned by Object.entries() ? If so, how would you do that ?
  iterateEntries() {
    const obj = {
      name: 'Dadda',
      age: 45,
      address: 'Noida'
    }
    Object.entries(obj).forEach(element => {
      element.forEach(e => console.log('aaaaaaaaaaaaaaaa', e));
    });

    Object.entries(obj).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  }

  // What will Object.entries() return if you apply it to an empty object ?
  emptyObjects() {
    const emptyObject: any = {};
    console.log(Object.entries(emptyObject)); // []
  }

  // Can Object.entries() be used on non - enumerable properties ? If not, how does it behave ?
  noCnat() {
    const obj: any = {};
    Object.defineProperty(obj, 'name', {
      value: 'Alice',
      enumerable: false  // Non-enumerable property
    });
    obj.age = 25;  // Enumerable property
    const entries = Object.entries(obj);
    console.log(entries);
    // Output: [ ['age', 25] ]
    // The non-enumerable 'name' property is not included.
  }

  // How can Object.entries() be combined with map() to transform the keys or values of an object ?
  withMap() {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    }
    const entries = Object.entries(obj)
      .map(([key, value], index) => [key.toUpperCase(), value * 2])
      .reduce((acc: any, [k, v]) => {
        acc[k] = v;
        return acc
      }, {});
    console.log('entries', entries);
  }

  // Can you use Object.entries() with objects that have symbols as keys ? If so, what is returned ? // XXXX

  // What is the time complexity of Object.entries() in terms of the number of properties in the object ? // 
  
  // How would you use Object.entries() to filter an object based on certain key - value criteria ?
  filterValue() {
    const obj = { a: 5, b: 15, c: 10, d: 20 };
    const filteredObj = Object.fromEntries(
      Object.entries(obj)
        .filter(([key, value]) => value > 10) // Filter values greater than 10
    );
    console.log(filteredObj);
    // Output: { b: 15, d: 20 }
  }

  // How would you use Object.entries() to swap the keys and values of an object ?
  swapValue() {
    const obj: any = { a: 5, b: 15, c: 10, d: 20 };
    const filteredObj = Object.fromEntries(
    Object.entries(obj)
      .map(([key, value]: any) => [key, value] = [value, key]) // Filter values greater than 10
    );
    console.log(filteredObj);
    // Output: { b: 15, d: 20 }
  }
}
