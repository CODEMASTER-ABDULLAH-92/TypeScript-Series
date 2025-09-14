## Enums

1. Create an enum `Direction` with values `Up, Down, Left, Right`. Write a function that logs movement.
2. Define an enum `HttpStatus` with codes like `OK = 200, NotFound = 404`. Write a function that maps code to message.
3. Create a string enum `Roles` with `"Admin" | "User" | "Guest"`. Write a function that checks access.
4. Write a function that accepts an enum `Days` (`Monday` … `Sunday`) and returns if it’s weekend.
5. Define an enum `Colors` and write a function to convert to hex values.
6. Create a numeric enum `LogLevel` with `Info, Warning, Error`. Write a logger function.
7. Write a function that takes `PaymentStatus` enum (`Pending, Completed, Failed`) and returns a message.
8. Create a string enum `Months`. Write a function that returns the number of days.
9. Define an enum `Sizes` (`Small, Medium, Large`). Write a function to calculate shipping cost.
10. Write a function that iterates over enum `Seasons` and prints values.
11. Create an enum `GameResult` with `Win, Lose, Draw`. Write a function to calculate points.
12. Write a function that converts `Direction` enum into arrow symbols.
13. Create an enum `Currency` (`USD, EUR, PKR`). Write a function that converts amounts to PKR.
14. Define a string enum `Permissions` (`Read, Write, Execute`). Write a function that checks if user has permission.
15. Write a function that accepts enum `TransportMode` (`Car, Bus, Train, Plane`) and returns estimated time.
16. Create an enum `FoodCategory`. Write a function that returns list of foods for each category.
17. Define a numeric enum `Status` with custom values. Write a function that maps status code to string.
18. Write a function that accepts `TrafficLight` enum and returns if you should stop or go.
19. Create a const enum `HttpMethod` (`GET, POST, PUT, DELETE`). Use it in a fetch wrapper function.
20. Write a function that takes enum `ChessPiece` and returns allowed moves.

---

## Interfaces

1. Define an interface `Person` with `name` and `age`. Write a function that greets the person.
2. Create an interface `Product` with `id, name, price`. Write a function that applies discount.
3. Define an interface `Animal` with `sound()`. Implement `Dog` and `Cat` classes using it.
4. Write a function that accepts an interface `Point` with `x, y` and returns distance from origin.
5. Create an interface `User` with optional `email`. Write a function that prints `email` if present.
6. Define an interface `Vehicle` with `drive()`. Implement `Car` and `Bike`.
7. Create an interface `Shape` with `area()`. Implement `Circle` and `Rectangle`.
8. Write a function that takes `Employee` interface and prints full details.
9. Define an interface `Student` with `grades: number[]`. Write a function that calculates average.
10. Create an interface `Logger` with method `log(message: string)`. Implement `ConsoleLogger`.
11. Define an interface `ApiResponse<T>` with `data` and `error?`. Write a function returning `ApiResponse<User>`.
12. Write an interface `Repository<T>` with methods `add`, `remove`, `getAll`. Implement for `string`.
13. Create an interface `AuthService` with `login`, `logout`. Write a function that uses it.
14. Define an interface with index signature `[key: string]: number`. Write a function that sums values.
15. Create an interface `Cart` with `items: Product[]`. Write a function to calculate total price.
16. Define an interface `Config` with `readonly` properties. Write a function that tries to update.
17. Write an interface `Shape3D` that extends `Shape`. Implement `Cube`.
18. Create an interface `Event` with `id, type, timestamp`. Write a function that logs events.
19. Define an interface `Notification` with `message, type`. Write a function that displays notification.
20. Create an interface `Queue<T>`. Implement enqueue and dequeue operations.

---


## 1. Type Aliases (`type`)

1. Create a type alias `Point` for an object with `x` and `y` as numbers, and write a function that calculates distance between two points.
2. Define a type alias `User` with `id`, `name`, and `email`. Write a function that takes an array of `User` and returns only their emails.
3. Create a type alias `Coordinates` that can represent either 2D or 3D coordinates. Write a function that accepts both.
4. Define a type alias `StringOrNumber` and write a function that adds numbers or concatenates strings.
5. Create a type alias `Product` with `name`, `price`, `discount?`. Write a function that calculates the discounted price.
6. Define a type alias `ApiResponse<T>` with `data` and `error`. Write a function returning `ApiResponse<User>`.
7. Create a type alias `RGB` for color representation. Write a function to convert RGB to hex.
8. Define `TupleType` as `[string, number]`. Write a function that takes this tuple and returns a formatted string.
9. Create a type alias `ID = string | number`. Write a function that normalizes `ID` to string.
10. Create a type alias `CartItem` with `id`, `name`, `quantity`, `price`. Write a function to calculate total cart price.
11. Define a type alias `BooleanOrStringArray` and create a function to handle it.
12. Define a type alias `Shape = Circle | Square`. Write a function that computes area.
13. Create a type alias `Nullable<T>` that allows `T | null`. Use it with `User`.
14. Define a type alias for a function `MathOperation` that accepts two numbers and returns number. Implement `add`, `subtract`.
15. Create a type alias `HttpMethod` for `"GET" | "POST" | "PUT" | "DELETE"`. Write a function that validates input.
16. Define `OptionalString` as `string | undefined`. Write a function that trims if defined.
17. Create a type alias `Config` with `readonly` fields. Write a function that tries to mutate and see error.
18. Define a type alias `Pair<T>` as `[T, T]`. Write a function that swaps pair values.
19. Create a type alias `ErrorResult` and `SuccessResult`. Write a function returning union of both.
20. Define `StringRecord = Record<string, string>`. Write a function to map keys to uppercase.

---

## 2. Interface vs Type

1. Define an interface `Car` and type alias `Bike`, both with `brand` and `speed`. Write a function that works with both.
2. Create an interface `Employee` and extend it to `Manager`. Do the same with `type`. Compare usage in a function.
3. Write a function that accepts either a `type` alias or an `interface` representing a `User` object.
4. Create an interface `Animal` with `sound()`. Create a type alias `Machine` with `run()`. Implement both in classes.
5. Create a type alias and interface for `Rectangle`. Write a function to calculate perimeter using both.
6. Define an interface with optional properties. Do the same with type. Write a function that checks them.
7. Create a type alias `Shape` as union and an interface `ShapeInterface` with discriminated properties. Write a function to compute area.
8. Define an interface with index signature. Do the same using type alias. Write a function that uses them.
9. Create an interface `ApiResponse<T>` and type alias `ApiResult<T>`. Write a function that returns both.
10. Define an interface for a function signature. Do the same with type alias. Implement them.
11. Create a type alias that combines multiple interfaces. Write a function that prints combined data.
12. Extend interface `Person` with `Student`. Do the same with type alias using intersection. Test with objects.
13. Write a function that takes a parameter of interface type. Rewrite with type alias and compare.
14. Define an interface `Vehicle` and add new property by declaration merging. Try same with type alias (should fail).
15. Create an interface `ReadonlyUser`. Create same with type alias + `readonly`. Compare usage.
16. Write a function that takes a parameter as interface. Another that takes union of two types. Show differences.
17. Create an interface for array-like object. Do the same with type alias. Write a function that uses them.
18. Define interface with method overloads. Try replicating with type alias. Compare results.
19. Write a generic interface `Box<T>`. Write same as generic type alias. Use both in functions.
20. Create an interface `Shape` and a type alias `ShapeUnion`. Write a function that demonstrates differences.

---

## 3. Union Types & Intersection Types

1. Write a function that takes parameter `string | number` and returns its length or numeric value.
2. Create a union `Admin | User`. Write a function that prints different properties based on type.
3. Define a union `Circle | Square`. Write a function `calculateArea` using discriminated unions.
4. Write a function that accepts parameter of type `boolean | "yes" | "no"`.
5. Create an intersection type `Person & Employee`. Write a function that requires both properties.
6. Define a union of literal types `"success" | "error" | "loading"`. Write a function that handles each case.
7. Write a function that takes argument `Date | string` and converts to `Date`.
8. Create union `Fish | Bird`. Write a function that checks which type and calls `swim` or `fly`.
9. Define intersection `Developer & Manager`. Write a function that requires both.
10. Write a function that accepts union `Array<string> | string`. Normalize to array.
11. Create intersection `User & { password: string }`. Write a function that masks password.
12. Define a union `null | number | string`. Write a function that handles all cases.
13. Write a function that accepts `Error | string`. Normalize to `Error`.
14. Create union `Circle | Square | Triangle`. Write a function that returns perimeter.
15. Define intersection `Config & Options`. Write a function that merges both.
16. Write a function that accepts union of tuples `[number, number] | [number, number, number]`.
17. Create union `Dog | Cat`. Write a type guard function `isDog()`.
18. Define intersection `Product & {discount: number}`. Write a function to apply discount.
19. Write a function that takes union of function types. Implement type narrowing.
20. Create union `string | { toString(): string }`. Write a function that calls `toString()` safely.

---

## 4. Generics

1. Write a generic function `identity<T>` that returns the same value.
2. Create a generic function `getArray<T>(items: T[]): T[]`.
3. Define a generic interface `Box<T>`. Create a function that accepts `Box<number>`.
4. Create a generic type alias `Response<T>`. Write a function returning `Response<User>`.
5. Write a generic function that accepts `T` and returns `[T, T]`.
6. Create a generic function `merge<T, U>(obj1: T, obj2: U): T & U`.
7. Define a generic class `Stack<T>`. Implement `push`, `pop`.
8. Write a generic function that filters array of type `T` with a predicate.
9. Create a generic function that swaps elements in a tuple `[T, U]`.
10. Write a generic constraint function that accepts objects with `length` property.
11. Create a generic function that returns the first element of an array.
12. Define a generic interface `Repository<T>`. Implement methods `add`, `getAll`.
13. Write a generic function `pluck<T, K extends keyof T>(obj: T, keys: K[])`.
14. Create a generic type `Nullable<T> = T | null`. Use it with `User`.
15. Write a generic function `mapArray<T, U>(arr: T[], fn: (item: T) => U)`.
16. Define a generic type `Dictionary<T> = Record<string, T>`. Use it with `number`.
17. Create a generic class `Queue<T>`. Implement enqueue, dequeue.
18. Write a generic function `filterByKey<T>(arr: T[], key: keyof T, value: any)`.
19. Define a generic function with default type parameter `<T = string>`.
20. Write a generic type `PromiseResult<T>` and a function returning it.

---

## 5. Utility Types

1. Use `Partial<User>` to make all properties optional. Write a function that updates user info.
2. Use `Required<User>` to enforce all properties. Write a function that validates.
3. Use `Readonly<User>` to prevent modification. Try mutating.
4. Use `Pick<User, "id" | "name">`. Write a function that prints only these.
5. Use `Omit<User, "password">`. Write a function that returns safe user.
6. Use `Record<string, number>`. Write a function to sum values.
7. Use `Exclude<"a" | "b" | "c", "c">`. Write a function that accepts only `"a" | "b"`.
8. Use `Extract<"a" | "b" | "c", "c" | "d">`. Write a function for common values.
9. Use `NonNullable<string | null | undefined>`. Write a function that trims string.
10. Use `ReturnType<() => number>`. Write a function with inferred return type.
11. Use `Parameters<typeof fn>`. Write a function that logs parameters.
12. Use `ConstructorParameters<typeof Class>`. Instantiate object dynamically.
13. Use `InstanceType<typeof Class>`. Write a function that accepts instance.
14. Use `ReadonlyArray<number>`. Write a function that prevents mutation.
15. Use `Partial<Config>` for update function.
16. Use `Required<Product>` to ensure product is fully defined.
17. Use `Omit<Order, "createdAt">`. Write a function that inserts order without date.
18. Use `Pick<User, "email">` to send notification.
19. Use `Record<"low" | "medium" | "high", number>` to store priorities.
20. Use `ReturnType<typeof getUser>` and log value.

---

## 6. Type Narrowing

1. Write a function that checks if input is string or number and handles accordingly.
2. Use `typeof` to narrow type between number and string.
3. Write a function that accepts `Date | string`. Narrow using `instanceof`.
4. Create a function that accepts `null | object`. Narrow using truthy check.
5. Write a function that accepts `User | null`. Narrow before accessing.
6. Use discriminated union `Shape` with `kind`. Narrow using switch.
7. Write a function that accepts `Fish | Bird`. Narrow using `in` operator.
8. Narrow function parameter using custom type guard `isUser()`.
9. Write a function with overloads and narrow input inside.
10. Use `Array.isArray` to narrow parameter to array or single element.
11. Write a function that accepts `HTMLElement | null`. Narrow using `if`.
12. Narrow type of variable by checking `typeof === "boolean"`.
13. Write a function with union of classes. Narrow using `instanceof`.
14. Narrow union of literals `"yes" | "no" | true | false`.
15. Write a function that accepts `Error | string`. Narrow before logging.
16. Use `typeof` to narrow `Function | number`.
17. Narrow tuple `[string, number] | [number, string]` based on typeof.
18. Narrow generic type using constraints.
19. Write a function narrowing unknown type to string before using.
20. Use optional chaining and nullish coalescing for narrowing.

---

## 7. Advanced Types (Mapped, Conditional, Infer)

1. Create a mapped type `Optional<T>` making all props optional.
2. Create a mapped type `Readonly<T>` making all props readonly.
3. Write a mapped type `Nullable<T>` making all props nullable.
4. Create conditional type `IsString<T> = T extends string ? true : false`.
5. Write a conditional type `ElementType<T>` that extracts array element type.
6. Use `infer` to extract return type from function type.
7. Create mapped type that converts all keys of object to boolean.
8. Write conditional type that checks if type is union.
9. Create mapped type that sets all properties to optional strings.
10. Write conditional type `Flatten<T>` that flattens nested arrays.
11. Use `infer` to extract parameter types of function.
12. Create mapped type `Mutable<T>` to remove `readonly`.
13. Write conditional type `PromiseType<T>` extracting type inside `Promise`.
14. Create mapped type `PickByType<T, U>` selecting only properties of type `U`.
15. Write conditional type `NonNever<T>` removing `never` from union.
16. Use `infer` to extract constructor parameter types.
17. Create mapped type `PartialExcept<T, K>` making all optional except `K`.
18. Write conditional type `IsArray<T>`.
19. Use `infer` to extract first element type from tuple.
20. Create mapped type that renames keys with prefix `"new_"`.

---
