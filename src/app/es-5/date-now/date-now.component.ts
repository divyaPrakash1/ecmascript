import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-date-now',
  templateUrl: './date-now.component.html',
  styleUrl: './date-now.component.scss'
})
export class DateNowComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // this.getTime();
    // this.getTimeMeasurement();
  }

  // What is Date.now() in JavaScript, and what does it return?
  // Answer : Date.now() is a static method in the Date object that returns the number of milliseconds since January 1, 1970, 00:00:00 UTC(the Unix epoch).It returns a timestamp as a number representing the current time in milliseconds.
  getTime() {
    const timInMSs = Date.now();
    console.log(timInMSs);  // E.g., 1674726521234
  }

  // What is the value returned by Date.now() used for?
  // Answer : The value returned by Date.now()(a timestamp in milliseconds) is commonly used for:
  // Measuring time intervals(e.g., calculating how long an operation takes).
  // Generating unique identifiers.
  // Comparing dates and times(for example, in time - based conditions).

  // Is Date.now() the same as new Date().getTime() ?
  // Answer : Yes, Date.now() is functionally equivalent to new Date().getTime().Both return the current timestamp in milliseconds, but Date.now() is more concise and slightly faster as it directly provides the timestamp without needing to create a Date object.
  getTimeWith() {
    console.log(Date.now());            // Outputs: 1674726521234
    console.log(new Date().getTime());  // Outputs: 1674726521234
  }

  // Can you use Date.now() for date formatting or manipulation ?
  // Answer : No, Date.now() returns a raw timestamp in milliseconds, not a Date object.To perform date formatting or manipulation, you would need to create a Date object using this timestamp or use libraries like moment.js or date - fns.
  checkDateTimeFor() {
    var timInMSs = Date.now();
    var date = new Date(timInMSs);
    console.log(date.toISOString());  // Outputs: "2025-01-27T00:00:00.000Z"
  }

  // How can you measure the duration of a code execution using Date.now() ?
  // Answer : You can use Date.now() to record the start time and end time of a code execution and then calculate the difference to measure how long a process took.
  getTimeForExecution() {
    var startTime = Date.now();
    // Some code that takes time
    var endTime = Date.now();
    var duration = endTime - startTime;
    console.log("Execution time: " + duration + "ms");
  }

  // How accurate is Date.now() for measuring time intervals in JavaScript ?
  // Answer : Date.now() is accurate to the millisecond but may not be precise enough for high - precision timing.For more accurate time measurements, especially in performance - sensitive scenarios, you should use performance.now()(which provides time with sub - millisecond precision).
  getTimeMeasurement() {
    console.log(Date.now());          // Millisecond precision
    console.log(performance.now());   // Sub-millisecond precision
  }
  
  // What would happen if you use Date.now() in a JavaScript loop for time - based logic ?
  // Answer : Date.now() will return the current timestamp at the moment it is called.Using it inside a loop can be useful for checking elapsed time or creating time - based conditions(like a timeout), but the value will only change after each loop iteration completes.For accurate time tracking, you would typically need to capture the start time and calculate the elapsed time between iterations.
  getTimeBasedLogic() {
    var startTime = Date.now();
    while (Date.now() - startTime < 5000) { // Loop runs for 5 seconds
      // Some code
    }
    console.log("Loop completed after 5 seconds.");
  }

  // Can Date.now() be affected by changes to the system clock?
  // Answer: Yes, Date.now() can be affected by changes to the system clock(e.g., if the user manually changes their computer’s date or time settings). This may lead to unexpected behavior when relying on Date.now() for time - based calculations over long periods.If you need to ensure consistency, consider using time sources that are less prone to manipulation, like a network-based time API.


  // What are the differences between Date.now() and performance.now()? When would you use each?
  // Date.now() returns the number of milliseconds since the Unix epoch(January 1, 1970).It's useful for general timestamping and working with dates and times.
  // performance.now() returns a high - resolution time in milliseconds, but with sub - millisecond precision and is relative to the time when the page was loaded(not the Unix epoch).It is ideal for measuring short time intervals with high precision(e.g., performance benchmarking).
  dateNowAndPerformanceNow() {
    console.log(Date.now());          // Millisecond precision, current timestamp
    console.log(performance.now());   // High precision, relative to the page load time
  }

  // How would you use Date.now() to generate unique identifiers in a system that requires high throughput ?
  // Answer : You can use Date.now() as part of a unique identifier by combining it with other factors, like a random number or counter.However, in systems that require high throughput and must ensure globally unique identifiers, you might want to use libraries like UUID to generate such identifiers.
  getUniqueId() {
    var uniqueId = Date.now() + "-" + Math.random().toString(36).substr(2, 9);
    console.log(uniqueId);  // Example: "1674726521234-df3as8f6n"
  }


  // What is the output of Date.now() in different time zones ?
  // Answer: If you run Date.now() on two systems located in different time zones(e.g., one in New York, one in London), both systems will return the same numerical value(i.e., the same millisecond count since January 1, 1970 UTC), even though the local date and time for each system may differ.
  // What performance benefits does using Date.now() have over creating a new Date object when you only need a timestamp ? // It is faster than other functions as it is straightforward
  // What is the precision of Date.now() in terms of its return value(i.e., milliseconds) ? // Using Date.now() (millisecond precision)

  // How would you compare two timestamps to check if an event has occurred within the last 10 minutes using Date.now() ?
  getEventIn10Minutes() {
    let eventTimestamp = Date.now() - 5 * 60 * 1000;  // 5 minutes ago
    let currentTimestamp = Date.now();
    let timeDifference = currentTimestamp - eventTimestamp;
    if (timeDifference <= 10 * 60 * 1000) {
      console.log("The event occurred within the last 10 minutes.");
    } else {
      console.log("The event occurred more than 10 minutes ago.");
    }

  }
  // If a user’s computer system time is incorrect, how might that affect the results of Date.now() ? // Date.now is using local time so time will be incorrect in case of computer system time is incorrect

}
