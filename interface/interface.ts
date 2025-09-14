// /**
//  * 📝 TypeScript Notes: Interfaces, Required/Optional/Readonly, and Promises
//  * 
//  * This file explains:
//  * 1. Difference between Objects and Interfaces
//  * 2. Required, Optional, and Readonly properties
//  * 3. Promises and how to use them with async/await
//  * 4. Frontend Example (API call + Component Props)
//  * 5. Backend Example (MongoDB with Mongoose)
//  */

// /* -------------------------------------------------------------------------- */
// /*                                1. INTERFACE                                */
// /* -------------------------------------------------------------------------- */

// // 👉 Interface = Blueprint / Checklist (exists only at compile-time)
// // 👉 Object = Actual data (exists at runtime)

// // Define the rules (blueprint)
// interface User {
//   name: string;
//   age: number;
// }

// // Create actual object based on interface
// const user1: User = {
//   name: "Abdullah",
//   age: 20,
// };

// console.log(user1.name); // Abdullah
// console.log(user1.age);  // 20

// // Key Point:
// // - `User` interface does NOT exist at runtime.
// // - `user1` object is REAL and must follow the interface rules.

// /* -------------------------------------------------------------------------- */
// /*               2. REQUIRED, OPTIONAL (?) AND READONLY PROPERTIES            */
// /* -------------------------------------------------------------------------- */

// // Required (default): Must always be provided
// // Optional (?): May or may not be provided
// // Readonly: Can only be set once (cannot change later)

// interface Application {
//   readonly appId: string; // system-generated, cannot change
//   userId: string;         // required
//   jobId: string;          // required
//   status?: "pending" | "accepted" | "rejected"; // optional
// }

// const app: Application = {
//   appId: "abc123",
//   userId: "user001",
//   jobId: "job789",
// };

// // Update optional property
// app.status = "pending";   // ✅ allowed
// // app.appId = "xyz456";  // ❌ Error: 'appId' is readonly

// /* -------------------------------------------------------------------------- */
// /*                                3. PROMISES                                 */
// /* -------------------------------------------------------------------------- */

// // Simple Definition:
// // "I promise to give you a value in the future. If something goes wrong, I give you an error instead."

// // Examples:
// // Promise<string>  → "I promise to give you a string"
// // Promise<User>    → "I promise to give you a User object"
// // Promise<boolean> → "I promise to give you true/false"

// /* -------------------------------------------------------------------------- */
// /*                        4. FRONTEND API CALL EXAMPLE                        */
// /* -------------------------------------------------------------------------- */

// // Define data structure for Pokemon
// interface Pokemon {
//   id: number;
//   name: string;
//   type: string;
// }

// // Async function always returns a Promise
// async function fetchPokemon(name: string): Promise<Pokemon> {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//   const data = await response.json();

//   // Check what we received
//   console.log(data.name);
//   console.log(data.types[0].type.name);

//   // Return object that matches Pokemon interface
//   return {
//     id: data.id,
//     name: data.name,
//     type: data.types[0].type.name,
//   };
// }

// // Usage
// fetchPokemon("pikachu").then((poke) => {
//   console.log(poke.id, poke.name, poke.type);
// });

// /* -------------------------------------------------------------------------- */
// /*                       5. FRONTEND PROPS EXAMPLE (NOT JSX)                  */
// /* -------------------------------------------------------------------------- */

// // Define props structure (blueprint for component props)
// interface UserProps {
//   name: string;
//   age: number;
//   favoriteColor: string;
// }

// // NOTE: Normally used in React component, but since this is a .ts file, 
// // we'll just simulate with a function that prints props.
// function printUserProfile({ name, age, favoriteColor }: UserProps) {
//   console.log(`Name: ${name}, Age: ${age}, Favorite Color: ${favoriteColor}`);
// }

// // Usage
// printUserProfile({ name: "Alice", age: 12, favoriteColor: "purple" });
// printUserProfile({ name: "Bob", age: 13, favoriteColor: "green" });

// /* -------------------------------------------------------------------------- */
// /*                        6. BACKEND EXAMPLE WITH MONGOOSE                    */
// /* -------------------------------------------------------------------------- */

// import mongoose from "mongoose";

// // Define interface (blueprint for BlogPost)
// interface IBlogPost {
//   title: string;
//   content: string;
//   author: string;
//   publishedDate: Date;
//   tags: string[];
// }

// // Create schema based on the interface
// const BlogPostSchema = new mongoose.Schema<IBlogPost>({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   author: { type: String, required: true },
//   publishedDate: { type: Date, default: Date.now },
//   tags: [String],
// });

// // Create a model
// const BlogPost = mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);

// // Create new post
// const newPost = new BlogPost({
//   title: "My First Blog",
//   content: "Learning about interfaces is awesome!",
//   author: "12-Year-Old Coder",
//   tags: ["coding", "typescript"],
// });

// // newPost.likes = 10; // ❌ Error: 'likes' is not part of IBlogPost

// /* -------------------------------------------------------------------------- */
// /*                              ✅ KEY TAKEAWAYS                               */
// /* -------------------------------------------------------------------------- */
// /**
//  * - Interface = Blueprint (compile-time only)
//  * - Object = Real data (runtime)
//  * - Properties:
//  *    - Required (default): must exist
//  *    - Optional (?): may or may not exist
//  *    - Readonly: cannot be changed after creation
//  * - Promises always return a value in the future (or error)
//  * - Frontend: Use interfaces for props, API responses
//  * - Backend: Use interfaces for DB models, request/response validation
//  */


// 1. Define an interface `Person` with `name` and `age`. Write a function that greets the person.
// 2. Create an interface `Product` with `id, name, price`. Write a function that applies discount.
// 3. Define an interface `Animal` with `sound()`. Implement `Dog` and `Cat` classes using it.
// 4. Write a function that accepts an interface `Point` with `x, y` and returns distance from origin.
// 5. Create an interface `User` with optional `email`. Write a function that prints `email` if present.
// 6. Define an interface `Vehicle` with `drive()`. Implement `Car` and `Bike`.
// 7. Create an interface `Shape` with `area()`. Implement `Circle` and `Rectangle`.
// 8. Write a function that takes `Employee` interface and prints full details.
// 9. Define an interface `Student` with `grades: number[]`. Write a function that calculates average.
// 10. Create an interface `Logger` with method `log(message: string)`. Implement `ConsoleLogger`.
// 11. Define an interface `ApiResponse<T>` with `data` and `error?`. Write a function returning `ApiResponse<User>`.
// 12. Write an interface `Repository<T>` with methods `add`, `remove`, `getAll`. Implement for `string`.
// 13. Create an interface `AuthService` with `login`, `logout`. Write a function that uses it.
// 14. Define an interface with index signature `[key: string]: number`. Write a function that sums values.
// 15. Create an interface `Cart` with `items: Product[]`. Write a function to calculate total price.
// 16. Define an interface `Config` with `readonly` properties. Write a function that tries to update.
// 17. Write an interface `Shape3D` that extends `Shape`. Implement `Cube`.
// 18. Create an interface `Event` with `id, type, timestamp`. Write a function that logs events.
// 19. Define an interface `Notification` with `message, type`. Write a function that displays notification.
// 20. Create an interface `Queue<T>`. Implement enqueue and dequeue operations.


 // ======================

 // Questions 

 // ======================
// 1. Define an interface `Person` with `name` and `age`. Write a function that greets the person.

// interface Person{
//     name:string,
//     age:number
// }

// const greet = (person:Person):void=>{
//     console.log(`Hello! ${person.name}. You are ${person.age} Years Old`);
// }

// const p1:Person = {
//     name:"Abdullah",
//     age:22,
// }
// greet(p1);


// 2. Create an interface `Product` with `id, name, price`. Write a function that applies discount.
// interface Product {
//   id?: string;
//   name: string;
//   price: number;
// }

// const dis = (pro: Product): void => {
//   const discountRate = 2; // in percent
//   const discount = (pro.price * discountRate) / 100;
//   const finalPrice = pro.price - discount;

//   console.log(
//     `The actual price of ${pro.name} is ${pro.price}. You got ${discountRate}% discount (${discount}). Now the grand total is ${finalPrice}.`
//   );
// };

// const d: Product = {
//   name: "Apple",
//   price: 230,
// };

// dis(d);


// 3. Define an interface `Animal` with `sound()`. Implement `Dog` and `Cat`

interface Animal {
  sound: () => void;
  name: string;
}

const Dog: Animal = {
  name: "Bool",
  sound: function () {
    console.log(`${this.name} says Woof 🐶`);
},
};

const Cat:Animal = {
    name:"Cato",
    sound:()=>{
        console.log(`${Cat.name} says Meow 🐶`);
    }
}
Dog.sound(); // 
Cat.sound();//

// 4. Write a function that accepts an interface `Point` with `x, y` and returns distance from origin.


interface Point {
  x: number;
  y: number;
}

function distance(p: Point): number {
  const dist = Math.sqrt(p.x * p.x + p.y * p.y);
  return dist;
}

const d: Point = {
  x: 5,
  y: 6,
};

console.log(`The distance from origin is: ${distance(d)}`);
