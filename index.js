"use strict";
// let myname: string | null;
Object.defineProperty(exports, "__esModule", { value: true });
// myname = null;
// console.log(myname);
// myname = "zia";
// console.log(myname);
// //myname = undefined; //Error
// //myname = 12; //Error
// let myAge: string | number;
// myAge = 16;//narrowing
// console.log(myAge);
// //console.log(myAge.toLowerCase());//Error
// myAge = "Dont Know";//narrowing
// console.log(myAge);
// console.log(myAge.toString()); // common to both types 
//                                //can be called even without narrowing
// console.log(myAge.toLowerCase());//Can be called on string 
// //because of narrowing
// let obj: any = { x: 0 };
// // None of the following lines of code will throw compiler errors.
// // Using `any` disables all further type checking, and it is assumed
// // you know the environment better than TypeScript.
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;                                
// let a=1;
// console.log(a);
let a = 10;
exports.default = a;
