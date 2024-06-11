const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // Db calls, cryptography, network
    setTimeout(function(){
    console.log('Async task is complete');
    resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise Consumed")
})
// .then has direct connection with resolve

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "navneet", email: "navneet@ex.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "navneet", password: "12234"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "1234"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumedPromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedPromiseFive()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/Navneet170904')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error")
//     }
// }

// getAllUser()

fetch('https://api.github.com/users/Navneet170904')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))