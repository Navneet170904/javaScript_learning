function printMyName(){
    console.log("N");
    console.log("A");
    console.log("V");
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("T");
    
}
// printMyName() // printMyName --- is a reference and after adding () at the end it will become a calling of function.

function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}

// const result = addTwoNumbers(3, 6)
// console.log("Result: ", result);


/*
output:- of above function result not return the value ....
9
Result:  undefined
*/

function addTwoNumbers(num1, num2){
    // let result = num1+num2;  //one way
    // return result
    // return num1+num2 // second way 
    // console.log("Navneet")
}
// after return statement nothing will be print except return statement .

// const result = addTwoNumbers(3,6)
// console.log("result: ", result);

function userLoggedIn(username){
    // if(username === undefined)
    
    if(!username){
        console.log("please enter the name");
        return
    }
    return `${username} just logged in`
}

// console.log(userLoggedIn("navneet"));
// console.log(userLoggedIn());

/* output if we did not give any value in the function we use a if statement..
please enter the name
undefined
*/

// function calculateCartPricing(...num1){ // output :- [ 200, 300, 500, 2000 ]
function calculateCartPricing(val1, val2, ... num1){ // output:- [ 500, 2000 ]
    return num1
}

// console.log(calculateCartPricing(200,300,500, 2000));

const user = {
    userName: "navneet",
    price: 1999,
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    userName: "sam",
    price: 1299,
})

// function on array

const myarr = [200, 3000, 4000, 33]

function returnArrayValue(getArray){
    return getArray[2]
}

// console.log(returnArrayValue(myarr));

// console.log(returnArrayValue([200, 100, 400, 22]))