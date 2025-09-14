import { Component, OnDestroy, OnInit } from '@angular/core';


interface studentDetails {
  name: string;
  gender: string;
  age: number;
  mobile: number;
}

@Component({
  selector: 'ecmspt-new-ng-for',
  templateUrl: './new-ng-for.component.html',
  styleUrl: './new-ng-for.component.scss'
})


export class NewNgForComponent implements OnInit, OnDestroy {


  studentDetails: studentDetails[] = [
    { name: "Amit Sharma", gender: "Male", age: 21, mobile: 9876543210 },
    { name: "Priya Verma", gender: "Female", age: 22, mobile: 9123456780 },
    { name: "Rahul Singh", gender: "Male", age: 23, mobile: 9988776655 },
    { name: "Sneha Kapoor", gender: "Female", age: 20, mobile: 9090909090 },
    { name: "Arjun Mehta", gender: "Male", age: 24, mobile: 9876501234 }
  ]

  constructor() {

  }


  ngOnInit(): void {
    console.log('ngoninit');
  }

  ngOnDestroy(): void {
    console.log('ngondestroy')
  }
}
