const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)

/*
{
  value: 3.141592653589793,
  writable: false, // becausse of this property we can not change the value of PI or rewrite 
  enumerable: false,
  configurable: false
}
*/

const chai = {
    name: "ginger chai",
    price: 250,
    isAvaliable: true,

    getorder(){
        console.log('chai nahi bani');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}