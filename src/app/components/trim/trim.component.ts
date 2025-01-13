import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-trim',
  templateUrl: './trim.component.html',
  styleUrl: './trim.component.scss'
})
export class TrimComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.trimString();
  }

  trimString() {
    let str = "       Hello World!        ";
    console.log(str.trim());
  }

  makeCustomTrim(str: string) { // ** 
    return str.replace(/^\s+|\s+$/g, '');
  }




  // What does the trim() method do in JavaScript ? // Removing whitespace
  // Can you give an example of how trim() is used ? // str.trim()
  // Does trim() modify the original string ? No
  // What happens if trim() is called on an empty string ? will return empty string ""
  // What happens if trim() is called on a string that has no leading or trailing whitespace ? nothing will change
  // Does trim() remove whitespace inside the string(between words) ? No
  // How would you implement a custom trim() function without using the built-in trim() method ? **
  // How does the trim() method handle non - ASCII whitespace characters, such as the non - breaking space(\u00A0) ?
  // What would be the result of trim() on a string with mixed whitespace characters(e.g., spaces, tabs, newlines) ? // trim() method will remove all types of whitespace characters (spaces, tabs, newlines, etc.) from both ends of the string.
  // Is there any performance difference between trim() and using replace() with regular expressions ?
  // When should you use trim() in a large - scale application ?
  // How would you handle a case where you want to remove only specific types of whitespace, such as spaces but not tabs, from the beginning and end of a string ? // str.replace(/^\s+/g, '').replace(/\s+$/g, '')

}
