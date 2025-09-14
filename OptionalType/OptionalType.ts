// 🔑 1. Optional Types

// An optional type means the property may or may not exist.
// You mark it using ? after the property name.

// 🔍 Example 1: Optional Property

interface User {
  name: string;
  age?: number; // optional
}

const u1: User = { name: "John", age: 25 }; // ✅ OK
const u2: User = { name: "Alice" };         // ✅ OK (age is optional)


// ✅ age is optional, so you don’t have to provide it.

// 🧠 When to Use Optional Types

// When the value is not always required.

// When defining partial data (like form fields where some fields can be skipped).