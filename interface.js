"use strict";
/**
 * 📝 TypeScript Notes: Interfaces, Required/Optional/Readonly, and Promises
 *
 * This file explains:
 * 1. Difference between Objects and Interfaces
 * 2. Required, Optional, and Readonly properties
 * 3. Promises and how to use them with async/await
 * 4. Frontend Example (API call + Component Props)
 * 5. Backend Example (MongoDB with Mongoose)
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Create actual object based on interface
const user1 = {
    name: "Abdullah",
    age: 20,
};
console.log(user1.name); // Abdullah
console.log(user1.age); // 20
const app = {
    appId: "abc123",
    userId: "user001",
    jobId: "job789",
};
// Update optional property
app.status = "pending"; // ✅ allowed
// Async function always returns a Promise
async function fetchPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    // Check what we received
    console.log(data.name);
    console.log(data.types[0].type.name);
    // Return object that matches Pokemon interface
    return {
        id: data.id,
        name: data.name,
        type: data.types[0].type.name,
    };
}
// Usage
fetchPokemon("pikachu").then((poke) => {
    console.log(poke.id, poke.name, poke.type);
});
// NOTE: Normally used in React component, but since this is a .ts file, 
// we'll just simulate with a function that prints props.
function printUserProfile({ name, age, favoriteColor }) {
    console.log(`Name: ${name}, Age: ${age}, Favorite Color: ${favoriteColor}`);
}
// Usage
printUserProfile({ name: "Alice", age: 12, favoriteColor: "purple" });
printUserProfile({ name: "Bob", age: 13, favoriteColor: "green" });
/* -------------------------------------------------------------------------- */
/*                        6. BACKEND EXAMPLE WITH MONGOOSE                    */
/* -------------------------------------------------------------------------- */
const mongoose_1 = __importDefault(require("mongoose"));
// Create schema based on the interface
const BlogPostSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now },
    tags: [String],
});
// Create a model
const BlogPost = mongoose_1.default.model("BlogPost", BlogPostSchema);
// Create new post
const newPost = new BlogPost({
    title: "My First Blog",
    content: "Learning about interfaces is awesome!",
    author: "12-Year-Old Coder",
    tags: ["coding", "typescript"],
});
// newPost.likes = 10; // ❌ Error: 'likes' is not part of IBlogPost
/* -------------------------------------------------------------------------- */
/*                              ✅ KEY TAKEAWAYS                               */
/* -------------------------------------------------------------------------- */
/**
 * - Interface = Blueprint (compile-time only)
 * - Object = Real data (runtime)
 * - Properties:
 *    - Required (default): must exist
 *    - Optional (?): may or may not exist
 *    - Readonly: cannot be changed after creation
 * - Promises always return a value in the future (or error)
 * - Frontend: Use interfaces for props, API responses
 * - Backend: Use interfaces for DB models, request/response validation
 */
//# sourceMappingURL=interface.js.map