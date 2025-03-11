import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-optional-chaining',
  templateUrl: './optional-chaining.component.html',
  styleUrl: './optional-chaining.component.scss'
})
export class OptionalChainingComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.example1();
  }

  // What is the purpose of the Optional Chaining Operator(?.) in JavaScript ?
  // ...Prevents "Cannot read property of undefined" errors.
  // ...Makes code cleaner and more readable.
  // ...Useful when dealing with optional or dynamic object properties.
  // How does?.differ from traditional property access in JavaScript ?
  // How does Optional Chaining prevent runtime errors ?
  // Can?.be used on arrays ? If so, how ? Provide an example.
  // How does Optional Chaining behave when used on a function call? Provide an example.
  // What happens if you use?.on a non - nullish value that doesn't contain the expected property?
  // Can?.be used for method chaining ? If yes, give an example.
  example1() {
    // 1. Accessing Nested Properties
    const user: any = {
      profile: {
        name: "John Doe"
      }
    };
    console.log('name', user.profile?.name); // Jogn Doe
    console.log('name', user.profile?.age); // undefined
    console.log('name', user.profile?.balance); // undefined
    console.log('name', user.profile?.name); // Jogn Doe

    // 2. Calling Methods Safely
    const obj: any = {
      greet: () => "Hello"
    };

    console.log(obj.greet?.());  // Output: "Hello"
    console.log(obj.sayBye?.()); // Output: undefined (no error)

    // 3. Accessing Array Elements
    const users = [{ name: "Alice" }];
    console.log(users[0]?.name);  // Output: "Alice"
    console.log(users[1]?.name);  // Output: undefined (no error)

    // 4. Working with Function Parameters
    function getCity(user: any) {
      return user?.address?.city ?? "Unknown";
    }

    console.log(getCity({ name: "Sam", address: { city: "New York" } })); // Output: "New York"
    console.log(getCity({ name: "Tom" })); // Output: "Unknown"

  }
  
  // What will be the output of the following code ?
  // let obj = null;
  // console.log(obj?.name); // undefined

  // What is returned when a property accessed with ?.does not exist ? // undefined
  
  // How does?.interact with the Nullish Coalescing Operator(??) ? Provide an example.
  // Is?.a replacement for checking if (object && object.property)? Why or why not ?
  example2() {
    const user: any = {
      profile: {
        name: "Alice",
        age: null
      }
    };

    console.log(user.profile?.name ?? "Unknown");  // Output: "Alice"
    console.log(user.profile?.age ?? 25);         // Output: 25 (because age is null)
    console.log(user?.address?.city ?? "Not Provided"); // Output: "Not Provided" (because address is undefined)

  }

  // Can you combine?.with destructuring assignment ? Why or why not ?
  // ...No
  example3() {
    const user = null;

    // ❌ Error: Cannot destructure property 'name' of 'user' as it is null.
    // const { name } = user?.profile;
    console.log(name);
  }

  // What happens if you use?.in a loop where an array element may be undefined ?
  example4() {
    const users = [
      { name: "Alice" },
      undefined,
      { name: "Bob" }
    ];

    for (const user of users) {
      console.log(user?.name); // ✅ Outputs: "Alice", undefined, "Bob"
    }
  }
  // How does?.behave differently from && when accessing nested properties ?
  // How does JavaScript evaluate expressions containing multiple?.operators in a single chain ?
  example5() {
    const obj: any = {
      name: 'Dadda'
    }

    if (obj?.name && obj?.dadda) {
      console.log(undefined) // not run
    }
  }
  
            
}
