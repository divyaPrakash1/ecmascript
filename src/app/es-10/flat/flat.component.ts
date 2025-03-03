import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-flat',
  templateUrl: './flat.component.html',
  styleUrl: './flat.component.scss'
})
export class FlatComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example1();
    // this.example2();
    // this.example3();
    this.example4();
    this.example6();
    const nestedArray = [1, [2, [3, [4, [5]]]]];
    this.example5(nestedArray);
  }

  // What does the Array.prototype.flat() method do?
  // ...The Array.prototype.flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  // How do you use the Array.prototype.flat() method to flatten a nested array ?
  // How would you use the Array.prototype.flat() method to completely flatten a deeply nested array ?
  example1() {
    const nestedArray = [1, [2, [3, [4, [5, 6]]]]];
    const flattnedArray = nestedArray.flat(Infinity);
    console.log('flattnedArray', flattnedArray);
  }

  // What is the default depth used by the Array.prototype.flat() method if no argument is provided ?
  // ...The default depth is 1. This means if no argument is provided, the flat() method will only flatten the array one level deep.
  example2() {
    const nestedArray = [1, [2, [3, [4, [5, 6]]]]];
    const flattnedArray = nestedArray.flat();
    console.log('flattnedArray', flattnedArray);
  }

  // Can the Array.prototype.flat() method remove empty slots from an array ?
  // ...Yes
  example3() {
    const nestedArray = [1, [2, [3, [4, [5, [,]]]]]];
    const flattnedArray = nestedArray.flat(Infinity);
    console.log('flattnedArray', flattnedArray); // [1,2,3,4,5]
  }

  // How does the Array.prototype.flat() method differ from Array.prototype.reduce() when flattening arrays ?
  example4() {
    const nestedArray = [1, [2, [3, [4, [5, [,]]]]]];
    const flattnedArray = nestedArray.flat(Infinity);
    console.log('flattnedArray', flattnedArray); // [1,2,3,4,5]
  }

  // with reduce
  example5(nestedArray: any[]) {
    // const nestedArray = [1, [2, [3, [4, [5]]]]];
    const flattnedArray = nestedArray.reduce((accu, cv) => Array.isArray(cv) ? accu.concat(this.example5(cv)) : accu.concat(cv), []);
    //                      arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    console.log('flattnedArray', flattnedArray); // [1,2,3,4,5]
  }

  // Are there any limitations or performance considerations when using the Array.prototype.flat() method on large arrays ?

  // Provide an example of using Array.prototype.flat() with different depth levels.
  example6() {
    const nestedArray = [1, [2, [3, [4, [5, [,]]]]]];
    const firstLevel = nestedArray.flat();
    const secondLevel = nestedArray.flat(2);
    const thirdLevel = nestedArray.flat(3);
    const fourthLevel = nestedArray.flat(4);
    console.log('flattnedArray', firstLevel, secondLevel, thirdLevel, fourthLevel); // [1,2,3,4,5]
  }

  // How does Array.prototype.flat() handle non - array elements within the array ?
  example7() {
    const mixedArray = [1, [2, 3], [4, [5, 6]], 7, [8, [9, 10]]];
    const flattenedArray = mixedArray.flat(1);
    console.log(flattenedArray); // Output: [1, 2, 3, 4, [5, 6], 7, 8, [9, 10]]
  }

  // Can you use the Array.prototype.flat() method to flatten arrays containing objects ? Provide an example.
  example8() {
    const nestedArray = [{ a: 1 }, [{ b: 2 }, [{ c: 3 }, { d: 4 }]]];

    const flatArray = nestedArray.flat(2); // You can specify the depth you want to flatten the array
    console.log(flatArray); // Output: [ { a: 1 }, { b: 2 }, { c: 3 }, { d: 4 } ]

}
  // What is the time complexity of the Array.prototype.flat() method ?

  // How does Array.prototype.flat() compare to other methods for array flattening in terms of readability and performance ?

}
