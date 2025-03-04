import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-flat-map',
  templateUrl: './flat-map.component.html',
  styleUrl: './flat-map.component.scss'
})
export class FlatMapComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example1();
    // this.example2();
    // this.example3();
    // this.example4();
    // this.example5();
    // this.example6();
    // this.example7();
    this.example8();
  }

  // What does the Array.prototype.flatMap() method do?
  // Provide an example of using Array.prototype.flatMap() with a function that returns an array.
  example1() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const doubledAndFlattned = numbers.flatMap((e) => [e * 2]);
    console.log('doubledAndFlattned', doubledAndFlattned);
  }
  
  // How does the Array.prototype.flatMap() method differ from Array.prototype.map() ?
  example2() {
    const numbers = [1, 2, 3, 4];
    const mapWithNumber = numbers.map(x => [x, x * 2, x*3]);
    console.log('mapWithNumber', mapWithNumber); // [[1,2,3], [2,4,6], [3,6,9], [4,8,12]]
    const flatMapWithNumber = numbers.flatMap(x => [x, x * 2, x*3]);
    console.log('flatMapWithNumber', flatMapWithNumber); // [1,2,3,2,4,6,3,6,9,4,8,12]
  }
  
  // Provide an example of using Array.prototype.flatMap() to flatten an array of arrays.
  example3() {
    const nestedArray = [[1, 2], [3, 4], [5, 6]];
    const flattnedArray = nestedArray.flatMap(e => e);
    console.log('flattnedArray', flattnedArray); // [1,2,3,4,5,6];
  }
  
  // How can you use Array.prototype.flatMap() to achieve the same result as Array.prototype.flat() followed by Array.prototype.map() ?
  // How does Array.prototype.flatMap() improve readability and performance compared to using separate map() and flat() calls ?
  example4() {
    const numbers = [1, 2, 3, 4];
    const withFlatMap = numbers.flatMap(x => [x, x * 2]); 
    console.log('withFlatMap', withFlatMap); // [1,2,2,4,3,6,4,8]
    const withMapAndFlat = numbers.map(x => [x, x * 2]).flat();
    console.log('withMapAndFlat', withMapAndFlat); // [1,2,2,4,3,6,4,8]
  }
  
  // What is the default depth to which Array.prototype.flatMap() flattens the array ?
  // ...Only for one lavel
  // ...For deeper flattening, you would need to use Array.prototype.flat() after flatMap() or directly use flat() with a specified depth.
  example5() {
    const nestedArray = [[1, 2], [3, 4], [5, 6]];
    const flattenedArray = nestedArray.flatMap(innerArray => innerArray);
    console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
    
    const deeperNestedArray = [[1, [2, 3]], [4, [5, 6]]];
    const flattenedArray1 = deeperNestedArray.flatMap(innerArray => innerArray);
    console.log(flattenedArray1); // Output: [1, [2, 3], 4, [5, 6]]
  }
  
  // Can you use Array.prototype.flatMap() to remove empty slots from an array ? Provide an example.
  // How does Array.prototype.flatMap() handle empty sub - arrays or null / undefined values within the array ?
  example6() {
    const arrayWithEmptySlots = [1, , 2, , 3, , 4];
    const cleanedArray = arrayWithEmptySlots.flatMap(e => !!e ? [e] : []);
    console.log('cleanedArray', cleanedArray);
  }

  // How does the Array.prototype.flatMap() method handle nested arrays within the mapping function?
  example7() {
    const numbers = [1, 2, 3];
    const result1 = numbers.flatMap(x => [x, x * 2]); // [1,2,2,4,3,6]
    const result2 = numbers.flatMap(x => [[x], [x * 2]]); // [[1],[2],[2],[4],[3],[6]]
    const result3 = numbers.flatMap(x => [[[x]], [[x * 2]]]); // [[[1]], [[2]], [[2]], [[4]], [[3]], [[6]]]
    const result4 = numbers.flatMap(x => [[[[x]]], [[[x * 2]]]]); // [[[[1]]], [[[2]]], [[[2]]], [[[4]]], [[[3]]], [[[6]]]]
    console.log('result1', result1);
    console.log('result2', result2);
    console.log('result3', result3);
    console.log('result4', result4);
  }


  // What are the limitations of using Array.prototype.flatMap() when dealing with deeply nested arrays ?
  // ...It can flat only one level

  // Explain the behavior of Array.prototype.flatMap() when the mapping function returns non - array values.
  example8() {
    const arr = [1, 2, 3];
    const result1 = arr.flatMap(x => x * 2);
    console.log(result1); // Output: [2, 4, 6]

    const result2 = arr.flatMap(x => [{value: x}]);
    console.log(result2); // Output: [{ value: 1 }, { value: 2 }, { value: 3 }]

    const result3 = arr.flatMap(x => [x === 2 ? 'even' : x]);
    console.log(result3); // [1,'even, 3]
  }
  
  
}
