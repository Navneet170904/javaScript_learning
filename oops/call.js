function setUser(username){
    this.username = username
    console.log("called")
}

function calleduser(username, email, password){
    // setUser(username) calling but not giving value so we use
    setUser.call(this, username) // now call we hole the reference of the variable after execution....
    this.email = email
    this.password = password
}

const chai = new calleduser("chai", "chai@ek.com", "123")
console.log(chai)