// classes are come after ES6

class User{
    constructor(username, email, passsword){
        this.username = username
        this.email = email
        this.passsword = passsword
    }
    encryptPassword(){
        return `${this.passsword}abc`
    }
}

const chai = new User("chai", "chai@ok.com", "123")
console.log(chai.encryptPassword()); 
// same we can do using prototype