// Discriminated Union in TS 

// A Discriminated Union is:

// A union of object types

// Each type has a common property (called the "discriminant") with unique literal values

// TypeScript uses this property to narrow down which type you’re working with
// type SuccessResponse = {
//   status: "success";
//   data: string[];
// };

// type ErrorResponse = {
//   status: "error";
//   message: string;
// };

// type ApiResponse = SuccessResponse | ErrorResponse;

// function handleResponse(response: ApiResponse) {
//   if (response.status === "success") {
//     console.log("Data:", response.data);
//   } else {
//     console.error("Error:", response.message);
//   }
// }
