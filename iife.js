// Immediately Invoked Function Expresssions(IIFE)
// for removing a global space pollution me use iife ()()

(function chai(){
    // console.log(`DB Connected`)
})();

((name) => {
    // console.log(`DB Connected two ${name}`)
})('navneet')


/*******************************execution understanding*******************************/
let val1 =10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total

}

/***********************************Call Stack*************************************/

let result1 = addNum(val1,val2)
let result2 = addNum(3, 2)
// console.log(result1)

function one(){
    console.log("one");
    two()
}

function two(){
    console.log("two");
    three()
}

function three(){
    console.log("three");
}
one()
two()
three()

