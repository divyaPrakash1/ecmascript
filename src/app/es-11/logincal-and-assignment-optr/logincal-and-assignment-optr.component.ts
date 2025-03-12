import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-logincal-and-assignment-optr',
  templateUrl: './logincal-and-assignment-optr.component.html',
  styleUrl: './logincal-and-assignment-optr.component.scss'
})
export class LogincalAndAssignmentOptrComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.example6();
    this.example7();
  }

  // What does the &&= operator do in JavaScript ?
  // x &&= y;
  // ...If x is truthy, then x = y.
  // ...If x is falsy, x remains unchanged.
  // How does &&= work when the left - hand operand is undefined or null ?
  example1() {
    let isActive = true;
    isActive &&= false;  // Since isActive is true, it is assigned false
    console.log(isActive);  // Output: false
    let count = 0;
    count &&= 5;  // Since count is falsy (0), it remains 0
    console.log(count);  // Output: 0
  }

  // How does &&= differ from the traditional && operator ?
  example2() {
    let a = 5;
    a &&= 3
    console.log(a) // 3;

    let b = 5;
    let c = b && 3;
    console.log(c) // 3

  }
      
  // What will be the output of the following code ?
  // let x = true;
  // x &&= false;
  // console.log(x); // false

  // Is &&= a short - circuiting operator ? Why or why not ? 
  // ...Short-circuiting means that if the left-hand operand is falsy, the right-hand expression is not evaluated.
  example3() {
    let obj: any = null;
    obj &&= obj.property;  // No error, short-circuits before accessing property
    console.log(obj); // Output: null
  }

  // How can &&= be used to update object properties conditionally ?
  example4() {
    let user = { isActive: true, role: 'user' };
    user.isActive &&= user.role === 'admin';
    console.log(user); // { isActive: true, role: 'admin' };
  }

  // In what scenarios is using &&= more efficient than an if statement ?
  example5() {
    let user = { isActive: true, points: 50 };
    user.isActive &&= user.points > 30;
    console.log(user);

    if (user.isActive) {
      user.isActive = user.points > 30;
    }

    let config: any = { debug: true };
    // If debug mode is enabled, set logLevel
    config.debug &&= 'verbose';
    console.log(config.debug); // 'verbose'
  }

  // Can &&= be used with non - boolean values ? Provide an example.
  example6() {
    let user = { isActive: 'Yes', points: 50 };
    user.isActive &&= user.isActive = 'No';
    console.log('user', user);
  }
  
  // How does &&= behave with strings and numbers ?
  // let str = "Hello";
  // str &&= "World";
  // console.log(str); // World

  // What happens if &&= is used with an empty array([]) or an empty object({})?
  // ...empty array and empty objects are truthy therefore value get asaaiged
  // What are some potential pitfalls when using &&= in JavaScript?
  example7() {
    let arr: any = [];
    let obj: any = {};
    arr &&= 'Array Dadda';
    obj &&= 'Object Dadda';
    console.log(arr, obj);
  }

  // What happens if the left - hand operand is 0 and the right - hand operand is a truthy value?
  // How does &&= handle falsy values like NaN, "", or false?
  // ...null, undefined, 0, false, "" will not returned any value
  
  
  // Can &&= be used inside loops to modify variables conditionally ? Provide an example.
  example8() {
    let words = ["apple", "banana", "", "grape", null, "mango"];
    let validWord: any = "start";
    for (let word of words) {
      validWord &&= word; // Updates only if 'validWord' remains truthy
    }
    console.log(validWord); // "" (empty string is falsy, so updates stop)
  }
  
  
  // How does &&= interact with optional chaining(?.) in JavaScript?
  example9() {
    let user: any = { profile: { isAdmin: true } };

    // Using optional chaining (?.) to avoid errors
    // user?.profile?.isAdmin &&= false;

    console.log(user.profile?.isAdmin); // Output: false
  }


}
