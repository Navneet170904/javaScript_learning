let a = 300
if(true) {
    let a = 30
    const b = 100
    // console.log("Local Scope (Inner a ): ", a);
}

// console.log("Global scope (Outer a) :- ", a);

function one(){
    const userName = "Navneet"
    function two(){
        const website = "youtube"
        // console.log(userName);
    }
    // console.log(website); //it will give an error because it is calling outside the scope...
    // child functions can access the parent function not vice versa
    two()
}
one()

if(true){
    const userName = "Navneet"
    if(userName === "Navneet"){
        const website = " youtube"
        console.log(userName + website);
    }
    // console.log(website); //error website is not defined
}
// console.log(userName); //error userName is not defined

// console.log(addOne(5));
// no error
function addOne(num){
    return num + 1
}

// addtwo(5)
// it will give error because it came under hoisting... here we declared a function inside a variable ....
const addtwo = function(num){
    return num + 2
}
// console.log(addtwo(5));

