// ===============================
// 🔹 ENUMS IN TYPESCRIPT
// ===============================

// Enum (short for "enumeration") is a special data type
// that lets you define a group of named constant values.

// Example: User Roles
// Enums are fixed constants, not normal variables.
// You can not increment the value

enum num {
  age = 23,
}
// Error
// console.log((num.age++));
// console.log((num.age)++);
// let age2 = num.age++;
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

// ===============================
// 🔹 Use Cases of Enums
// ===============================

// 1️⃣ User Roles / Permissions → Managing access control
enum Role {
  Admin,
  Editor,
  Viewer,
}

// 2️⃣ Status Codes → Useful in workflows or approvals
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}



// 4️⃣ API Response Types → Representing HTTP status codes
enum ResponseType {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
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

updateStatus(Status.Pending); // ✅ works
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
// console.log(Users.Admin);   // "admin1"
// console.log(Users.Admin1);  // "admin2"
// console.log(Users.Admin2);  // "admin3"
// console.log(Users.Admin3);  // "admin4"

// 💡 TIP: Prefer meaningful names instead of Admin1, Admin2.
// For example:
enum AdminRoles {
  SuperAdmin = "admin1",
  Manager = "admin2",
  Moderator = "admin3",
  Assistant = "admin4",
}

// ===============================

//  Exercise

// ===============================

// ## Enums

// 1. Create an enum `Direction` with values `Up, Down, Left, Right`. Write a function that logs movement.
// 2. Define an enum `HttpStatus` with codes like `OK = 200, NotFound = 404`. Write a function that maps code to message.
// 3. Create a string enum `Roles` with `"Admin" | "User" | "Guest"`. Write a function that checks access.
// 4. Write a function that accepts an enum `Days` (`Monday` … `Sunday`) and returns if it’s weekend.
// 5. Define an enum `Colors` and write a function to convert to hex values.
// 6. Create a numeric enum `LogLevel` with `Info, Warning, Error`. Write a logger function.
// 7. Write a function that takes `PaymentStatus` enum (`Pending, Completed, Failed`) and returns a message.
// 8. Create a string enum `Months`. Write a function that returns the number of days.
// 9. Define an enum `Sizes` (`Small, Medium, Large`). Write a function to calculate shipping cost.
// 10. Write a function that iterates over enum `Seasons` and prints values.
// 11. Create an enum `GameResult` with `Win, Lose, Draw`. Write a function to calculate points.
// 12. Write a function that converts `Direction` enum into arrow symbols.
// 13. Create an enum `Currency` (`USD, EUR, PKR`). Write a function that converts amounts to PKR.
// 14. Define a string enum `Permissions` (`Read, Write, Execute`). Write a function that checks if user has permission.
// 15. Write a function that accepts enum `TransportMode` (`Car, Bus, Train, Plane`) and returns estimated time.
// 16. Create an enum `FoodCategory`. Write a function that returns list of foods for each category.
// 17. Define a numeric enum `Status` with custom values. Write a function that maps status code to string.
// 18. Write a function that accepts `TrafficLight` enum and returns if you should stop or go.
// 19. Create a const enum `HttpMethod` (`GET, POST, PUT, DELETE`). Use it in a fetch wrapper function.
// 20. Write a function that takes enum `ChessPiece` and returns allowed moves.

// 1. Create an enum `Direction` with values `Up, Down, Left, Right`. Write a function that logs movement.

// enum Direction {
//   Up = "up",
//   Down = "down",
//   Left = "left",
//   Right = "right"
// }

// const logDirection = ():void=>{
//   console.log(Direction.Up);
//   console.log(Direction.Down);
//   console.log(Direction.Left);
//   console.log(Direction.Right);
// }

// logDirection();

// 2. Define an enum `HttpStatus` with codes like `OK = 200, NotFound = 404`. Write a function that maps code to message.

// enum HttpStatus {
//   OK = 200,
//   NotFound = 404,
//   BadRequest = 400,
//   Unauthorized = 401
// }
// In TypeScript/JavaScript, inside a switch, if you use return inside a case, it immediately exits the function, so there’s no need for a break.

// const getStatusMessage = (code: HttpStatus): string => {
//   switch (code) {
//     case HttpStatus.OK:
//       return "Request succeeded";
//     case HttpStatus.NotFound:
//       return "Resource not found";
//     case HttpStatus.BadRequest:
//       return "Bad request";
//     case HttpStatus.Unauthorized:
//       return "Unauthorized access";
//     default:
//       return "Unknown status";
//   }
// };

// // Example usage:
// console.log(getStatusMessage(HttpStatus.OK));        // Request succeeded
// console.log(getStatusMessage(HttpStatus.NotFound));  // Resource not found

// 3. Create a string enum `Roles` with `"Admin" | "User" | "Guest"`. Write a function that checks access.

// 3. Create a string enum `Roles` with `"Admin" | "User" | "Guest"`. Write a function that checks access.

// enum Roles {
//   Admin = "admin",
//   User = "user",
//   Guest = "guest",
// }

// const checkStatus = (role: Roles): void => {
//   if (role === "admin") {
//     console.log("Access Granted");
//   } else if (role === "user") {
//     console.log("Access Granted to user ");
//   } else {
//     console.log("Not Accessed");
//   }
// };

// checkStatus(Roles.Guest);



// 4. Write a function that accepts an enum `Days` (`Monday` … `Sunday`) and returns if it’s weekend.

// enum Days {
//   Monday = "Monday",
//   Tuesday = "Tuesday",
//   Wednesday = "Wednesday",
//   Thursday = "Thursday",
//   Friday = "Friday",
//   Saturday = "Saturday",
//   Sunday = "Sunday"
// }

// const checkWeekend = (day: Days): string => {
//   switch (day) {
//     case Days.Saturday:
//     case Days.Sunday:
//       return "Weekend";
//     default:
//       return "Not Weekend";
//   }
// };

// console.log(checkWeekend(Days.Saturday)); // Weekend
// console.log(checkWeekend(Days.Wednesday)); // Not Weekend


// 5. Define an enum `Colors` and write a function to convert to hex values.


enum Colors {
  white="#fff",
  black="#000"
}

const convertColors = (color:Colors)=>{
  console.log(`The hex value of white is ${color}`);
}
convertColors(Colors.white);
convertColors(Colors.black);