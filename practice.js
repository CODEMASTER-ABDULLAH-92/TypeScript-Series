"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enum (short for "enumeration") is a special data type that lets you define a group of named constant values.
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["User"] = "user";
    UserRole["Guest"] = "guest";
})(UserRole || (UserRole = {}));
function checkRole(role) {
    if (role === UserRole.Admin) {
        console.log("Access granted");
    }
}
checkRole(UserRole.Admin); // ✅ works
// checkRole("admim");          // ❌ error (type-safe)
// 🔹 Use Cases of Enums
// User Roles / Permissions
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Viewer"] = 2] = "Viewer";
})(Role || (Role = {}));
// → Managing access control.
// Status Codes
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Approved"] = "APPROVED";
    Status["Rejected"] = "REJECTED";
})(Status || (Status = {}));
// Days of the Week / Months
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
// API Response Types
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Success"] = 200] = "Success";
    ResponseType[ResponseType["NotFound"] = 404] = "NotFound";
    ResponseType[ResponseType["ServerError"] = 500] = "ServerError";
})(ResponseType || (ResponseType = {}));
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
var users;
(function (users) {
    users["Admin"] = "admin1";
    users["Admin1"] = "admin2";
    users["Admin2"] = "admin3";
    users["Admin3"] = "admin4";
})(users || (users = {}));
console.log(users.Admin);
console.log(users.Admin1);
console.log(users.Admin2);
console.log(users.Admin3);
//# sourceMappingURL=practice.js.map