// 🏆 1. Partial<T>

// Makes all properties optional.

interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;

const user: PartialUser = {
  name: "John", // ✅ You can skip 'age'
};


// ✅ Great for update functions objects, where you might only update some fields.
