import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-common-2',
  templateUrl: './common-2.component.html',
  styleUrl: './common-2.component.scss'
})
export class Common2Component implements OnInit {
  constructor() { }
  ngOnInit(): void {
    console.log('aaaaaaaaaaaaaaaaaaaaa');
    // console.log(this.checkCube(1331));
    // console.log(this.isRotation("abcd", "cdab")); // Output: true
    // console.log(this.isRotation("abcd", "abdc")); // Output: false
    // console.log(this.isRotation("abc", "cba")); // Output: false
    // console.log(this.isRotation("abc", "bca")); // Output: true

    // console.log(this.isPrime(13));
    // console.log(this.isPrime(31));
    // console.log(this.isPrime(12));
    // console.log(this.isPrime(12));

    // console.log(this.getPov(3, 4));

    // console.log(this.getNumber(22));
    // console.log(this.countDigits(29988772));
    // console.log(this.countSum(2772));

    // this.isArmstrong(153);
    // this.isArmstrong(1533);
    // this.isArmstrong(9474);
  }

  // 41. Write a function to implement the depth - first traversal of a tree. // XXXX
  // 42. Write a function to implement the breadth - first traversal of a tree. // XXXX

  // 43. Write a function to check if a number is a perfect cube. 
  // checkCube(n: number): boolean {
  //   if (n < 0) {
  //     n = Math.abs(n); // handle negative
  //   }
  //   let cube = Math.cbrt(n); // calulate cube
  //   let nearestNumber = Math.round(cube); // get nearest integer;
  //   return Math.pow(nearestNumber, 3) === n
  // }

  // 44. Write a function to find the largest sum of a contiguous subarray in an array. // XXXX
  // 45. Write a function to implement the quicksort algorithm iteratively. // XXXX

  // 46. Write a function to find the count of trailing zeroes in the factorial of a number.
  // trailingZores(n: number): number {
  //   let count = 0;
  //   while (5 >= 5) {
  //     count = count + Math.floor(n / 5);
  //     n = Math.floor(n / 5);
  //   }
  //   return count;
  // }

  // 47. Write a function to find the next lexicographical permutation of a string. // XXXX
  // 48. Write a function to find the number of ways to partition a set of numbers into subsets. // XXXX
  // 49. Write a function to calculate the binomial coefficient. // XXXX
  // 50. Write a function to find the number of ways to make change for a given amount using dynamic programming. // XXXX

  // 51. Write a function to check if two strings are rotations of each other.
  // isRotation(str1: string, str2: string): boolean {
  //   if (str1.length !== str2.length) {
  //     return false;
  //   }
  //   // Concatenate str1 with itself and check if str2 is a substring of this new string
  //   let concatenate = str1 + str1;
  //   return concatenate.includes(str2);
  // }

  // 52. Write a function to find the greatest common divisor(GCD) of two numbers. //XXXX
  // 53. Write a function to find the least common multiple(LCM) of two numbers. // XXX
  // 54. Write a function to check if a number is prime.
  // isPrime(num: number): boolean {
  //   if (num < 0) return false;
  //   if (num === 2) return true;

  //   for (let i = 3; i < Math.sqrt(num); i++){
  //     if(num%i===0) return false
  //   }
  //   return true;
  // }

  // 55. Write a function to generate all prime numbers up to n using the Sieve of Eratosthenes. // XXXX
  // 56. Write a function to find the sum of all integers from 1 to n.
  // getFromSum(endNumber: number, startNumber: number = 0): number {
  //   let sum = 0;
  //   if (startNumber > 0) {
  //     sum = (((endNumber * endNumber) + endNumber) / 2) - (((startNumber * startNumber) + startNumber) / 2);
  //   } else {
  //     sum = ((endNumber * endNumber) + endNumber) / 2
  //   }
  //   return sum;
  // }

  // 57. Write a function to calculate the power of a number(x ^ y) without using the Math.pow function.
  // getPov(num: number, power: number): number {
  //   let numberPower = 1;
  //   while (power > 0) {
  //     numberPower = numberPower * num;
  //     power--;
  //   }
  //   return numberPower;
  // }

  // 58. Write a function to find the minimum number of coins needed to make a given amount. // XXXX
  // 59. Write a function to merge two sorted linked lists. // XXXX
  // 60. Write a function to find the middle element of a linked list. // XXX

  // TypeScript Basics Questions

  // 61. Write a function to reverse a singly linked list. // XXXX
  // 62. Write a function to detect a cycle in a linked list. // XXXX
  // 63. Write a function to find the intersection point of two linked lists. // XXXX
  // 64. Write a function to remove duplicates from a linked list. // XXXX
  // 65. Write a function to find the nth node from the end of a linked list. // XXXX
  // 66. Write a function to implement a stack using an array. // XXXX
  // 67. Write a function to implement a queue using an array. // XXXX
  // 68. Write a function to implement a queue using two stacks. // XXXX
  // 69. Write a function to implement a circular queue. // XXXX
  // 70. Write a function to evaluate a postfix expression. // XXXX

  // TypeScript Advanced Questions
  // 71. Write a function to evaluate an infix expression. // XXXX
  // 72. Write a function to convert an infix expression to postfix. // XXXX
  // 73. Write a function to generate all combinations of a set of numbers. // XXX
  // 74. Write a function to generate all permutations of a string. // XXXX

  // 75. Write a function to calculate the nth Fibonacci number iteratively. //
  // getNumber(n: number) {
  //   if (n <= 0) {
  //     return 'Input must be a positive integer'
  //   } else if (n === 0) {
  //     return 0;
  //   } else if (n === 1) {
  //     return 1;
  //   }
  //   let a = 0;
  //   let b = 1;
  //   for (let i = 0; i < n; i++){
  //     let temp = b;
  //     b = a + b;
  //     a = temp;
  //   }
  //   return b;
  // }

  // 76. Write a function to find the number of digits in an integer.
  // countDigits(num: number): number {
  //   let count = 0;
  //   if (num > 0) {
  //     while (num > 0) {
  //       num = Math.floor(num / 10);
  //       count++;
  //     }
  //   }
  //   return count;
  // }

  // 77. Write a function to find the sum of digits of a number.
  // countSum(num: number): number {
  //   let sum = 0;
  //   if (num > 0) {
  //     while (num > 0) {
  //       sum = Math.floor(num % 10) + sum;
  //     }
  //   }
  //   return sum;
  // }

  // 78. Write a function to check if a number is an Armstrong number.
  // isArmstrong(num: number): void {
  //   let squareCount = 0;
  //   let tempNum1 = num;
  //   let tempNum2 = num;
  //   let tempSum = 0;

  //   while (tempNum1 > 0) {
  //     tempNum1 = Math.floor(tempNum1 / 10);
  //     squareCount++;
  //   }

  //   while (tempNum2 > 0) {
  //     tempSum += Math.pow(tempNum2 % 10, squareCount);
  //   }
  //   alert(tempSum === num);
  // }
  // 79. Write a function to check if a number is a perfect number.
  // isPerfectNumber(num: number): boolean {

  //   // return true;
  // }
  // 80. Write a function to calculate the square root of a number using binary search.



}