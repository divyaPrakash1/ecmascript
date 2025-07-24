import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-array-includes',
  templateUrl: './array-includes.component.html',
  styleUrl: './array-includes.component.scss'
})
export class ArrayIncludesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.searchNullAndUndefined();
  }


  // Basic Understanding
  // Q1: What is the purpose of the includes() method in JavaScript arrays ? How does it work ?
  // ...The includes() method is used to check whether a certain element exists in an array. It returns a boolean (true or false), indicating whether the specified element is found in the array.
  // ...array.includes(element, startIndex)
  example1() {
    const fruits = ['apple', 'banana', 'cherry', 'apple'];
    console.log(fruits.includes('apple', 2));  // true, starting the search from index 2
    console.log(fruits.includes('banana', 3)); // false, starting the search from index 3
  }

  // Q2 : How does includes() differ from indexOf() when checking for the presence of an element in an array ? // Includes return boolen value while indexOf returns index of the element return -1 in case element isn't present in array

  
  // Edge Cases and Special Scenarios
  // Q3 : Can you explain the behavior of includes() when dealing with NaN ? How does it behave differently compared to === comparison ? [NaN].includes(NaN) // true
  // Q4: What happens when you use includes() to search for undefined or null in an array ? Provide an example.
  // Q5: How does includes() behave when searching for NaN in an array ? Give an example showing this behavior.
  searchNullAndUndefined() {
    const arr = [1, 2, null, undefined, NaN];
    console.log(arr.includes(NaN)) // true
    console.log(arr.includes(null)) // true
    console.log(arr.includes(undefined)) // true
  }
  
  
  // Q6: If you use includes() on an array of objects, how does it determine whether an object is "included" ? Does it compare by reference or by value ?
  // ...In JavaScript, objects are reference types, meaning that when you create an object and compare it, you are comparing memory addresses (references), not the actual content of the object.
  // ...This is different from primitive types like numbers, strings, and booleans, which are compared by their value.
  // Q11: Can you use includes() on objects that are not arrays, such as a string or a Set ? If yes, how does it work in those cases ?
  // Q12 : What would happen if you tried to use includes() on a non - array object or a value that isn't iterable (e.g., a plain object)? What kind of error, if any, would occur?
  onjectReference() {
    const obj1 = { name: 'Alice', age: 25 };
    const obj2 = { name: 'Bob', age: 30 };
    const obj3 = { name: 'Alice', age: 25 };
    const arr = [obj1, obj2];
    console.log(arr.includes(obj1)); // true, because `obj1` is the exact object reference in the array
    console.log(arr.includes(obj2)); // true, because `obj2` is the exact object reference in the array
    console.log(arr.includes(obj3)); // false, because `obj3` has the same properties as `obj1`, but is a different object reference

    // obj1.includes('abc') // Property 'includes' does not exist on type '{ name: string; age: number; }'.ts(2339)
  }


  // Performance Considerations
  // Q7: How does the performance of includes() compare to indexOf() ? Are there any scenarios where one is better than the other in terms of performance ?
  performandceRe() {
    const arr = [NaN];
    console.log(arr.includes(NaN)); // true, because includes() considers NaN equal to NaN
    console.log(arr.indexOf(NaN));  // -1, because indexOf() does not consider NaN equal to NaN
  }

  // Q8 : How would you handle large arrays when using includes() in performance - critical applications ? Are there any optimizations you would consider ? // XXXX
  
  // Practical Use Cases
  // Q9: In which situations would you prefer using includes() over methods like indexOf() or find() ? // where only needs to check whether element is present in array or not
  
  // Q10 : How can you use includes() to validate user input, such as ensuring a certain value exists in a predefined list of valid options ?
    
  
  // Advanced Scenarios
  
  // Q14 : How does includes() behave when checking for the presence of an object or array with mixed data types, such as numbers and strings, in an array ?
  // Q16: What happens when includes() is used with an array of mixed data types(e.g., numbers and strings) ? How would you handle comparisons that might lead to unexpected results ?
  // Q17 : Can you give an example where using includes() in JavaScript might lead to a logical error or unintended behavior ? How would you mitigate this issue 
  // Q18 : What is the behavior of includes() when it is used with an array that contains false or null as an element ? How do you check if false is correctly included in an array ?
  // Q19: What does Array.prototype.includes() return if you search for a value that is not present in an empty array ? Provide an example.
  // Q20: How would you handle scenarios where includes() might give unexpected results due to floating - point precision errors when searching for numerical values ?
  withMixDataType() {
    const arr: any = [1, 2, 3, 4, 5, 'a', undefined, null, '', NaN, 0.1 + 0.2, 0.3];
    console.log(arr.includes('a'));
    console.log(arr.includes(5));
    console.log(arr.includes(NaN));
    console.log(arr.includes('Dadda'));
    console.log(arr.includes(0.3));  // false
  }
  
  // Q15 : If you were asked to search for a deep nested property in an array of objects using includes(), how would you approach the problem ? Would you recommend using includes() in such cases ?
  // ... No Can't
  serachDeepNested() {
    const users = [
      { id: 1, profile: { name: 'Alice', age: 30 } },
      { id: 2, profile: { name: 'Bob', age: 25 } },
    ];
    // console.log(users.includes({ profile: { name: 'Alice', age: 30 } })); // false
    // Check if any user has a name 'Alice'
    const exists = users.some(user => user.profile.name === 'Alice');
    console.log(exists); // true
  }

  


}
