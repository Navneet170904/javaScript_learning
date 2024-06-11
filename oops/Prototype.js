let myHero = ["Virat", "Rohit"]

let heropower = {
    virat: "coverdrive",
    rohit: "Pullshot",

    getpowervk: function(){
        console.log(`the power of virat is ${this.virat}`);
    }
}

Object.prototype.navneet = function(){
    console.log('Nsvneet is present every where');
}

Array.prototype.nav = function(){
    console.log('Nsvneet says hello');
}

// heropower.navneet()
// myHero.navneet()
// myHero.nav()
// heropower.nav() //heropower.nav is not a function output...


// inheritance

const User = {
    name:"nav",
    email: "nav@gmail.com"
}

const teacher = {
    makevideo: true
}

const teachersupport = {
    isAvaliable: false
}

const TAsupport = {
    makeassignment: 'Js Assignment',
    __proto__: teacher
}

teacher.__proto__ = User
// morden syntax ----

Object.setPrototypeOf(teachersupport, teacher)


let anothername = "ChaiAURcode    "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`the true length of string is ${this.trim().length}`)
}

anothername.truelength()
"Navneet".truelength()
"chirag".truelength()