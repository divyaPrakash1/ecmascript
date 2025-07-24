import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-stringify',
  templateUrl: './stringify.component.html',
  styleUrl: './stringify.component.scss'
})
export class StringifyComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.passDate();
    // this.spaceParameter();
    this.serializingJSON();
  }


  //   What is JSON.stringify() in JavaScript ?
  //   Answer : JSON.stringify() is a method used to convert a JavaScript object or value to a JSON string.It is commonly used for serializing objects to send them over HTTP or to save them in a file.
  
  // What does JSON.stringify() return?
  // Answer : It returns a JSON - formatted string representation of the provided JavaScript value(such as an object, array, or primitive value).
  
  // Can you use JSON.stringify() on a function or undefined ?
  // Answer : No, JSON.stringify() cannot serialize functions or undefined.Functions are omitted when encountered, and undefined is converted to null in objects, but it is excluded from arrays.

  // What happens when you pass a Date object to JSON.stringify() ?
  // Answer : When you pass a Date object to JSON.stringify(), it converts the date to an ISO 8601 string(e.g., "2025-01-01T00:00:00.000Z").
  passDate() {
    const date = new Date();
    console.log(JSON.stringify(date));  // Outputs an ISO date string
  }

  // Can JSON.stringify() handle circular references?
  // Answer: No, JSON.stringify() throws a TypeError if the object contains circular references(e.g., when an object refers to itself).You need to handle circular references manually or use a custom solution like JSON.stringify() with a replacer function.

  // What is the replacer parameter in JSON.stringify() ?
  // Answer : The replacer is an optional parameter that can be either a function or an array.If it’s a function, it allows you to modify the key - value pairs before they are serialized.If it’s an array, it specifies which keys to include in the output string.
  replacerStringify() {
    const obj = { name: 'John', age: 30 };
    const jsonString = JSON.stringify(obj, (key, value) => {
      if (key === 'age') return undefined // omit 'age'
      return value;
    })
    console.log(jsonString); // {"name":"John"}
  }

  // What is the space parameter in JSON.stringify() ?
  // Answer : The space parameter is an optional argument that adds indentation(spaces or tabs) to the output string to make it more readable.It can either be a number(the number of spaces) or a string(such as a tab character).
  spaceParameter() {
    const obj = { name: 'John', age: 30 };
    const jsonString = JSON.stringify(obj, null, 12);  // Indented with 12 spaces
    console.log(jsonString);
  }

  // How does JSON.stringify() handle NaN and Infinity?
  // Answer: JSON.stringify() converts NaN and Infinity to null in the resulting JSON string.
  handleNullAndInfinite() {
    const obj = { value: NaN };
    console.log(JSON.stringify(obj));  // {"value":null}
  }

  // What is the output of JSON.stringify() when applied to undefined in an object ?
  // Answer : When undefined is encountered in an object, it is omitted from the string.For example, properties with undefined values are not included in the JSON string, but if undefined is in an array, it is converted to null.
  handleUndefined() {
    const obj = { name: "John", age: undefined };
    console.log(JSON.stringify(obj));  // {"name":"John"}

    const arr = [1, undefined, 2];
    console.log(JSON.stringify(arr));  // [1,null,2]
  }

  // How can you prevent JSON.stringify() from serializing certain properties ?
  // Answer : You can use the replacer parameter to filter out properties that you don't want to serialize.
  serializingJSON() {
    const obj = { name: 'John', password: '12345' };
    const jsonStr = JSON.stringify(obj, (key, value) => {
      if (key === 'password') return undefined;
      return value
    })
    console.log('jsonstring', jsonStr); // '{ "name": "John"}'
  }

  // What is the impact of using JSON.stringify() on large objects or deep structures ?
  // Answer : JSON.stringify() can be inefficient for very large or deeply nested objects.It can lead to performance bottlenecks, especially when dealing with large amounts of data or deeply nested structures.In such cases, it may be better to use streaming serialization methods or reduce the object size before serializing.

  // What happens when you JSON.stringify() an object with a non - enumerable property ?
  // Answer : JSON.stringify() ignores non - enumerable properties when serializing an object.These properties will not appear in the resulting JSON string.
  stringifyNonEnumerableProp() {
    const obj = {};
    Object.defineProperty(obj, 'hidden', { value: 42, enumerable: false });
    console.log(JSON.stringify(obj));  // {}
  }

  // How would you handle serializing objects with large datasets(e.g., for performance optimization) using JSON.stringify() ?
  // Answer : To optimize performance with large datasets:
  // Only serialize necessary properties(using the replacer function).
  // Avoid deep nesting if possible, or serialize smaller chunks of data.
  // Consider using libraries like JSON5 for handling more complex scenarios.
  // Use circular - json or other libraries for handling circular references if necessary.

}
