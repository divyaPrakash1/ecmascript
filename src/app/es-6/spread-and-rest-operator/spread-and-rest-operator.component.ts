import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-spread-and-rest-operator',
  templateUrl: './spread-and-rest-operator.component.html',
  styleUrl: './spread-and-rest-operator.component.scss'
})
export class SpreadAndRestOperatorComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.twoObject();
    this.modifyObject();
  }

  // What is the difference between the spread operator(...) and the rest operator(...) in JavaScript ?
  // How do you differentiate between the spread operator and the rest operator in terms of usage ?
  // ...The spread operator(...) is used to spread elements of an array or object into individual elements or properties.
  // ...The rest operator(...) is used to collect multiple elements into an array or object.

  // How can you use the spread operator to create a copy of an array ?
  copyArray() {
    const tempArray = [1, 2, 3, 4, 5];
    const anotherArray = [...tempArray];
  }

  // Can you demonstrate how to merge two arrays using the spread operator?
  mergeArray() {
    const tempArray1 = [1, 2, 3, 4, 5];
    const tempArray2 = [1, 2, 3, 4, 5];
    const anotherArray = [...tempArray1, ...tempArray2];
  }

  // How can you use the spread operator to clone an object and merge two objects?
  objectManipulation() {
    const tempObject1 = { a: 1, b: 2, c: 3 };
    const tempObject2 = { d: 4, e: 5, f: 6 };
    const clonedObj = { ...tempObject1 }
    const mergedObject = { ...tempObject1, ...tempObject2 };
  }
  
  // What happens when you spread an array or object inside another array or object?
  // ... elements or properties are copied into the new array or object
  
  // How would you use the rest operator to accept a dynamic number of arguments in a function?
  // Can you show an example of using the spread operator to pass array elements as separate arguments to a function?
  functionss(...operatorr: any[]) {
    operatorr.forEach(e => console.log(e));
  }
  
  // How can you use the rest operator to collect the remaining elements during array destructuring ?
  resett() {
    const aaa = [1, 2, 3, 4, 5, 6];
    const [a, b, ...rrr] = aaa;
  } 
  
  // What happens when two objects with the same property are spread into a new object ? Which one gets picked ? // lastone get picked
  twoObject() {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const mainObj = { ...obj1, ...obj2 };
    console.log(mainObj); // {a: 1, b: 3, c: 4}
  }
  
  // How would you use the spread operator with object destructuring to modify a nested object property ?
  modifyObject() {
    const user = {
      name: 'John',
      address: {
        city: 'New York',
        zipCode: '10001'
      }
    };

    const updatedUser = {
      ...user,
      address: {
        ...user.address,
        locality: 'Town'
      }
    }

    console.log('updatedUser', updatedUser);
  }

  // Can you explain how to combine the spread operator with function calls to clone and modify elements of an array before passing it ?
  dummys(...params: any[]) {
    console.log(params);
  }

  testComp() {
    const rrrer = ['Rajan', 'Tori', 'Agam'];
    this.dummys(['Rakesh', ...rrrer]);
  }

}
