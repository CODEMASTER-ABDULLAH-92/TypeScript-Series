# 🎯 TypeScript Learning Series  

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)  
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)  
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)  

Welcome to the **TypeScript Learning Series** – a place where you can **master TypeScript step by step** in the **easiest and most practical way possible** 🚀  

This repo is perfect for:  
👨‍💻 **Beginners** who are just starting with TypeScript  
🧠 **JavaScript developers** who want to level up  
⚡ **React / Node.js developers** who want type safety  

---

## 📚 Topics Covered  

Here’s what you’ll learn in this series – explained with **clear examples** & **real-world use cases**:  

✨ **Core Concepts**  
- 🔹 **Type Inference** – Let TS guess types for you  
- 🔹 **Union & Intersection Types** – Combine and merge types  
- 🔹 **Type Aliases** – Give names to complex types  
- 🔹 **Interfaces** – Define object structure & contracts  
- 🔹 **Enums** – Work with named constants  

🚀 **Advanced Concepts**  
- 🔹 **Generics** – Reusable & scalable types  
- 🔹 **Type Assertion** – Tell TS what you already know  
- 🔹 **Utility Types** – Built-in helpers:  
  `Partial<T>` | `Pick<T, K>` | `Readonly<T>` | `Required<T>`  
  + Optional & Nullable Types + Function Types  
- 🔹 **Type Guards & Narrowing** – Safe type checking  
- 🔹 **Discriminated Unions** – Handle multiple object types cleanly  

---

## ⚡ Getting Started  

Clone this repo and start exploring:  

```bash
git clone https://github.com/CODEMASTER-ABDULLAH-92/TypeScript-Series/
```
---

📢 Connect With Me
If this repo helps you, ⭐ star it and share it with your friends!
📧 Email: abdullahpeerzada92@gmail.com

---

🌟 Why TypeScript?
💙 TypeScript makes JavaScript safer, more powerful, and developer-friendly.
It catches errors before runtime, improves auto-completion, and helps you write cleaner & maintainable code.
With TypeScript, you can confidently build:
- ⚛️ React & Next.js projects
- 🖥 Node.js APIs
- 📦 Any scalable JS application

# TypeScript Projects

| Serial No. | Project Name       | Tech Stack              | GitHub Link | Author |
|------------|------------------|------------------------|-------------|--------|
| 1          | Project One       | React, Tailwind CSS, Node.js | [GitHub Repo](https://github.com/username/project-one) | [Muhammad Abdullah](https://www.linkedin.com/in/abdullah-peerzada) |
| 2          | Project Two       | MERN Stack, JWT Auth   | [GitHub Repo](https://github.com/username/project-two) | [Muhammad Abdullah](https://www.linkedin.com/in/abdullah-peerzada) |
| 3          | Project Three     | Next.js, MongoDB, Express | [GitHub Repo](https://github.com/username/project-three) | [Muhammad Abdullah](https://www.linkedin.com/in/abdullah-peerzada) |

---

# 📘 TypeScript Generics

Generics are like **placeholders for types** that you can fill later.  
Think of them as a **box** that can hold any type — you decide the type when you use the function.  

---

## ✨ Syntax

```ts
function identity<T>(value: T): T {
  return value;
}
```
## ✨ Examples
```
// Without The Generics

// function identity(value: any): any {
//   return value;
// }

// let result = identity("Hello");
// result.toFixed(); // ❌ Runtime error (TS can't warn you)


function identity<T>(value: T): T {
  return value;
}

let result = identity("Hello");
result.toUpperCase(); // ✅ Works safely (TS knows it's a string)
```
## ✨ Generics With Interface
```
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "John" },
  success: true,
};
```
## Intersection Type
```
// An intersection type combines multiple types into one — meaning the value must satisfy ALL of the types.

// Think of it as "AND" type (while union is "OR" type).


 type A = { name: string };
 type B = { age: number };

// type C = A & B; // Intersection type
// Now, any value of type C must have both name and age.
```
## Example
```
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "John",
  employeeId: 101,
};

console.log(staffMember.name);       // ✅ Works
console.log(staffMember.employeeId); // ✅ Works

const staffMember2: Staff = {
  name: "John",
}; // ❌ ERROR: Property 'employeeId' is missing
```
## Nullable Types
```
 A nullable type means the variable or property can explicitly be null or undefined.
 You create it using a union type.
```
## Example
```
let name: string | null;

name = "Alice"; // ✅ OK
name = null;    // ✅ OK
name = 123;     // ❌ ERROR (only string or null allowed)

// 🔍 Example 2: Nullable Property
interface User {
  name: string;
  email: string | null;
}

const u: User = {
  name: "John",
  email: null, // ✅ allowed
};
```
## 🔑 Optional Types
```
// An optional type means the property may or may not exist.
// You mark it using ? after the property name.
```
## 🔍 Example 1: Optional Property
```
interface User {
  name: string;
  age?: number; // optional
}

const u1: User = { name: "John", age: 25 }; // ✅ OK
const u2: User = { name: "Alice" };         // ✅ OK (age is optional)
```

 ✅ age is optional, so you don’t have to provide it.
 🧠 When to Use Optional Types
 When the value is not always required.
 When defining partial data (like form fields where some fields can be skipped).

## Type inference

 Type inference means TypeScript automatically figures out the type of a variable or expression — without you explicitly writing it.
 Think of it as TypeScript guessing the type for you based on what you assigned.

let age = 20;
 ✅ Here, you didn’t write let age: number,
 but TypeScript infers that age is a number because you assigned 20.

 So now, if you try:
 
age = "twenty"; // ❌ ERROR: Type '"twenty"' is not assignable to type 'number'.

## 🔑 What is a Union Type?

 A union type means a value can have more than one possible type.
 You tell TypeScript: "Hey, this variable can be this or that."

```
 let age: number | string;

 age = 25;        // ✅ Allowed (number)
 age = "twenty";  // ✅ Allowed (string)
 age = true;      // ❌ ERROR: boolean is not allowed
```
## 🔹 ENUMS IN TYPESCRIPT

 Enum (short for "enumeration") is a special data type
 that lets you define a group of named constant values.

 Example: User Roles
 - Enums are fixed constants, not normal variables.
 - You can not increment the value
```
 // Errors
 console.log((num.age++));
 console.log((num.age)++);
 let age2 = num.age++;
```
✅ Enum = A collection of named constants (grouped values).
✅ Benefits = Readability, type-safety, autocompletion, fewer bugs.
✅ Use Cases = Roles, statuses, days, categories, response codes, etc.

**Example**
```
enum UserRole {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

// Function using enum
function checkRole(role: UserRole) {
  if (role === UserRole.Admin) {
    // console.log("Access granted");
  }
}

checkRole(UserRole.Admin); // ✅ works
// checkRole("admim");        // ❌ error (type-safe, prevents typos)
```
## Function Return Types

 🔑 Function Return Types

 In TypeScript, you can specify what type a function should return.
 If you don’t, TypeScript will infer it automatically.

🔍 Example 1: Explicit Return Type
```
function add(a: number, b: number): number {
  return a + b;
}
```

// : number tells TypeScript the function must return a number.

// If you try to return a string, you’ll get an error.

```
function add(a: number, b: number): number {
  return "hello"; // ❌ ERROR: Type 'string' is not assignable to type 'number'
}
```

🔍 Example 2: void Return Type

// Use void when your function doesn’t return anything:
```
function logMessage(message: string): void {
  console.log(message);
}
```

 🔍 Example 3: never Return Type

 Use never when your function never finishes normally (e.g., throws error or runs forever):
```
function throwError(message: string): never {
  throw new Error(message);
}
```

 🔑 . Optional Parameters

Optional parameters are defined using ? after the parameter name.

```
function greet(name: string, age?: number): void {
  if (age) {
    console.log(`Hello ${name}, you are ${age} years old.`);
  } else {
    console.log(`Hello ${name}`);
  }
}

greet("Alice");     // ✅ works without age
greet("Alice", 25); // ✅ works with age

```
 ⚠️ Rule: Optional parameters must come after required ones.

function greet(age?: number, name: string) {} // ❌ ERROR

## 🔑 Default Parameters

// You can also set default values for parameters.

```
function greet(name: string = "Guest", age: number = 18) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greet();          // ✅ Hello Guest, you are 18 years old
greet("Alice");   // ✅ Hello Alice, you are 18 years old
greet("Bob", 25); // ✅ Hello Bob, you are 25 years old
```

** ✅ Default parameters **
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


## Interface
  * - Interface = Blueprint (compile-time only)
  * - Object = Real data (runtime)
  * - Properties:
  *    - Required (default): must exist
  *    - Optional (?): may or may not exist
  *    - Readonly: cannot be changed after creation
  * - Promises always return a value in the future (or error)
  * - Frontend: Use interfaces for props, API responses
  * - Backend: Use interfaces for DB models, request/response validation

** Define the rules (blueprint) **
```
// interface User {
//   name: string;
//   age: number;
// }
```

** Create actual object based on interface **
```
 const user1: User = {
   name: "Abdullah",
   age: 20,
 };
```
 console.log(user1.name); // Abdullah
 console.log(user1.age);  // 20

 Key Point:
 ```
 - `User` interface does NOT exist at runtime
 - `user1` object is REAL and must follow the interface rules.
```
## REQUIRED, OPTIONAL (?) AND READONLY PROPERTIES  

 Required (default): Must always be provided
 Optional (?): May or may not be provided
 Readonly: Can only be set once (cannot change later)
```
 interface Application {
   readonly appId: string; // system-generated, cannot change
   userId: string;         // required
   jobId: string;          // required
   status?: "pending" | "accepted" | "rejected"; // optional
 }
```
```
 const app: Application = {
   appId: "abc123",
   userId: "user001",
   jobId: "job789",
 };
```
 Update optional property
 app.status = "pending";   // ✅ allowed
 app.appId = "xyz456";  // ❌ Error: 'appId' is readonly

# 🔑 Type Assertion in TypeScript

Type Assertion is a way to tell TypeScript:  
> **"I know more about this value's type than you do — so treat it as this specific type."**

This does **not** perform any runtime type checking or conversion.  
It simply tells the compiler to trust you.

---

## 📌 Basic Example

```ts
let value: unknown = "Hello";

// ✅ Using `as` syntax (most common)
let strLength = (value as string).length;
console.log(strLength); // 5
```
```
// ❌ Without type assertion:
const input = document.querySelector("input");
console.log(input.value); 
// Error: Object is possibly 'null' or type not guaranteed

// ✅ With type assertion:
const myInput = document.querySelector("input") as HTMLInputElement;
console.log(myInput.value); // Now TS knows it's an input element
```

# 🔎 Type Guards & Type Narrowing in TypeScript

Type Guards are **runtime checks** that help TypeScript figure out which type a value really is.  
Think of them as **`if` conditions** that tell TypeScript:  
> "Hey, inside this block, this variable is definitely of this type."

---

## 📌 Example 1: Using `typeof`

```ts
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // ✅ value is a string here
  } else {
    console.log(value.toFixed(2)); // ✅ value is a number here
  }
}
```
# InstanceOf

```
class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function speak(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark(); // ✅ narrowed to Dog
  } else {
    pet.meow(); // ✅ narrowed to Cat
  }
}
```
# 🧠 Type Narrowing
```
function logId(id: string | number) {
  if (typeof id === "string") {
    // ✅ Narrowing happened here
    console.log(id.toUpperCase()); // id is now string
  } else {
    console.log(id.toFixed(2)); // id is now number
  }
}
```
# 🏷️ Type Aliases & Type Narrowing in TypeScript

TypeScript allows you to create **type aliases**, which are just names for types.  
They make your code **cleaner, reusable, and more readable**.

---

## 📌 Type Alias for Union Types

You can use a type alias to give a name to a **union type**:

```ts
type UserID = string | number;

let user1: UserID = 101;       // ✅ valid
let user2: UserID = "abc123";  // ✅ valid
// let user3: UserID = true;   // ❌ Error: boolean is not allowed
```
## 📌 Type Alias for Object Types
```
type User = {
  id: number;
  name: string;
  email?: string; // optional property
};

const user: User = {
  id: 1,
  name: "Abdullah"
};
```
# 📌 Type Narrowing with Type Aliases
```
type Status = "loading" | "success" | "error";

function showMessage(status: Status) {
  if (status === "loading") {
    console.log("Please wait...");
  } else if (status === "success") {
    console.log("Data loaded!");
  } else {
    console.log("Something went wrong!");
  }
}

showMessage("success"); // ✅ works

```
