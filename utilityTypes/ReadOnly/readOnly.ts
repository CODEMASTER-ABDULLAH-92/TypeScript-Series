// 🏆 3. Readonly<T>

// Makes all properties read-only (cannot be reassigned).

interface User {
  name: string;
}

const user: Readonly<User> = {
  name: "Alice",
};

// user.name = "Bob"; // ❌ Error: Cannot assign to 'name'