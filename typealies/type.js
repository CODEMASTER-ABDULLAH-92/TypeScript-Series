"use strict";
// In TypeScript, a Type Alias is simply a way to give a name to a type.
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = 101; // valid
let user2 = "abc123"; // valid
const user = {
    id: 1,
    name: "Abdullah"
};
function showMessage(status) {
    if (status === "loading") {
        console.log("Please wait...");
    }
    else if (status === "success") {
        console.log("Data loaded!");
    }
    else {
        console.log("Something went wrong!");
    }
}
showMessage("success"); // ✅ works
//# sourceMappingURL=type.js.map