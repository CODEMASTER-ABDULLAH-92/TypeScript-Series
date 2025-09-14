// 🏆 2. Required<T>

// Makes all properties required (opposite of Partial).

interface User {
  name?: string;
  age?: number;
}

const user: Required<User> = {
  name: "John",
  age: 25, // ✅ Now required
};