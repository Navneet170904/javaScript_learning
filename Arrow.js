const loggedIn = {
    userName: "Navneet",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.userName}, welcome to website`) // this will tell about the current context or current variable details....
        console.log(this);
    }
}

// loggedIn.welcomemessage()
// loggedIn.userName = "Sam"
// loggedIn.welcomemessage()
// console.log(this)

// // function chai(){
//     let username = "navneet"
//     // console.log(this.username);
// }


// const chai = function() {
//     let username = "navneet"
//     console.log(this.username);
// }


const chai = () => {  
    let username = "navne et"
    // console.log(this.username);  // => it is a arrowfunction....
}

// chai()

/*****************************************ARROW FUNCTIONS*********************************************/

// const addTwoNumbers = (num1, num2) =>{
//     return num1+num2 // it is a explicit return
// }

// const addTwoNumbers = (num1, num2) => num1+num2
// const addTwoNumbers = (num1, num2) => ( num1+num2 )  // it is a implecit return 

const addTwoNumbers = () => ({username: "navneet"})

// console.log(addTwoNumbers());