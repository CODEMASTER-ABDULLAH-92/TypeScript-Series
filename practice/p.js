"use strict";
// 1. Write a JS/TS program to print all natural numbers from 1 to n using while loop
Object.defineProperty(exports, "__esModule", { value: true });
// let lastIndex: number = 10; // n
// let start: number = 1;
// while (start <= lastIndex) {
//   console.log(start);
//   start++;
// }
// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop
// let lastIndex:number = 10;
// let start:number = 1;
// while (lastIndex >=start) {
//     console.log(lastIndex);
//     lastIndex--;
// }
// 4. Write a js program to print all even numbers between 1 to 100. - using while loop
// let starting:number = 1;
// while (starting<=100) {
//     if (starting%2 == 0) {
//         console.log(starting);
//     }
//     starting++;
// }
// 5. Write a js program to print all odd number between 1 to 100.
// let starting:number = 1;
// while (starting<=100) {
//     if (starting%2 !== 0) {
//         console.log(starting);
//     }
//     starting++;
// }
// 6. Write a js program to find sum of all natural numbers between 1 to n.
// let n:number = 20;
// let starting:number = 0;
// let sum:number = 0;
// while (starting <= n) {
//     sum = sum + starting;
//     console.log(`Sum: ${starting} + ${sum - starting} = ${sum}`);
//     starting++;
// }
// 7. Write a js program to find sum of all even numbers between 1 to n.
// let n:number = 20;
// let starting:number = 0;
// let sum:number = 0;
// while (starting <= n) {
//     if (starting % 2 == 0) {
//         sum = sum + starting;
//         console.log(`Sum: ${starting} + ${sum - starting} = ${sum}`);
//     }
//     starting++;
// }
// 8. Write a js program to find sum of all odd numbers between 1 to n.
// let n:number = 20;
// let starting:number = 0;
// let sum:number = 0;
// while (starting <= n) {
//     if (starting % 2 !== 0) {
//         sum = sum + starting;
//         console.log(`Sum: ${starting} + ${sum - starting} = ${sum}`);
//     }
//     starting++;
// }
// if else
// 1. Write a js program to find maximum between two numbers.
// let num1:number = 24;
// let num2:number = 30;
// if (num1>num2) {
//     console.log(`${num1} is greater than ${num2}`);
// }
// else{
//     console.log(`${num1} is smaller than ${num2}`);
// }
// 2. Write a js program to find maximum between three numbers.
// let num1: number = 24;
// let num2: number = 30;
// let num3: number = 219;
// if (num1 >= num2 && num1 >= num3) {
//     console.log(`${num1} is greater.`);
// }
// else if (num2 >= num1 && num2 >= num3) {
//     console.log(`${num2} is greater.`);
// }
// else{
//     console.log(`${num3} is greater.`);
// }
// 3. Write a js program to check whether a number is negative, positive or zero.
// let num1:number = -2;
// if (num1 > 0) {
//     console.log(`${num1} is positive number. `);
// } 
// else if (num1 < 0) {
//     console.log(`${num1} is negative number. `);
// }
// else {
//     console.log(`${num1} is equal to zero. `);
// }
// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
// let num1:number = 55;
// if (num1 % 5 == 0 && num1 % 11 == 0) {
//     console.log("True");
// }
// else{
//     console.log("False");
// }
// 5. Write a js program to check whether a number is even or odd.
// let num1:number = 23;
// if (num1 % 2 == 0) {
//     console.log("Even: ");
// } else {
//     console.log("Odd: ");
// }
// 6. Write a js program to check whether a year is leap year or not.
// ========= Leap Year Conditions 
// It is divisible by 4
// AND Not divisible by 100,
//  it is also divisible by 400
// let year:number = 2016;
// if (year % 400 == 0) {
//     console.log("Leap Year");
// }
// if (year % 100 !== 0 && year % 4 == 0) {
//     console.log("Leap Year");
// }
// else{
//     console.log("Not a leap year");
// 
// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.
// let ch:string = "i";
// if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
//     console.log("Vowels");
// }
// else {
//     console.log("consonant");
// }
// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
let ch1 = "6";
if (ch1 >= "a" && ch1 <= 'z') {
    console.log("Alphabets");
}
else if (ch1 >= "0" && ch1 <= "9") {
    console.log("Numbers");
}
else {
    console.log("Specail Char");
}
//# sourceMappingURL=p.js.map