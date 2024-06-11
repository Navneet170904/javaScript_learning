// function User(email, password){
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
// }

// const navnet = new User("navneet@ok.com", "12222")
// console.log(navnet.email);
// console.log(navnet.password);

// get set properties inside the object


const User = {
    _email: "nav@112.com",
    _password: "acvbcd",

    get email(){
        return this._email.toUpperCase()
    },   
    set email(value){
        this._email = value
    }
}

const navneet = Object.create(User)
console.log(navneet.email);