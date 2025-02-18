import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-ends-with',
  templateUrl: './ends-with.component.html',
  styleUrl: './ends-with.component.scss'
})
export class EndsWithComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.besicExample();
    // this.besicExample2();
    // this.emptyString();
    // this.checkPath();
    this.withChainingMethod();
  }


  // What is the purpose of the endsWith() method in JavaScript ? Can you provide a basic example ?
  besicExample() {
    const str = 'This is test string';
    const strContains = str.endsWith('string');
    console.log('strContains', strContains);
  }

  // What is the second parameter in endsWith() and how does it affect the result ? Can you provide an example ?
  besicExample2() {
    const str = 'This is test string';
    const strContains = str.endsWith('test', 12); // 12 means string will end after test or endsWith consider only 'This is test' as string or from starting 12 index will be considered
    console.log('strContains', strContains);
  }

  // What happens if you call endsWith() on an empty string, or if the string to check is empty ? Provide an example.
  emptyString() {
    const str = '';
    const strContains = str.endsWith('test');
    console.log('strContains', strContains);
  }

  // How would you use endsWith() to check if a file path string ends with a specific file extension(e.g., .jpg) ?
  checkPath() {
    const path = 'src/images/test.jpg';
    const isJpgContains = path.endsWith('.jpg');
    console.log(isJpgContains);
  }

  // How does endsWith() compare to using substring() or slice() when checking if a string ends with a particular substring ? What are the advantages of using endsWith() ?
  // ...Conciseness
  // ...Built-in behavior
  // ...Less error-prone

  // Can endsWith() produce false positives in certain edge cases ? How would you handle such situations in real - world applications ?
  falsePositive() {
    let str = "Hello, world! ";
    console.log(str.endsWith("world!")); // false (due to the trailing space)
    console.log(str.trim().endsWith("world!")); // true

    let str1 = "Hello, world!!";
    console.log(str1.endsWith("world!")); // false (extra exclamation mark)

    let str2 = "Hello, world!!";
    let cleanedStr = str2.replace(/[!?.]$/, ""); // Removes trailing punctuation
    console.log(cleanedStr.endsWith("world")); // true
  }

  // What is the time complexity of the endsWith() method, and is there any performance concern when using it in large strings ?
  // ...O(n)

  // How could you use endsWith() in combination with other methods like map(), filter(), or reduce() to perform string operations on an array of strings ?
  withChainingMethod() {
    const files = ["image.jpg", "document.pdf", "photo.jpg", "video.mp4"];
    const JPGfiles = files.filter(e => e.endsWith('.jpg'))
    console.log('JPGfiles',JPGfiles);

    const endsWithJPG = files.map(e => e.endsWith('.jpg'))
    console.log('endsWithJPG', endsWithJPG);

    const jpgCount = files.reduce((count, cv) => cv.endsWith('.jpg') ? count + 1 : count, 0);
    console.log('jpgCount', jpgCount);
  }

  // Is endsWith() case -sensitive ? Provide an example where case sensitivity affects the result.
  caseSensitive() {
    const str = 'Hello World'
    console.log('case sensitive example', str.endsWith('world')) // false due w is small
  }
  
  // Can you combine endsWith() with a regular expression to perform more complex checks on the end of a string ? Why or why not ?

  
}
