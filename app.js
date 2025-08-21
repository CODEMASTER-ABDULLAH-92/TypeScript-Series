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
function abcde(obj) {
}
abcde("abdullah");
//# sourceMappingURL=app.js.map