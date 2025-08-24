// In TypeScript, a Type Alias is simply a way to give a name to a type.

type UserID = string | number;

let user1: UserID = 101;       // valid
let user2: UserID = "abc123";  // valid


// object Type 

type User = {
  id: number;
  name: string;
  email?: string; // optional property
};

const user: User = {
  id: 1,
  name: "Abdullah"
};

// type narowing 

type Status = "loading" | "success" | "error";

function showMessage(status: Status) {
  if (status === "loading") {
    console.log("Please wait...");
  } else if (status === "success") {
    console.log("Data loaded!");
  } else {
    console.log("Something went wrong!");
  }
}

showMessage("success"); // ✅ works
