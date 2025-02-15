import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent implements OnInit {
  // private _width: number;
  // private _height: number;
  // constructor(width: number, height: number) {
  //   this._width = width;
  //   this._height = height;
  // }
  // Getter for the area
  // get area(): number {
  //   return this._height * this._width;
  // }

  // Setter for width
  // set width(value: number) {
  //   if (value < 0) {
  //     console.log('Width can\'t be a negative value');
  //   } else {
  //     this._width = value;
  //   }
  // }

  // // Setter for height
  // set height(value: number) {
  //   if (value < 0) {
  //     console.log('Height can\'t be a negative value');
  //   } else {
  //     this._height = value;
  //   }
  // }

  // getValll() {
  //   const rect = new ClassesComponent(100, 20);
  //   console.log(rect.area);
  // }

  ngOnInit(): void {
    this.getClass();
    // this.getValll();
  }

  
  // What is a class in JavaScript ? How is it different from a function constructor?
  getClass() {
    const details = new MyTestClass('Khan', 12);
    console.log(details.name);
    console.log(details.age);
  }
  
  // How do you define a class in JavaScript ? Can you provide an example ?
  //   class Car {
  //   constructor(brand, model) {
  //     this.brand = brand;
  //     this.model = model;
  //   }

  //   displayInfo() {
  //     console.log(`${this.brand} ${this.model}`);
  //   }
  // }

  // const myCar = new Car("Toyota", "Corolla");
  // myCar.displayInfo();  // Output: Toyota Corolla

  // What is the purpose of the constructor method in a class?
  //   class Person {
  //   name: string;
  //   age: number;

  //   // Constructor method
  //   constructor(name: string, age: number) {
  //     this.name = name;  // Initialize name property
  //     this.age = age;    // Initialize age property
  //   }

  //   greet() {
  //     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  //   }
  // }

  // const person1 = new Person("Alice", 30);
  // person1.greet();  // Output: Hello, my name is Alice and I am 30 years old.

  // Can you explain the difference between regular methods and getter / setter methods in a class?

  // What is the this keyword inside a class method? How does it work ?
  // How does inheritance work in JavaScript classes ? Can you demonstrate how to create a subclass ?
  // What is the purpose of the super keyword in a subclass ?
  // What are static methods in JavaScript classes ? Can you give an example ?
  // What is a class expression in JavaScript ? How is it different from a class declaration?
  // How does inheritance work under the hood in JavaScript classes ?
  // How can you implement encapsulation in JavaScript classes ?
  // Can you create abstract classes in JavaScript ? If not, how do you simulate an abstract class?
  // How does JavaScript manage memory for class instances?
  // Can you import/export classes in ES6 modules? How do you use them in different files?
  // What are class fields, and how do they differ from instance properties ?
  // How would you implement multiple inheritance or mixins in JavaScript classes ?

}

class MyTestClass {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    console.log(`My name is ${this.name}, and I'm ${this.age} year old, and I'm not terrorist`)
  }
}
function Inject(String: StringConstructor): (target: typeof ClassesComponent, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

