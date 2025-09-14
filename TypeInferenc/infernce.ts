// Type inference means TypeScript automatically figures out the type of a variable or expression — without you explicitly writing it.

// Think of it as TypeScript guessing the type for you based on what you assigned.

let age = 20;
// ✅ Here, you didn’t write let age: number,
// but TypeScript infers that age is a number because you assigned 20.

// So now, if you try:
// age = "twenty"; // ❌ ERROR: Type '"twenty"' is not assignable to type 'number'.
