/*
premitive :- 7 types :- String, Number, Boolean, null, undefined, Symbol, BigInt.

java script is a dynamically typed language.

Reference (Non Premitive) :- Array, Object, Functions
*/

let id = Symbol('1233')
let anotherid = Symbol('1233')

// console.log(typeof id === typeof anotherid);

// console.log(id === anotherid);

const heros = ["virat", "dhoni", "rohit"]; // array

let myobj = {
    name: "navneet", //objects
    age: 20,
}

const myFunction = function() {
    console.log("Hello world"); // function
}

// **************************************** Memory *****************************************

/*
Stack (primitive) :- we get a copy of the variable

Heap (Non-primitive) :- we will get reference i.e. change will happen in original value............

*/

let myname = "Navneetyadav"
let anothername = myname

anothername = "nonu"
console.log(myname);
console.log(anothername);

let userone = {
    email: "user@google.com",
    upiid: "user@ybl"
}

let usertwo = userone

usertwo.email = "navneet@google.com"

console.log(userone.email);
console.log(usertwo.email);