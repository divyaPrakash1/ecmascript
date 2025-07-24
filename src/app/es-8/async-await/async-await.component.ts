import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-async-await',
  templateUrl: './async-await.component.html',
  styleUrl: './async-await.component.scss'
})
export class AsyncAwaitComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {

  }


  // What is the purpose of async and await in JavaScript ?
  // How does async / await improve the readability and maintainability of asynchronous code compared to callbacks or promises ?
  // Can you explain how async functions work and what happens under the hood when an async function is called ?
  // What is the return value of an async function, and how does it relate to Promise ?
  // How does await work inside an async function, and what happens if you try to use await outside of an async function?
  // What happens if an error is thrown inside an async function? How do you handle errors when using async/await?
  // Can you explain the difference between await and.then()(in terms of syntax and behavior) ?
  // What is the behavior of await when it is used in a loop, such as in a for loop ?
  // What is the difference between using await inside a try/catch block and handling errors using .catch() when working with promises?
  // How does async / await handle multiple asynchronous operations ? Can you give an example of running them sequentially vs.in parallel ?
  // Can async / await be used to handle multiple promises in parallel ? How would you do it ?
  // What is the role of Promise.all() in conjunction with async / await, and how is it different from Promise.allSettled() or Promise.race() ?
  // How would you handle multiple async functions that depend on the results of previous ones ? Provide an example.
  // What is the difference between synchronous and asynchronous code execution, and how does async / await facilitate asynchronous execution ?
  // Can you describe what happens if an await expression times out or resolves with an unexpected value(e.g., null, undefined, or an error) ?
  // What is the behavior of async functions when they are used in conjunction with forEach() or map() ? How can this be handled properly ?
  // Can you explain how you would handle async functions in an event - driven architecture, for example, in a Node.js server ?
  // How do you handle asynchronous operations that need to be performed after an event occurs, such as waiting for user input or a network request ?
  // Can you explain how async / await works with a generator function? How does it differ from traditional generator functions ?
  // What potential pitfalls or common mistakes should developers be aware of when using async/await in JavaScript?

}
