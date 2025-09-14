// Generics are like placeholder for type that can fill 
// later think of them as a box that can hold any type, Yuo decide the type when you use the function 


// The Syntax

// function identity<T>(value: T): T {
//   return value;
// }


// Example 
// Without The Generics

// function identity(value: any): any {
//   return value;
// }

// let result = identity("Hello");
// result.toFixed(); // ❌ Runtime error (TS can't warn you)


function identity<T>(value: T): T {
  return value;
}

let result = identity("Hello");
result.toUpperCase(); // ✅ Works safely (TS knows it's a string)




// Generic Interfaces

interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "John" },
  success: true,
};
