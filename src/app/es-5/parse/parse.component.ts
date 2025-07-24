import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-parse',
  templateUrl: './parse.component.html',
  styleUrl: './parse.component.scss'
})
export class ParseComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.parseString();
    // this.parsedNonStringValue();
    // const validJSON = '{"name": "Alice", "age": 25}';
    // const invalidJSON = "{name: 'Alice'}";
    // this.handleJSONWithErrorhandling(validJSON);
    // this.handleJSONWithErrorhandling(invalidJSON);
    // this.parsedStrings();
    this.doubleNumeric();
  }

  //   What is JSON.parse used for in JavaScript ?
  // JSON.parse is used to convert a JSON string into a corresponding JavaScript object or value
  mainMethod() {
    const jsonString = '{"name": "Alice", "age": 30, "isStudent": false}';
    const parsedObject = JSON.parse(jsonString);
    console.log(parsedObject);
    // Output: { name: 'Alice', age: 30, isStudent: false }
    console.log(parsedObject.name); // Output: Alice
    console.log(parsedObject.age);  // Output: 30
  }

  // What is the difference between JSON.parse and JSON.stringify ?
  // JSON.parse is used to convert a JSON string into a corresponding JavaScript object or value while JSON.stringify is used to convert value or object into a string format

  // What will happen if you pass invalid JSON to JSON.parse ?
  // const invalidJSON = "{'name': 'Alice'}"; // Invalid: JSON strings must use double quotes throws an error

  // What type of data does JSON.parse return?
  // It can return all possible data type based on the structure and content of the JSON string being parsed


  //   How would you parse the following JSON string into a JavaScript object ?
  parseString() {
    //   { "name": "Alice", "age": 30, "hobbies": ["reading", "swimming"] }
    const parsedStr = JSON.parse('{"name": "Alice", "age": 30, "hobbies": ["reading", "swimming"]}');
    console.log('parsedStr', parsedStr);
  }

  //   What happens if JSON.parse is called on a non - string value, like a number or null ?
  parsedNonStringValue() {
    const number1 = '34';
    const nulll = 'null'
    const number11 = JSON.parse(number1);
    const nullll = JSON.parse(nulll);
    console.log('number11', number11, 'nullll', nullll);

  }

  //   How would you handle errors while parsing JSON using JSON.parse?
  handleJSONWithErrorhandling(jsonOnject: string | Object | any) {
    try {
      const parsedString = JSON.parse(jsonOnject);
      console.log('Successfully Parsed', parsedString);
    } catch (error) {
      const parsedString = JSON.parse(jsonOnject);
      console.log('Error in parsing string', error);
    }
  }

  //   How can you use JSON.parse to safely parse JSON with a fallback for invalid data ?
  //   How would you use JSON.parse to validate whether a string is in valid JSON format ?
  copyOfHandleJSONWithErrorhandling(jsonOnject: string | Object | any) {
    try {
      const parsedString = JSON.parse(jsonOnject);
      console.log('Successfully Parsed', parsedString);
    } catch (error) {
      const parsedString = JSON.parse(jsonOnject);
      console.log('Error in parsing string', error);
    }
  }

  //   What are the potential risks of using JSON.parse on untrusted data? XXXX
  //   How would you parse a JSON string with nested objects and arrays ? Provide an example
  parseNestedData() {
    const jsonString = `
{
  "user": {
    "id": 101,
    "name": "Alice",
    "email": "alice@example.com",
    "address": {
      "street": "123 Main St",
      "city": "Wonderland",
      "zip": "12345"
    }
  },
  "orders": [
    {
      "orderId": 1,
      "items": ["apple", "banana", "cherry"],
      "total": 25.5
    },
    {
      "orderId": 2,
      "items": ["grape", "orange"],
      "total": 15.0
    }
  ]
}
`;

    try {
      // Parse the JSON string
      const data = JSON.parse(jsonString);

      // Access nested data
      console.log("User Name:", data.user.name); // Output: Alice
      console.log("User City:", data.user.address.city); // Output: Wonderland
      console.log("First Order Total:", data.orders[0].total); // Output: 25.5
      console.log("Items in Second Order:", data.orders[1].items); // Output: [ 'grape', 'orange' ]

      // Loop through the orders array
      data.orders.forEach((order: { orderId: any; items: any[]; total: any; }, index: number) => {
        console.log(`Order ${index + 1} ID:`, order.orderId);
        console.log(`Items:`, order.items.join(", "));
        console.log(`Total: $${order.total}`);
      });
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }

  //   What is the second parameter of JSON.parse used for, and how does it work ? Provide an example.
  //   Write an example where JSON.parse is used with a reviver function to convert date strings into Date objects.
  //   How would you handle parsing a JSON string where the data is incomplete, like {
  //   "name": "Alice", "age": ?
  //   Demonstrate a scenario where JSON.parse could throw a SyntaxError, and explain how to handle it.
  //   Write a function that safely parses a JSON string and returns a default object if the parsing fails.
  parameterBeingUsedInJSONParse() {
    // key: The key of the current property being processed.
    // value: The value of the current property being processed.

    const jsonString = `
{
  "name": "Alice",
  "age": 30,
  "isActive": "true",
  "joinDate": "2025-01-01T00:00:00Z"
}`;

    const parsedData = JSON.parse(jsonString, (key, value) => {
      if (key === "isActive") {
        return value === "true"; // Convert "true"/"false" strings to boolean
      }
      if (key === "joinDate") {
        return new Date(value); // Convert date strings to Date objects
      }
      return value; // Leave other values unchanged
    });

    console.log(parsedData);
    // Output: { name: 'Alice', age: 30, isActive: true, joinDate: 2025-01-01T00:00:00.000Z }
    console.log(parsedData.joinDate instanceof Date); // Output: true
  }

  //   How does JSON.parse handle duplicate keys in JSON objects ?
  parsedDuplicateValue() {
    // The last occurrence of a duplicate key takes precedence, and its value overwrites the previous ones.
    const jsonString = '{"key": "value1", "key": "value2"}';
    const parsedObject = JSON.parse(jsonString);
    console.log(parsedObject);
    // Output: { key: 'value2' }
  }

  //   Explain the difference in behavior of JSON.parse when used with valid JSON strings versus malformed JSON strings.
  checkJSON() {
    const validJSON = '{"name": "John", "age": 30}';
    const obj = JSON.parse(validJSON);  // { name: "John", age: 30 }

    const malformedJSON = '{"name": "John", age: 30}';  // Missing quotes around age
    try {
      const obj = JSON.parse(malformedJSON);
    } catch (e) {
      console.error("Invalid JSON:", e);  // SyntaxError: Unexpected token a in JSON at position 14
    }
  }

  //   Parse the following JSON string and extract the value of the "email" field:
  // {
  //   "user": {
  //     "id": 1,
  //       "name": "John Doe",
  //         "email": "john.doe@example.com"
  //   }
  // }
  parsedStrings() {
    const tempStr = `{
      "user": {
        "id": 1,
          "name": "John Doe",
            "email": "john.doe@example.com"
      }
    }`;
    const parsedStrr = JSON.parse(tempStr)
    console.log('parsedStr', parsedStrr.user.email);
  }


  //   Given the following JSON string, use JSON.parse with a reviver to double all numeric values
  //   { "a": 1, "b": 2, "c": { "d": 3, "e": 4 } }

  doubleNumeric() {
    const strt = '{ "a": 1, "b": 2, "c": { "d": 3, "e": 4 } }';
    const doubleNumeri = JSON.parse(strt, (key, value) => {
      if (typeof value === 'number') {
        return value * 2;
      }
      return value
    })
    console.log('aaaaaaaaaaaaaaaa', doubleNumeri);
  }


  //   What are some common pitfalls when working with JSON.parse ?
  // ..Missing or Extra Commas:
  // ..const invalidJSON = '{"name": "John", "age": 30,}'; // Trailing comma after 30
  // ..JSON.parse(invalidJSON);  // Throws SyntaxError

  // ..Improper Quotation Marks:
  // ..const invalidJSON = "{'name': 'John'}";  // Invalid because of single quotes
  // ..JSON.parse(invalidJSON);  // Throws SyntaxError

  //   Why should you be cautious when parsing JSON from external or user - provided data ? // XXXX
  //   How is JSON.parse different from eval in terms of security and functionality ?  // XXXX

  //   Can you parse a JSON string that contains a function definition using JSON.parse?Why or why not?
  parsedFunction() { // No
    const invalidJSON = '{"name": "John", "greet": function() { return "Hello, " + this.name; }}';

    try {
      const parsed = JSON.parse(invalidJSON); // This will throw an error
    } catch (e) {
      console.error(e);  // SyntaxError: Unexpected token f in JSON at position 23
    }
  }

  //   What are some real-world use cases where JSON.parse is heavily used in JavaScript ? // API

  //   How would you use JSON.parse in a fetch request to process a JSON response ? Provide a code example. // XXXX
  //   If you receive a large JSON payload, what strategies can you use to parse and process the data efficiently ? // XXXX 

  //   Can JSON.parse handle comments inside JSON ? If not, how would you handle JSON strings with comments ? // Not Allowed
  parsedWithComment() {
    const jsonWithComments = `{
  "name": "John",  // User name
  "age": 30,       /* User age */
  "isActive": true
}`;

    const cleanJson = this.removeComments(jsonWithComments);

    const parsedObject = JSON.parse(cleanJson);

    console.log(parsedObject);
    // Output: { name: 'John', age: 30, isActive: true }
  }

  removeComments(jsonString: any) {
    // Remove single-line (//) and multi-line (/* */) comments
    return jsonString.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, '');
  }


}
