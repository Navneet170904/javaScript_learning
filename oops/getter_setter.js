class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        // return this.password.toUpperCase()
        // return this._password.toUpperCase()
        return `${this._password}navneet`
    }
    set password(value){
        // this.password = value // give this error ("Maximum call stack size exceeded") because we set value multiple times
        this._password = value
    }
}

const navneet = new User("navneet@ao.com", "abccd")
console.log(navneet.password);
console.log(navneet.email);