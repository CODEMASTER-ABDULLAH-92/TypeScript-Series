"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 12;
let name = "abdullah";
//Arrays in the ts 
let arr = [1, 2, 3, 4, 4];
arr.unshift(11);
// console.log(arr);
// tuples in the ts 
let arr2 = [12, "abdullah"];
// ensums 
var userRole;
(function (userRole) {
    userRole["admin"] = "admin";
    userRole["guest"] = "guest";
    userRole["user"] = "user";
})(userRole || (userRole = {}));
userRole.admin;
var statusCode;
(function (statusCode) {
    statusCode["notFound"] = "404 not ";
    statusCode["good"] = "200 good";
    statusCode["bad"] = "500 bad";
})(statusCode || (statusCode = {}));
statusCode.notFound;
//Here admin can access the propeties of the blueprint of User 
function abcd(obj) {
    console.log(obj.isAdmin);
}
// function abcde(obj:value):void{
//     console.log(obj);
//     if (typeof obj === "string") {
//         console.log("This is a string");
//     } else if (typeof obj === "boolean") {
//         console.log("This is a boolean");
//     } else {
//         console.log("This is null");
//     }
//     // console.log(obj);
//     // console.log(typeof obj);
//     // console.log(obj.toUpperCase());
//     // console.log(obj.length);
//     // console.log(obj.toString());
//     // console.log(obj.charAt(0));
//     // console.log(obj.split("a"));
//     // console.log(obj.indexOf("a"));
//     // console.log(obj.replace("a", "b"));
// }
// abcde("abdullah");
// functions 
//rest operator
// the rest operator converts the all the values into 
// array 
function add(...arg) {
    console.log(arg);
}
// add(1,2,3,4,5,6,7,8,9,10);
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [...ar];
// console.log(newArr);
function abd(a, b) {
    console.log(a.toLocaleString());
    console.log(b.toLocaleUpperCase());
}
// abd(12,"abdullah");
// optional parameters 
function fn(age, name) {
    console.log(age);
    console.log(name);
}
fn(23, "abdullah");
fn(23);
//# sourceMappingURL=app.js.map