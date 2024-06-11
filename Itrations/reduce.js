const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)
// console.log(myTotal);


const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        course: "js course",
        price: 2999
    },
    {
        course: "py course",
        price: 999
    },
    {
        course: "mobile dev course",
        price: 5999
    },
    {
        course: "data science course",
        price: 12999
    },
]

const totalprice = shoppingCart.reduce( (acc, item) => acc+item.price, 0)
console.log(totalprice);