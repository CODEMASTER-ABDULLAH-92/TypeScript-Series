"use strict";
// ===============================
// 🔹 ENUMS IN TYPESCRIPT
// ===============================
Object.defineProperty(exports, "__esModule", { value: true });
// Enum (short for "enumeration") is a special data type 
// that lets you define a group of named constant values.
// Example: User Roles
// Enums are fixed constants, not normal variables.
// You can not increment the value 
var num;
(function (num) {
    num[num["age"] = 23] = "age";
})(num || (num = {}));
// Error 
// console.log((num.age++));
// console.log((num.age)++);
// let age2 = num.age++;
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["User"] = "user";
    UserRole["Guest"] = "guest";
})(UserRole || (UserRole = {}));
// Function using enum
function checkRole(role) {
    if (role === UserRole.Admin) {
        console.log("Access granted");
    }
}
checkRole(UserRole.Admin); // ✅ works
// checkRole("admim");        // ❌ error (type-safe, prevents typos)
// ===============================
// 🔹 Use Cases of Enums
// ===============================
// 1️⃣ User Roles / Permissions → Managing access control
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Viewer"] = 2] = "Viewer";
})(Role || (Role = {}));
// 2️⃣ Status Codes → Useful in workflows or approvals
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Approved"] = "APPROVED";
    Status["Rejected"] = "REJECTED";
})(Status || (Status = {}));
// 3️⃣ Days of the Week / Months
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
// 4️⃣ API Response Types → Representing HTTP status codes
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Success"] = 200] = "Success";
    ResponseType[ResponseType["NotFound"] = 404] = "NotFound";
    ResponseType[ResponseType["ServerError"] = 500] = "ServerError";
})(ResponseType || (ResponseType = {}));
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
function updateStatus(status) {
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
var Users;
(function (Users) {
    Users["Admin"] = "admin1";
    Users["Admin1"] = "admin2";
    Users["Admin2"] = "admin3";
    Users["Admin3"] = "admin4";
})(Users || (Users = {}));
// Usage
console.log(Users.Admin); // "admin1"
console.log(Users.Admin1); // "admin2"
console.log(Users.Admin2); // "admin3"
console.log(Users.Admin3); // "admin4"
// 💡 TIP: Prefer meaningful names instead of Admin1, Admin2.
// For example:
var AdminRoles;
(function (AdminRoles) {
    AdminRoles["SuperAdmin"] = "admin1";
    AdminRoles["Manager"] = "admin2";
    AdminRoles["Moderator"] = "admin3";
    AdminRoles["Assistant"] = "admin4";
})(AdminRoles || (AdminRoles = {}));
//# sourceMappingURL=enum.js.map