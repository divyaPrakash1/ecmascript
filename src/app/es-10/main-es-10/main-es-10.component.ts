import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-es-10',
  templateUrl: './main-es-10.component.html',
  styleUrl: './main-es-10.component.scss'
})
export class MainEs10Component {
  items: Array<{ title: string, link: string }> = [
    { title: 'String Trim Start', link: 'trim-start' },
    { title: 'String Trim End', link: 'trim-end' },
    { title: 'Object From Entries', link: 'object-from-entries' },
    { title: 'Optional Catch Binding', link: 'optional-catch-binding' },
    { title: 'Array Flat', link: 'flat' },
    { title: 'Array Flat Map', link: 'flat-map' },
    { title: 'Array Sort', link: 'array-sort' },
    { title: 'Saparator', link: 'saparator' },
  ];
  constructor() { }
  ngOnInit(): void {
  }


  example1() {
    // Single Quotes (') and Double Quotes ("):
    let string1 = 'Hello, World!';
    let string2 = "Hello, World!";


    // Backticks(Template Literals):
    let string3 = `Hello, World!`; // Regular string
    let string4 = `Hello,
      World!`; // Multi-line string
    
    // Escape Backslash (\\): Used to include a literal backslash in the string.
    let path = "C:\\Program Files\\MyApp";

    // Escape Single Quote(\'): To include a single quote inside a single-quoted string.
    let message = 'It\'s a great day!';

    // Escape Double Quote(\"): To include a double quote inside a double-quoted string.
    let quote = "She said, \"Hello!\"";

    // Escape Newline(\n): Inserts a newline(line break).
    let multiline = "Hello\nWorld";

    // Escape Tab(\t): Inserts a horizontal tab.
    let spaced = "Hello\tWorld";

    // Escape Carriage Return(\r): Moves the cursor to the beginning of the line.
    let returnChar = "Hello\rWorld";

    // Unicode Characters(\uXXXX): Inserts a Unicode character by specifying its hexadecimal code point.
    let smiley = "\u263A"; // ☺

    // Hexadecimal Escape(\xXX): Inserts a character using a hexadecimal escape code (valid for characters in the 0x00 to 0xFF range).
    let heart = "\x3C"; // <

    // Unicode Escape(\u{ XXXXX }): You can also represent characters in Unicode code points outside the BMP(Basic Multilingual Plane), allowing you to use larger Unicode characters.
    let heart1 = "\u{1F60D}"; // 😍

    // Inside Template Literals(): Whitespace inside backticks(template literals) is preserved, and multi - line strings are allowed.
    let multiline1 = `Hello 
        World!`;
    console.log(multiline1); // "Hello\nWorld!"

    // Inside Single / Double Quotes(' ', " "): Spaces or newlines within single or double quotes are part of the string.
    let sentence = "This is a string with spaces!";

    // specialChars
    let specialChars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    // \n: Newline
    // \t: Tab
    // \r: Carriage return
    // \\: Backslash
    // \': Single quote
    // \": Double quote
    // \uXXXX: Unicode(hexadecimal code)
    // \xXX: Hexadecimal character
    // \u{ XXXXX }: Unicode(code points beyond the BMP)


  }

}
