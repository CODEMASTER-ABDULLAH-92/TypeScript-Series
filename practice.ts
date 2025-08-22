// Enum (short for "enumeration") is a special data type that lets you define a group of named constant values.
enum UserRole {
  Admin = "admin",
  User = "user",
  Guest = "guest"
}

function checkRole(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Access granted");
  }
}

checkRole(UserRole.Admin);   // ✅ works
// checkRole("admim");          // ❌ error (type-safe)


// 🔹 Use Cases of Enums

// User Roles / Permissions

enum Role {
  Admin,
  Editor,
  Viewer
}


// → Managing access control.

// Status Codes

enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED"
}


// Days of the Week / Months

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


// API Response Types

enum ResponseType {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}


// ✅ Summary:

// Enum = A collection of named constants.

// Benefits = Readability, type-safety, autocompletion, fewer bugs.

// Use Cases = Roles, statuses, days, categories, response codes, etc.


// 🔹 What you said:

// “With the use of enums we can create variables and constant variables … like in JavaScript we can create let var = 12. Enum provides a collection of variables where we can create that.”

// 👉 That’s almost true, but enums are a bit more than just a collection of variables.

// 🔹 Correct Way to Think About Enums

// Variables (let, const) → store a single value.

// Enums → store a set (collection) of related constants under one name.

// So instead of writing multiple constants one by one:

// const ADMIN = "admin";
// const USER = "user";
// const GUEST = "guest";


// You can group them inside one enum:

// enum Role {
//   Admin = "admin",
//   User = "user",
//   Guest = "guest"
// }


// Now Role is like a namespace that contains all related constants.
// Instead of having scattered variables, they’re grouped together and strongly typed.

// 🔹 Why Not Just Use const Variables?

// You could write:

// const STATUS_PENDING = "PENDING";
// const STATUS_APPROVED = "APPROVED";
// const STATUS_REJECTED = "REJECTED";


// ✅ Works fine, but:

// It’s not grouped under one object.

// No type safety (you could still pass "PENDNG" by mistake).

// Harder to auto-complete in IDE.

// With an enum:

// enum Status {
//   Pending = "PENDING",
//   Approved = "APPROVED",
//   Rejected = "REJECTED"
// }

// function updateStatus(status: Status) {
//   console.log("Status updated:", status);
// }

// updateStatus(Status.Pending);   // ✅ works
// updateStatus("PENDNG");         // ❌ error

// ✅ Final Answer

// You can think of enum as a collection of related constants, similar to having multiple const variables grouped together.
// But the difference is:

// Enums are type-safe (you can’t pass wrong values).

// Enums give structure + autocompletion.

// Enums group related constants under one logical name.



enum users  {
  Admin="admin1",
  Admin1="admin2",
  Admin2="admin3",
  Admin3="admin4",
}

console.log(users.Admin);
console.log(users.Admin1);
console.log(users.Admin2);
console.log(users.Admin3);
