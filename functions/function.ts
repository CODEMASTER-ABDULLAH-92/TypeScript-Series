// 🔑 1. Function Return Types

// In TypeScript, you can specify what type a function should return.
// If you don’t, TypeScript will infer it automatically.

// 🔍 Example 1: Explicit Return Type
function add(a: number, b: number): number {
  return a + b;
}


// : number tells TypeScript the function must return a number.

// If you try to return a string, you’ll get an error.

function add(a: number, b: number): number {
  return "hello"; // ❌ ERROR: Type 'string' is not assignable to type 'number'
}

// 🔍 Example 2: void Return Type

// Use void when your function doesn’t return anything:

function logMessage(message: string): void {
  console.log(message);
}

// 🔍 Example 3: never Return Type

// Use never when your function never finishes normally (e.g., throws error or runs forever):

function throwError(message: string): never {
  throw new Error(message);
}

// 🔑 2. Optional Parameters

// Optional parameters are defined using ? after the parameter name.

function greet(name: string, age?: number): void {
  if (age) {
    console.log(`Hello ${name}, you are ${age} years old.`);
  } else {
    console.log(`Hello ${name}`);
  }
}

greet("Alice");     // ✅ works without age
greet("Alice", 25); // ✅ works with age


// ⚠️ Rule: Optional parameters must come after required ones.

function greet(age?: number, name: string) {} // ❌ ERROR

// 🔑 3. Default Parameters

// You can also set default values for parameters.

function greet(name: string = "Guest", age: number = 18) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greet();          // ✅ Hello Guest, you are 18 years old
greet("Alice");   // ✅ Hello Alice, you are 18 years old
greet("Bob", 25); // ✅ Hello Bob, you are 25 years old


// ✅ Default parameters make them automatically optional, so you don’t need ?.

function createUser(
  name: string,
  age?: number,
  country: string = "Pakistan"
): string {
  return `${name} is ${age ?? "unknown"} years old and lives in ${country}`;
}

console.log(createUser("Alice"));          // "Alice is unknown years old and lives in Pakistan"
console.log(createUser("Bob", 25));        // "Bob is 25 years old and lives in Pakistan"
console.log(createUser("Charlie", 30, "USA")); // "Charlie is 30 years old and lives in USA"


// ✅ In short:

// Return Type (: type) → defines what your function should return.

// Optional Parameters (?) → parameter may be missing (undefined if not passed).

// Default Parameters (= value) → parameter gets a default value when not provided.