import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-bigint',
  templateUrl: './bigint.component.html',
  styleUrl: './bigint.component.scss'
})
export class BigintComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // range from -2^53 + 1 to 2^53 - 1

    const bigInt1 = BigInt(1234567890123456789012345678901234567890);
    console.log(bigInt1);  // Output: 1234567890123456789012345678901234567890n


    const bigIntVal = 1234567890123456789012345678901234567890n;
    const numberVal = 100;

    const result1 = bigIntVal + BigInt(numberVal);  // Convert Number to BigInt
    console.log(result1);  // Output: 1234567890123456789012345678901234567990n

    const result2 = Number(bigIntVal);  // Convert BigInt to Number (loss of precision if too large)
    console.log(result2);  // Output: 1.2345678901234567e+39 (approximate)
  }

}
