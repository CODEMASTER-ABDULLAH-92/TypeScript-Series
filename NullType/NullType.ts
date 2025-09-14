// 🔑 2. Nullable Types

// A nullable type means the variable or property can explicitly be null or undefined.
// You create it using a union type.

// 🔍 Example 1: Nullable Variable
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
