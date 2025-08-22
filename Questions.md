// Loop Exersise:
// 1. Write a js program to print all natural numbers from 1 to n. - using while loop
// let n=1;
// while (n <=10) {
//     console.log("n ", n);
//     n++;
// }
// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop

// let n = 10;
// while (n >1) {
//     console.log("n: ", n);
//     n--;
// }

// 4. Write a js program to print all even numbers between 1 to 100. - using while loop

// let n = 1;
// while (n <=100) {
//     if (n % 2 == 0) {
//         console.log("Even: ",n);
//     }
//     n++
// }
// 5. Write a js program to print all odd number between 1 to 100.
// let n = 1;
// while (n <=100) {
//     if (n % 2 == 0) {
//         n++;
//         continue;
//     }
//     console.log("Odd: ", n);
//     n++
// }
// 6. Write a js program to find sum of all natural numbers between 1 to n.

// let n = 10;
// let sum = 0;
// for(let i = 0; i <=n; i++){
//     sum += n;
// }
// console.log("Sum: ", sum);

// 7. Write a js program to find sum of all even numbers between 1 to n.
// let n = 10;
// let sum = 0;
// for(let i = 0; i <=n; i++){
//     if (i % 2 == 0) {
//         sum += n;
//     }
// }
// console.log("Sum: ", sum);

// 8. Write a js program to find sum of all odd numbers between 1 to n.
// 7. Write a js program to find sum of all even numbers between 1 to n.

let n = 10;
let sum = 0;
for (let i = 0; i <= n; i++) {
  if (i % 2 == 1) {
    sum += n;
  }
}
console.log("Sum: ", sum);

// If-else exercise
// 1. Write a js program to find maximum between two numbers.
// let a = 12;
// let b =25;
// if (a > b) {
//     console.log(`${a} is Greater Than ${b}`);
// }
// else
// console.log(`${b} is Greater Than ${a}`);
// 2. Write a js program to find maximum between three numbers.
// let a = 12;
// let c = 25;
// let b = 49;
// if (a > b && a > c) {
//   console.log(`${a} is Greater`);
// } else if (b > a && b > c) {
//     console.log(`${b} is Greater`);
// } else
// console.log(`${c} is Greater`);

// 3. Write a js program to check whether a number is negative, positive or zero.

// let number = 0;
// if (number > 0) {
//     console.log(`${number} is pos`);
// } else if (number < 0) {
//     console.log(`${number} is negative`);
// } else{
//     console.log(`${number} is zero`);
// }
// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

// let number = 13;

// if (number % 5 === 0 && number % 11 === 0) {
//     console.log(`${number} is divisible by both 5 and 11.`);
// } else {
//     console.log(`${number} is NOT divisible by both 5 and 11.`);
// }

// 5. Write a js program to check whether a number is even or odd.

// let number = 13;
// if (number % 2 == 0) {
//     console.log(`${number} is even`);
// }
// else{
//     console.log(`${number} is odd`);
// }
// 6. Write a js program to check whether a year is leap year or not.

// It is divisible by 4
// AND

// Not divisible by 100, unless it is also divisible by 400
let year = 2004;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}

// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.
// let ch = 'r';
// ch = ch.toLowerCase();
// if (ch.length === 1 && ch >= 'a' && ch <= 'z') {
//     if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//         console.log(`${ch} is a Vowel`);
//     }
//     else{
//         console.log(`${ch} is a consonant`);
//     }
// }
// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

// let ch = '99';
// if (/[A-Z]/.test(ch)) {
//     console.log(`${ch} is a Alphabet`);
// }
// else if (/\d/.test(ch)) {
//     console.log(`${ch} is a Number`);
// }
// else {
//     console.log(`${ch} is a Specail`);
// }
// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.
// let ch = "r";
// if (/[A-Z]/.test(ch)) {
//   console.log(`${ch} is a UpperCase Alphabet`);
// }
// if (/[a-z]/.test(ch)) {
//     console.log(`${ch} is a LowerCase Alphabet`);
// }
// 11. Write a js program to input week number and print week day.
// let number = 3;
// switch(number){
//     case 1:
//         console.log("Mon");
//         break;
//     case 2:
//         console.log("Tue");
//         break;
//     case 3:
//         console.log("Wed");
//         break;
//     case 4:
//         console.log("Thru");
//         break;
//     case 5:
//         console.log("Fri");
//         break;
//     case 6:
//         console.log("Sat");
//         break;
//         default:
//             console.log("Sun");
// }

// 12. Write a js program to input month number and print number of days in that month.
// 31 days: Jan, Mar, May, Jul, Aug, Oct, Dec → 1, 3, 5, 7, 8, 10, 12

// 30 days: Apr, Jun, Sep, Nov → 4, 6, 9, 11

// 28 or 29 days: Feb → 2 (check for leap year if needed)
let monthNumber = 6;
switch (monthNumber) {
    case 1:
        console.log("31 days");
        break;
    case 2:
        console.log("28 or 29 days");
        break;
    case 3:
        console.log("31 days");
        break;
    case 4:
        console.log("30 days");
        break;
    case 5:
        console.log("31 days");
        break;
    case 6:
        console.log("30 days");
        break;
    case 7:
        console.log("31 days");
        break;
    case 8:
        console.log("31 days");
        break;
    case 9:
        console.log("30 days");
        break;
    case 10:
        console.log("31 days");
        break;
    case 11:
        console.log("30 days");
        break;
    case 12:
        console.log("31 days");
        break;
    default:
        break;    
}
// 13. Write a js program to count total number of notes in given amount.
// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
// 17. Write a js program to find all roots of a quadratic equation.
// 18. Write a js program to calculate profit or loss.
// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 150 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit

// Functions
// 1. Write a js program to find cube of any number using function.
// 2. Write a js program to find diameter, circumference and area of circle using functions.
// 3. Write a js program to find maximum and minimum between two numbers using functions.
// 4. Write a js program to check whether a number is even or odd using functions.
// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.
// 6. Write a js program to find all prime numbers between given interval using functions.
// 7. Write a js program to print all strong numbers between given interval using functions.
// 8. Write a js program to print all Armstrong numbers between given interval using functions.
// 9. Write a js program to print all perfect numbers between given interval using functions.
// 10. Write a js program to find power of any number using function.
// 11. Write a js program to print all natural numbers between 1 to n using function.
// 12. Write a js program to print all even or odd numbers in given range using function.
// 13. Write a js program to find sum of all natural numbers between 1 to n using function.
// 14. Write a js program to find sum of all even or odd numbers in given range using function.
// 15. Write a js program to find reverse of any number using function.
// 16. Write a js program to check whether a number is palindrome or not using function.
// 17. Write a js program to find sum of digits of a given number using function.
// 18. Write a js program to find factorial of any number using function.
// 19. Write a js program to generate nth Fibonacci term using function.
// 20. Write a js program to find GCD (HCF) of two numbers using function.
// 21. Write a js program to find LCM of two numbers using function.
// 22. Write a js program to display all array elements using function.
// 23. Write a js program to find sum of elements of array using function.
// 24. Write a js program to find maximum and minimum elements in array using function.

// Array and matrix programming exercises

// 1. Write a js program to read and print elements of array.
// 2. Write a js program to print all negative elements in an array.
// 3. Write a js program to find sum of all array elements.
// 4. Write a js program to find maximum and minimum element in an array.
// 5. Write a js program to find second largest element in an array.
// 6. Write a js program to count total number of even and odd elements in an array.
// 7. Write a js program to count total number of negative elements in an array.
// 8. Write a js program to copy all elements from an array to another array.
// 9. Write a js program to insert an element in an array.
// 10. Write a js program to delete an element from an array at specified position.
// 11. Write a js program to count frequency of each element in an array.
// 12. Write a js program to print all unique elements in the array.
// 13. Write a js program to count total number of duplicate elements in an array.
// 14. Write a js program to delete all duplicate elements from an array.
// 15. Write a js program to merge two array to third array.
// 16. Write a js program to find reverse of an array.
// 17. Write a js program to put even and odd elements of array in two separate array.
// 18. Write a js program to search an element in an array.
// 19. Write a js program to sort array elements in ascending or descending order.
// 20. Write a js program to sort even and odd elements of array separately.
// 21. Write a js program to left rotate an array.
// 22. Write a js program to right rotate an array.

// 1. Write a JavaScript program to list the properties of a JavaScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games',
//        readingStatus: false
//    }];

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

// 6. Write a Bubble Sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

// 7. Write a JavaScript program which returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

// 8. Write a JavaScript program to create a Clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

// 9. Write a JavaScript program to calculate the area and perimeter of a circle.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

// 10. Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :

// var library = [
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];
// Expected Output:

// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]

// 11. Write a JavaScript function to print all the methods in an JavaScript object.
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

// 12. Write a JavaScript function to parse an URL.

// 13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

// 14. Write a JavaScript function to retrieve all the values of an object's properties.

// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

// 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

// 17. Write a JavaScript function to check whether an object contains given property.

function abc() {
  let a = 12;

  function def() {
    let b = 13;
  }

  function ghi() {
    let c = 14;
    console.log(a); // ✅ This works
  }

  // console.log(c); ❌ This causes an error: c is not defined
}

// This is cloures
function abc() {
  let a = 12;
  return () => {
    console.log(a);
  };
}