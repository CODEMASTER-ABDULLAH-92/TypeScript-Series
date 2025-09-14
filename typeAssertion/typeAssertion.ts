// 🔑 What is Type Assertion in TypeScript?

// Type Assertion tells TypeScript:
// "Hey, I know better than you about this value's type — so treat it as this specific type."

// let value: unknown = "Hello";

// // Method 1: `as` syntax (most common)
// let strLength = (value as string).length;


// const input = document.querySelector("input");

// // Without type assertion:
// input.value; // ❌ Error: Object is possibly 'null' or type not guaranteed

// // With type assertion:
// const myInput = document.querySelector("input") as HTMLInputElement;
// console.log(myInput.value); // ✅ Now TS knows it's an input element





type Person = { name: string };
type Employee = { name: string; employeeId: number };

let person: Person = { name: "Alice" };

// Assert person is actually Employee
let employee = person as Employee;
console.log(employee.employeeId); // ❌ At runtime, employeeId is undefined!
