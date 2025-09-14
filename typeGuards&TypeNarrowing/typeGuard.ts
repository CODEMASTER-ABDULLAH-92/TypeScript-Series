// 🔎 Type Guards in TypeScript

// Type Guards are runtime checks that help TypeScript figure out which type a value really is.
// Think of them as “if conditions” that narrow the type of a variable.

// ✅ Example 1: Using typeof

function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // ✅ value is a string here
  } else {
    console.log(value.toFixed(2)); // ✅ value is a number here
  }
}

// Here typeof value === "string" is a type guard.


// ✅ Example 2: Using instanceof


class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function speak(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark(); // ✅ narrowed to Dog
  } else {
    pet.meow(); // ✅ narrowed to Cat
  }
}


// 🧠 Type Narrowing

// Type Narrowing is the process TypeScript performs after using a type guard.
// Basically:
// ➡️ Type Guard = Condition
// ➡️ Type Narrowing = Result


function logId(id: string | number) {
  if (typeof id === "string") {
    // Narrowing happened here ✅
    console.log(id.toUpperCase()); // id is now string
  } else {
    console.log(id.toFixed(2)); // id is now number
  }
}




// typeof is used for arrays, strings 
// instanceof is used for the objects and classess 
