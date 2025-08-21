var a = 12;
let name = "abdullah";

//Arrays in the ts 

let arr = [1,2,3,4,4];
arr.unshift(11);
// console.log(arr);


// tuples in the ts 

let arr2:[number, string] = [12,"abdullah"];


// ensums 
enum userRole{
    admin = "admin",
    guest = "guest",
    user="user"
}

userRole.admin

enum statusCode{
    notFound ="404 not ",
    good ="200 good",
    bad ="500 bad"
}
statusCode.notFound

// any 
// let b; koi value na da ya type na bataya 


// how to give the type to data 

// let c:number = 12;

// unknown 

// let d:unknown;
//  d = 12;
//  d ="harsh";
//  if (typeof d === "string") {
//     d.toUpperCase();
//  }



// void 

// in same like the c++ code when the function returns nothing we use the void same like 

// this function returns nothing that's why we use this 
// function abcd() :void{
//     console.log(a);
// }
// // this returns the number 
// function efg() :number{
//     return 12;
// }

// // this return the string 
// function hij() :string {
//     return "abdullah"
// }

// function istrue(): boolean{
//     return true;
// }



// type infrence 

// when we are not giving the type of variable to and the TS suggest automatically type this is calles the type infrence like 
// let a = "abdullah"; TS automatically give the type string 
// let b = 12; TS automatically give the type number  
// let c = true TS automatically give the type boolean 


// type anonotation 

// we gives the type to the variables 

// let f: number | boolean | string;
// f = 12;
// f = true;


// // type anonotation in functions 
// function abd(a:number, b:string, c:boolean): void{

// }


// The interface 

// interface User {
//     name: string,
//     age: number,
// }

// function abcd(ab: User): void {
//     console.log(ab.name);
//     console.log(ab.age);
// }

// abcd({name:"abdullah", age:12});


// Extented the interface 

interface User {
    name:string,
    age:number,
}

interface Admin extends User{
    isAdmin:boolean
}

//Here admin can access the propeties of the blueprint of User 

function abcd(obj:Admin):void{
    console.log(obj.isAdmin);
}

// abcd({name:"abd", age:23, isAdmin:true})


// When we create the interface with the same name then the interface is mergede in to the one place 

// like 

// interface abdc {
//     name:string
// }
// interface abcd {
//     age:number
// }


// type aliases

type value = string | boolean | null

function abcde(obj:value):void{

}
abcde("abdullah");