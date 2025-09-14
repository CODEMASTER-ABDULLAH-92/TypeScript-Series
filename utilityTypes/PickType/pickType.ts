// 🏆 4. Pick<T, K>

// Pick only specific properties from a type.

// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// type UserPreview = Pick<User, "name" | "email">;

// const preview: UserPreview = {
//   name: "Alice",
//   email: "alice@mail.com",
//   // age ❌ not allowed
// };
