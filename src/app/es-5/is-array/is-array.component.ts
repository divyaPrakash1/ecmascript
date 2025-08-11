import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-is-array',
  templateUrl: './is-array.component.html',
  styleUrl: './is-array.component.scss'
})
export class IsArrayComponent implements OnInit {

  constructor() {

  }

  countArray: number = 0;
  nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, [9, 10]]
  ];

  schoolTimetable = [
    [ // Class 1
      ["Math", "English", "Science"],      // Monday
      ["History", "Math", "PE"],           // Tuesday
      ["Science", "Computer", "English"],  // Wednesday
    ],
    [ // Class 2
      ["Biology", "Math", "Geography"],    // Monday
      ["English", "History", "PE"],        // Tuesday
      ["Chemistry", "Math", "Computer"],   // Wednesday
    ],
    [ // Class 3
      ["Physics", "Chemistry", "Math"],    // Monday
      ["Biology", "History", "English"],   // Tuesday
      ["Math", "Art", "Computer"],         // Wednesday
    ]
  ];

  university = [
    [ // Department 1: Computer Science
      [ // Professor 1
        {
          courseName: "Data Structures",
          students: ["Alice", "Bob", "Charlie"]
        },
        {
          courseName: "Algorithms",
          students: ["David", "Eve"]
        }
      ],
      [ // Professor 2
        {
          courseName: "Operating Systems",
          students: ["Frank", "Grace"]
        }
      ]
    ],
    [ // Department 2: Mathematics
      [ // Professor 1
        {
          courseName: "Calculus",
          students: ["Heidi", "Ivan"]
        }
      ],
      [ // Professor 2
        {
          courseName: "Linear Algebra",
          students: ["Judy", "Karl", "Leo"]
        },
        {
          courseName: "Discrete Math",
          students: ["Mallory"]
        }
      ]
    ]
  ];

  ngOnInit(): void {
    // let arrayType = [1, 2, 4, 4, 5, 4, 3, 2, 2];
    // let objectType = { name: 'Divya Prakash Mishra', age: 31, gender: 'M' };
    // console.log(this.checkArray(arrayType));
    // console.log(this.checkArray(objectType));
    console.log(this.calculateTotalArray(this.university));
  }

  checkArray(data: Array<any> | any): boolean {
    return Array.isArray(data);
  }

  // How can you use Array.isArray() in combination with other array methods to ensure safe operations? **
  forSafeExecution(value: any) { // **
    if (Array.isArray(value)) {
      value.forEach(val => console.log('forEach'));
      value.map(val => console.log('map'));
      value.filter(val => console.log('filter'));
      value.at(3);
    } else {
      throw new Error('It\'s not an array');
    }
  }

  calculateTotalArray(arr: any[]) {
    arr.forEach(ele => {
      if (Array.isArray(ele)) {
        this.countArray++;
        this.calculateTotalArray(ele);
      }
    })
    return this.countArray;
  }


  // What is Array.isArray() in JavaScript, and what does it do?
  // How does Array.isArray() differ from the typeof operator when checking for arrays ?
  // What will Array.isArray() return for the following values ?
  // Array.isArray([]); // true
  // Array.isArray({}); // false
  // Array.isArray("hello"); // false
  // Array.isArray(new Array()); // true
  // How would you check if a value is an array in JavaScript without using Array.isArray() ? Object.prototype.toString.call(value)
  // Can Array.isArray() distinguish between regular arrays and typed arrays like Int32Array or Float64Array ? // No, Array.isArray() only returns true for regular arrays. Typed arrays are not considered arrays by this method.
  // What does Array.isArray() return for null or undefined ?
  // Array.isArray(null); // false
  // Array.isArray(undefined); // false
  // What happens if you pass a string representation of an array to Array.isArray() ?
  // Array.isArray("[1, 2, 3]"); // false
  // What does Array.isArray() return for arguments objects in functions ? false
  // What is the difference between Array.isArray() and checking instanceof Array ? instanceof Array will retrun false in case of 

  //   const iframe = document.createElement('iframe');
  //   document.body.appendChild(iframe);
  //   const arrayFromIframe = new iframe.contentWindow.Array();

  // console.log(arrayFromIframe instanceof Array); // false (due to cross-context)
  // console.log(Array.isArray(arrayFromIframe)); // true return true in case of iframe or window
  // console.log([1, 2, 3] instanceof Array);       // true

  // How would you implement your own version of Array.isArray() ? return Object.prototype.toString.call(value) === "[Object Array]"
  // Why might you prefer Array.isArray() over typeof or instanceof in a large - scale application ? 


}
