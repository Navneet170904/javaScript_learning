function multiply5(num){
    return num*5
}
multiply5.power = 2
console.log(multiply5(5));
console.log(multiply5.power);
console.log(multiply5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", "25")
const tea = new createUser("tea", "205")

chai.printMe()
tea.printMe()

/*
new keyword:--------

// when we write new keyword then a empty object {} will created which called instance (new object wwill created)
// then constructor functione will call that will pack all the information and give to use
// then all the arguments will be injected
// and last will be get into the function

A new object is created: the new keyword initiates the creation of a new js object.

A prototype is linked: The newly created object gets linked to the protootype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: the constructor function is called with the specified arguments and this is bound to the 
newly created object. if no ecxplicit return value is specified from the constructor, javascript assumes this,
the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value
(object, array, function, etc.), the newly created object is returned.


*/

