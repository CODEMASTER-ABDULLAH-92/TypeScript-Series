// 🔑 What is a Union Type?

// A union type means a value can have more than one possible type.
// You tell TypeScript: "Hey, this variable can be this or that."


// let age: number | string;

// age = 25;        // ✅ Allowed (number)
// age = "twenty";  // ✅ Allowed (string)
// age = true;      // ❌ ERROR: boolean is not allowed
