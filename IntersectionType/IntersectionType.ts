// 🔑 What is an Intersection Type?

// An intersection type combines multiple types into one — meaning the value must satisfy ALL of the types.

// Think of it as "AND" type (while union is "OR" type).


// type A = { name: string };
// type B = { age: number };

// type C = A & B; // Intersection type
// Now, any value of type C must have both name and age.


type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "John",
  employeeId: 101,
};

console.log(staffMember.name);       // ✅ Works
console.log(staffMember.employeeId); // ✅ Works

const staffMember2: Staff = {
  name: "John",
}; // ❌ ERROR: Property 'employeeId' is missing
