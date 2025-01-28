import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-date-to-isostring',
  templateUrl: './date-to-isostring.component.html',
  styleUrl: './date-to-isostring.component.scss'
})
export class DateToISOStringComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    // this.getISOString();
    // this.convertISOTOOriginalThenISODate();
    // this.compareTwoDate();
    this.getBefore1970();
  }

  // What does the Date.toISOString() method return?
  // Answer: Pattern - YYYY-MM-DDTHH:mm:ss.sssZ The Date.toISOString() method in JavaScript returns a string representing the date in the ISO 8601 extended format, which is always in UTC (Coordinated Universal Time).
  // YYYY is the 4 - digit year.
  // MM is the 2 - digit month(01 - 12).
  // DD is the 2 - digit day of the month(01 - 31).
  // T separates the date and time portions.
  // HH is the 2 - digit hour(00 - 23) in 24 - hour format.
  // mm is the 2 - digit minute(00 - 59).
  // ss is the 2 - digit second(00 - 59).
  // .sss is the 3 - digit millisecond(000 - 999).
  // Z indicates that the time is in UTC(i.e., no time zone offset).
  getISOString() {
    const date = new Date();
    const isoString = date.toISOString();
    console.log(isoString);
  }

  // How is the output of Date.toISOString() formatted ? // YYYY-MM-DDTHH:mm:ss.sssZ

  // What time zone does Date.toISOString() use when formatting the date ? // ISO TimeZone

  // Can you explain the difference between Date.toISOString() and Date.toString() ?
  // Date.toISOString() Purpose: Mainly used for machine - readable timestamps, especially in APIs or when storing dates in databases(because it’s standardized and unambiguous).
  // Date.toString() Purpose: Primarily used for human - readable date and time representations in the local context(for displaying to users).
  dateToISOStringAndToString() {
    const date1 = new Date();
    const isoString = date1.toISOString();
    console.log(isoString);  // Output: "2025-01-28T16:32:45.123Z"

    const date = new Date();
    const str = date.toString();
    console.log(str);  // Output: "Tue Jan 28 2025 16:32:45 GMT-0500 (Eastern Standard Time)"
  }

  // What will Date.toISOString() return if the Date object is set to an invalid date ? // "Invalid Date"
  printInvalidDate() {
    // new Date(2025, 13, 1) would be invalid because the month index is out of range; months are from 0 to 11)
    const invalidDate1 = new Date("2025-02-31"); // Invalid date
    console.log(invalidDate1.toISOString()); // Output: "Invalid Date"

    const invalidDate2 = new Date("abc"); // Invalid date string
    console.log(invalidDate2.toISOString()); // Output: "Invalid Date"
  }

  // How would you use Date.toISOString() to log the current date and time in ISO 8601 format ?
  logCurrentDate() {
    const date1 = new Date();
    const isoString = date1.toISOString();
    console.log(isoString);  // Output: "2025-01-28T16:32:45.123Z"
  }

  // In what situations would you prefer Date.toISOString() over other Date methods like Date.toLocaleString() ?
  // If use Date.toISOString() in case of UTC time and milisecond, And use Date.toLocaleString() in case of Local system time 

  // How would you convert a Date object into an ISO string and then back into a Date object ?
  convertISOTOOriginalThenISODate() {
    const date = new Date();
    const isoDate = date.toISOString();
    console.log('isoDate', isoDate);

    const originalDate = new Date(isoDate);
    console.log('originalDate', originalDate);
  }
  // If you need to store timestamps in a database, why might you choose to store them in ISO 8601 format ? // As it is ISO timezone then there is no need to check utc time

  // Can you use Date.toISOString() to compare two different dates ? If so, how would you do it ?
  compareTwoDate() {
    const date1 = new Date('2025-01-28T10:00:00Z');  // January 28, 2025 10:00:00 UTC
    const date2 = new Date('2025-01-29T15:00:00Z');  // January 29, 2025 15:00:00 UTC

    const isoString1 = date1.toISOString();
    const isoString2 = date2.toISOString();

    if (isoString1 > isoString2) {
      console.log(`Date1 is greater than Date2`);
    } else if (isoString1 == isoString2) {
      console.log(`Date1 is equal to Date2`)
    } else {
      console.log(`Date1 is less than Date2`);
    }
  }
      
  // What happens if you call Date.toISOString() on a date object that represents a time before January 1, 1970 ?
  // Still it will return a valid date 
  // If needs to get before 1970 then needs to pass negative timestamp in new Date(negativeTimestamp)
  getBefore1970() {
    const dateBeforeEpoch = new Date(-1000000000000);  // Time before January 1, 1970
    console.log(dateBeforeEpoch.toISOString());
  }

  // What is the return value of Date.toISOString() if you create a Date object using new Date(0)(the Unix Epoch) ? // const epochDate = new Date(0);  // January 1, 1970 00:00:00 UTC
      
  // What would Date.toISOString() return for a Date object representing null or undefined ?
  withNullAndUndefined() {
    // const invalidDate1 = null;
    // console.log(invalidDate1.toISOString()); // TypeError: Cannot read property 'toISOString' of null

    // const invalidDate2 = undefined;
    // console.log(invalidDate2.toISOString()); // TypeError: Cannot read property 'toISOString' of undefined


  }

  // What would the output of Date.toISOString() be if you pass in a Date object for a leap year ?
  leapYear() {
    const leapYearDate = new Date('2024-02-29T00:00:00Z'); // February 29, 2024, in UTC
    console.log(leapYearDate.toISOString());
  }
}
