class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
    static createId(){
        return `123` //navneet.createId is not a function
    }
}

const navneet = new User("Navneet")
// console.log(navneet.createId())

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
}

const iphone = new Teacher("iphone", "i@phon.com", "123")
// console.log(iphone.logMe());
iphone.logMe()
// console.log(iphone.createId()) //iphone.createId is not a function ...output