// ===============================
// 🔹 ENUMS IN TYPESCRIPT
// ===============================

// Enum (short for "enumeration") is a special data type 
// that lets you define a group of named constant values.

// Example: User Roles
// Enums are fixed constants, not normal variables.
// You can not increment the value 

enum num{
  age = 23,
}
// Error 
// console.log((num.age++));
// console.log((num.age)++);
// let age2 = num.age++;
enum UserRole {
  Admin = "admin",
  User = "user",
  Guest = "guest"
}

// Function using enum
function checkRole(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Access granted");
  }
}

checkRole(UserRole.Admin);   // ✅ works
// checkRole("admim");        // ❌ error (type-safe, prevents typos)


// ===============================
// 🔹 Use Cases of Enums
// ===============================

// 1️⃣ User Roles / Permissions → Managing access control
enum Role {
  Admin,
  Editor,
  Viewer
}

// 2️⃣ Status Codes → Useful in workflows or approvals
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED"
}

// 3️⃣ Days of the Week / Months
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

// 4️⃣ API Response Types → Representing HTTP status codes
enum ResponseType {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}


// ===============================
// 🔹 Summary & Key Concepts
// ===============================

// ✅ Enum = A collection of named constants (grouped values).
// ✅ Benefits = Readability, type-safety, autocompletion, fewer bugs.
// ✅ Use Cases = Roles, statuses, days, categories, response codes, etc.


// ===============================
// 🔹 Important Notes
// ===============================

// 🔸 Variables (let, const) → store a single value.
// 🔸 Enums → store a SET (collection) of related constants under one name.

// Example (using const variables):
// const ADMIN = "admin";
// const USER = "user";
// const GUEST = "guest";

// ❌ Problem: Not grouped, no type safety, prone to typos.

// ✅ Solution: Group inside one enum
// enum Role {
//   Admin = "admin",
//   User = "user",
//   Guest = "guest"
// }


// ===============================
// 🔹 Why Not Just Use const?
// ===============================

// You could write constants like this:
// const STATUS_PENDING = "PENDING";
// const STATUS_APPROVED = "APPROVED";
// const STATUS_REJECTED = "REJECTED";

// ✅ Works fine, but:
// - Not grouped under one object
// - No type safety (typos allowed: "PENDNG")
// - Harder to autocomplete in IDE

// With enums, TypeScript enforces correct values and groups them logically.

function updateStatus(status: Status) {
  console.log("Status updated:", status);
}

updateStatus(Status.Pending);   // ✅ works
// updateStatus("PENDNG");      // ❌ error (prevents typo)


// ===============================
// 🔹 Final Answer
// ===============================

// You can think of enum as a collection of related constants, 
// similar to having multiple const variables grouped together.

// BUT enums are better because:
// ✅ Type-safe (wrong values not allowed)
// ✅ Structured grouping
// ✅ IDE autocompletion
// ✅ More readable & maintainable


// ===============================
// 🔹 Custom Enum Example
// ===============================

// Example: Multiple admin levels
enum Users {
  Admin = "admin1",
  Admin1 = "admin2",
  Admin2 = "admin3",
  Admin3 = "admin4",
}

// Usage
console.log(Users.Admin);   // "admin1"
console.log(Users.Admin1);  // "admin2"
console.log(Users.Admin2);  // "admin3"
console.log(Users.Admin3);  // "admin4"

// 💡 TIP: Prefer meaningful names instead of Admin1, Admin2.
// For example:
enum AdminRoles {
  SuperAdmin = "admin1",
  Manager = "admin2",
  Moderator = "admin3",
  Assistant = "admin4",
}
