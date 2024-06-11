const user = {
    username: "navneet",
    loginCount: 3,
    signedIn: true,

    getUsrDetrails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        // console.log(this); // here this will give the value of cuurent object or context...
    }
}

// console.log(user.username);
// console.log(user.getUsrDetrails());
// console.log(this);// in global it will give {} because there is no value in global

// new is a Constructor function it is use for making new context...

function Userss(username, loginCount, isLoggedIn){
    this.username = username;
    this.logincount = loginCount;
    this.isLogIn = isLoggedIn;

    this.greeting = function(){
        // console.log(`Welcome ${this.username}`);
    }

    // return this // it will implicitly defind
}

const userOne = new Userss("Navneet", 11, true);
const userTwo = new Userss("Nav", 31, false); // after adding the new keyword it will give new identity to userTwo
// if we do not write new key it will overwrite the value of the userOne
console.log(userOne.constructor);
// console.log(userTwo);
// console.log(userTwo instanceof Userss);
// console.log(userTwo instanceof Object);

