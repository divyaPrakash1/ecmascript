import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-date-tojson',
  templateUrl: './date-tojson.component.html',
  styleUrl: './date-tojson.component.scss'
})
export class DateTOJSONComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
    // this.getDateJSON();
    this.overrideDateTOJSON();
  }


  // What is the purpose of the Date.toJSON() method in JavaScript ?
  // Follow - up : How does Date.toJSON() differ from Date.toISOString() ?
  getDateJSON() {
    const date = new Date('2025-01-28T12:00:00Z');
    console.log(date.toJSON());
    // Output: "2025-01-28T12:00:00.000Z"
  }

  // What is the return value of Date.toJSON() ? // return the date in a format that is suitable for serialization, especially when preparing a Date object for storage or transmission (e.g., in APIs or when saving to a database).
  // Follow - up : How does it compare to calling JSON.stringify() on a Date object directly ?

  // How would Date.toJSON() behave when called on an invalid Date object(e.g., one representing NaN) ?
  // Follow - up : What would Date.toJSON() return for a Date object created with new Date('invalid-date-string') ?
  parseInvalidDateTOJSON() {
    const invalidDate = new Date('invalid-date-string');
    console.log(invalidDate.toJSON());  // Output: null
  }

  // Can Date.toJSON() be overridden ? If so, how ?
  // Follow - up : Why would you want to override the toJSON() method in a custom object ?
  overrideDateTOJSON() {
    Date.prototype.toJSON = function () {
      // Custom logic, for example, return the date as a custom format
      return `Custom Date Format: ${this.getFullYear()}-${this.getMonth() + 1}-${this.getDate()}`;
    };
    // Test the override
    const date = new Date();
    console.log(date.toJSON());  // Output: Custom Date Format: 2025-1-28 (depends on the current date)
  }
  
  // How does Date.toJSON() interact with JSON.stringify() ?
  // Follow - up : What happens when you pass a Date object to JSON.stringify() ? How is Date.toJSON() involved in the process ?

  // Does Date.toJSON() always return the date in UTC ? Explain why.
  // Follow - up: How does the time zone affect the string returned by Date.toJSON() ?
  
  // When might Date.toJSON() be particularly useful in an application ?
  // Follow - up : Can you think of a scenario where using Date.toJSON() would be preferable over Date.toISOString() ?
  
  // How would you use Date.toJSON() to prepare a date for storage in a database or an API response ?
  // Follow - up : What are the benefits of using Date.toJSON() in such scenarios ?
  
  // How would Date.toJSON() behave if the Date object represents a date before January 1, 1970 ?
  // Follow - up : Would the string returned by Date.toJSON() be different for such dates ?
  
  // What happens if you call Date.toJSON() on a Date object that represents a leap year date, like February 29 ?
  // Follow - up : How does Date.toJSON() handle leap years and extra days like February 29 ?
  
  // Can you compare the behavior of Date.toJSON() with Date.toLocaleString() or Date.toISOString() in terms of formatting and use cases ?
  // Follow - up : Why would you choose Date.toJSON() over other date methods when preparing data for API responses or saving to a database ?
  
  // What would the output of Date.toJSON() be if the date object represents the Unix epoch(new Date(0)) or null ?
  // Follow - up : How does Date.toJSON() represent edge cases like the Unix Epoch ?
  
  // Does calling Date.toJSON() mutate the Date object itself ?
  // Follow - up : How does calling toJSON() affect the original Date object, if at all ?
  
  // How would you implement a custom toJSON() method for a custom object that also includes a Date property ?
  // Follow - up : How would you ensure that the Date property in your custom object is serialized correctly ?

}
