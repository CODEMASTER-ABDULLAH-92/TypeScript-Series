// 1. Write a JS/TS program to print all natural numbers from 1 to n using while loop

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

// let ch1:string = "6";

// if (ch1 >= "a" && ch1 <= 'z') {
//     console.log("Alphabets");
// }
// else if (ch1 >= "0" && ch1 <= "9") {
//     console.log("Numbers");
// }
// else{
//     console.log("Specail Char");
// }

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// let ch:string = "H";

// if (ch >= "A" || ch <= "Z") {
//     console.log(`${ch} is Uppercase Letter`);
// }
// else{
//     console.log(`${ch} is Lowercase Letter`);
// }

// 11. Write a js program to input week number and print week day.

// let weekNumber:number = 2;
// switch (weekNumber) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Nothing");
//         break;
// }

//  12. Write a js program to input month number and print number of days in that month.
//  31 Days days: Jan, Mar, May, Jul, Aug, Oct, Dec → 1, 3, 5, 7, 8, 10, 12
//  30 days: Apr, Jun, Sep, Nov → 4, 6, 9, 11

//  28 or 29 days: Feb → 2 (check for leap year if needed)

// let monthCount:number = 10;

// switch (monthCount) {
//     case 1:
//         console.log("31 Days");
//         break;
//     case 2:
//         console.log("28 or 29 days");
//         break;
//     case 3:
//         console.log("31 Days");
//         break;
//     case 4:
//         console.log("30 Days");
//         break;
//     case 5:
//         console.log("31 Days");
//         break;
//     case 6:
//         console.log("30 Days");
//         break;
//     case 7:
//         console.log("31 Days");
//         break;
//     case 8:
//         console.log("31 Days");
//         break;
//     case 9:
//         console.log("30 Days");
//         break;
//     case 10:
//         console.log("31 Days");
//         break;
//     case 11:
//         console.log("30 Days");
//         break;
//     case 12:
//         console.log("31 Days");
//         break;
//     default:
//         console.log("Invalid");
//         break;
// }

// 13. Write a js program to count total number of notes in given amount.

// 10000


// let count: number = 0;
// let amount: number = 10000;

// let notes: number[] = [5000, 1000, 500, 100, 50, 20, 10];

// for (let i: number = 0; i < notes.length; i++) {
//   if (amount >= notes[i]!) {
//     let countNet = Math.floor(amount / notes[i]!);
//     count += countNet;
//     amount = amount - countNet * notes[i]!;
//   }
// }

// console.log(count);


//  14. Write a js program to input angles of a triangle and check whether triangle is valid or not.

// Sum of angles → The sum of all three interior angles is always 180°.
// Positive sides → All sides must have positive length (greater than 0).
// Triangle inequality rule → The sum of any two sides must be greater than the third side.
// a+b>c
// a+c>b
// b+c>a
// Each angle > 0° → No angle can be 0° or negative.
// Each angle < 180° → No single angle can be 180° or more.
// let angle1: number = 20;
// let angle2: number = 40;
// let angle3: number = 120;

// let side1: number = 34;
// let side2: number = 34;
// let side3: number = 34;

// if (
//     // ✅ Angles check
//     angle1 + angle2 + angle3 === 180 &&
//     angle1 > 0 && angle2 > 0 && angle3 > 0 &&
//     angle1 < 180 && angle2 < 180 && angle3 < 180 &&

//     // ✅ Sides check
//     side1 > 0 && side2 > 0 && side3 > 0 &&
//     side1 + side2 > side3 &&
//     side1 + side3 > side2 &&
//     side2 + side3 > side1
// ) {
//     console.log("Valid Triangle");
// } else {
//     console.log("Not a Valid Triangle");
// }

// input the angles and check whether the triangle is valid or not valid 
// let angle1: number = 60;
// let angle2: number = 60;
// let angle3: number = 60;

// if (
//     angle1 > 0 && angle2 > 0 && angle3 > 0 &&     // all angles positive
//     angle1 < 180 && angle2 < 180 && angle3 < 180 && // all angles less than 180
//     angle1 + angle2 + angle3 === 180              // sum = 180
// ) {
//     console.log("Valid Triangle (by angles)");
// } else {
//     console.log("Not a Valid Triangle (by angles)");
// }



// input the sides and check whether the triangle is valid or not valid 
// let side1: number = 7;
// let side2: number = 10;
// let side3: number = 5;

// if (
//     side1 > 0 && side2 > 0 && side3 > 0 &&          // all sides positive
//     side1 + side2 > side3 &&                        // triangle inequality
//     side1 + side3 > side2 &&
//     side2 + side3 > side1
// ) {
//     console.log("Valid Triangle (by sides)");
// } else {
//     console.log("Not a Valid Triangle (by sides)");
// }


// Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

// Equilateral Triangle 🟢
// 1) All three sides are equal.

// Isosceles Triangle 🟡
// 2) Exactly two sides are equal.

// Scalene Triangle 🔵
// All three sides are different.

// let side1: number = 10;
// let side2: number = 10;
// let side3: number = 10;

// if (side1 == side2 && side2 == side3 && side3 == side1) {
//     console.log("Equilateral Triangle");
// }
// if (side1 == side2 || side1 == side3 || side2 == side3) {
//     console.log("Isosceles Triangle");
// }
// if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
//     console.log("Scalene Triangle");
// }

//  18. Write a js program to calculate profit or loss.

// The formula of the profit and the Loss is given below 

// 🔹 Profit = Selling Price (SP) – Cost Price (CP)
// 🔹 Loss = Cost Price (CP) – Selling Price (SP)


// let costPrice: number = 230;
// let sellingPrice: number = 200;

// let profit: number = 0;
// let loss: number = 0;

// if (sellingPrice > costPrice) {
//     profit = ((sellingPrice - costPrice) / costPrice) * 100;
//     console.log("Profit: ", profit.toFixed(2) + "%");
// } 
// else if (costPrice > sellingPrice) {
//     loss = ((costPrice - sellingPrice) / costPrice) * 100;
//     console.log("Loss: ", loss.toFixed(2) + "%");
// } 
// else {
//     console.log("No Profit No Loss");
// }

//  19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
//  Percentage >= 90% : Grade A
//  Percentage >= 80% : Grade B
//  Percentage >= 70% : Grade C
//  Percentage >= 60% : Grade D
//  Percentage >= 40% : Grade E
//  Percentage < 40% : Grade F


// let totalNumbers:number = 500;
// let comp:number = 39;
// let phy:number = 49;
// let chem:number = 89;
// let math:number = 85;
// let bio:number = 87;

// let grandTotalOfMarks = comp + phy + chem + bio + math;

// let percentage = (grandTotalOfMarks / totalNumbers) * 100;
// console.log("Perce: ", percentage);
// if (percentage >= 90) {
//     console.log("A");
// } else if (percentage <= 90 && percentage >= 80) {
//     console.log("B");
// } else if (percentage <= 80 && percentage >= 70) {
//     console.log("C");
// }else if (percentage <= 70 && percentage >= 60) {
//     console.log("D");
// }
// else{
//     console.log("E");
// }



// functions questions 
//  1. Write a js program to find cube of any number using function.


// let cube:number = 1;
// const cubeFunction = (numbe:number):void=>{
//     for(let i = 0; i < 3; i++){
//         cube = cube * numbe;
//     }
// }
// cubeFunction(3);
// console.log("Cube: ",cube);


//  2. Write a js program to find diameter, circumference and area of circle using functions.
// Diameter D=2r
// Circumference C=2πr
// Area A=πr2
// const PI=3.14;

// const diameter = (radius:number):void=>{
//     let diameter = 2 * radius;
//     console.log("Diameter: ", diameter);
// }
// const circumference = (radius:number):void=>{
//     let circumference = 2 * PI * radius;
//     console.log("Circumference: ", circumference);
// }
// const area = (radius:number):void=>{
//     let area = PI *radius*2;
//     console.log("Area", area);
// }

// diameter(3);
// circumference(3);
// area(3);



// 3. Write a js program to find maximum and minimum between two numbers using functions.

// const minMaxfun = (num1:number, num2:number):void=>{
//     if (num1 > num2) {
//         console.log(`${num1} is greater than ${num2}`);
//     } else {
//         console.log(`${num2} is greater than ${num1}`);
//     }
// }

// minMaxfun(23,54);

//  4. Write a js program to check whether a number is even or odd using functions.

// const checkEvenOrOdd = (num1:number)=>{
//     if (num1 % 2 == 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }

// checkEvenOrOdd(45);



//  5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.


// 🔹 Armstrong Number 

// A number is Armstrong if sum of its own digits raised to the power of number of digits = the number itself.
// let we have the number 153 then take the cube of single element like take cube of 1, then 5, then 3;
// and then adds the cube of all like 1,5,3 and if this is equal to 153 this is aremstrong number otherwise not 

// 1^3 + 5^3 + 3^ 3 = 153 

// 🔹 Prime Number

// A number greater than 1 with only two factors: 1 and itself.

// 🔹 Perfect Number

// A number is perfect if sum of its proper divisors (excluding itself) = the number.

// Example: 
// 28=1+2+4+7+14


// armstrong number 
