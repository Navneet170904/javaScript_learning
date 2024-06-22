//  object will declared in two way :- 1.) Literals and 2.) as constructors.
// One concept is come :- singleton :- when we create a constructor(object) then it will form singleton that mean 
// it is a only single piece..... literals can not form singleton....

// Object Literals:- 
// for using a symbol in the object 
const mySym = Symbol("Key1")
const JsUser = {
    name: "Navneet",
    "full name": "Navneet Kumar Yadav",
    age: 20,
    [mySym]: "myKey1", // declaring a symbol like this 
    location: "Shamli",
    email: "navneet@google.com",
    isLoggedIn: false,
    lastLonginDay: ["Monday", "Saturdat"]
}

// to access a object we have two methods
// console.log(JsUser.email);
// console.log(JsUser["email"]); // this way of accessing a object is good 
// console.log(JsUser["full name"]); // beacuse if we want a object which declared as string than we only access by it.
// console.log(JsUser[mySym]); // accessing a symbol like this

JsUser.email = "navneet@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)

JsUser.email = "navneet@chatgpt.com"
// console.log(JsUser);
/*
{
  name: 'Navneet',
  'full name': 'Navneet Kumar Yadav',
  age: 20,
  location: 'Shamli',
  email: 'navneet@gmail.com', // after freeging the email will not change.
  isLoggedIn: false,
  lastLonginDay: [ 'Monday', 'Saturdat' ],
  [Symbol(Key1)]: 'myKey1'
}
*/

JsUser.greeting = function(){
    // console.log("Hello JS User");
}
/*
output :- console.log(JsUser.greeting());:----   
Hello JS User
undefined
-------------------------------------------------------------------------
console.log(JsUser.greeting);:----- [Function (anonymous)]// output
here function did not exicute but only reference will came back...
*/

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

/***********************************more informaton about objects*****************************************/


// using constructor or singleton

const tinderUser = new Object()// it is a singleton object...
// const tinderUser = {} // it is a non singleton or literals object...

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullname : {
        userfullname: {
            firstname: "navneet",
            lastname: "yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname["firstname"]);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "c"}

// const obj3 = {obj1, obj2} // same problem which is come in array{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'c' } }

// const obj3 = Object.assign({}, obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'c' } //{} target // obj1, obj2 :- sources

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const user = [
    {
        id:1,
        email: "na@gmail.com"
    },
    {
        id:2,
        email: "na@gmail.com"
    }
]

// console.log(user[1].id);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // for check this property is exist or not .....

/**************************************object destructuring**************************************/

const course = {
    courseName: "javascript",
    price: 999,
    courseInstructor: "hitesh",
}

course.courseInstructor;

// const{courseInstructor: instrctor} = course
// console.log(instrctor);
0


// json:---- javascript object notation