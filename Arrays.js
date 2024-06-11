const myArr = [0,1,2,3,4,5]
// console.log(myArr[0]);
// if we form a copy of array it will form shallow copies i.e. original array will also change.

const myHeros = ["Virat", "Dhoni", "Rohit"]
const myArr2 = new Array(1, 2, 3, 4)

// ARRAY METHODS

// myArr.push(6)
// myArr.push(8)
// console.log(myArr);
// myArr.pop()
// myArr.unshift(9)
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

console.log("A:- ", myArr);

const myN1 = myArr.slice(1,3);
console.log(myN1);
console.log("B:- ", myArr);


const myN2 = myArr.splice(1,3);
console.log(myN2);
console.log("C:- ", myArr);

// in slice the ouput will come only slice element and there is no change in original array
// but in splice the output will come spllice element with the includes of last range element
// and our original array also manipulate and give output without splice element
/*
A:-  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ] slice
B:-  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2, 3 ] splice
C:-  [ 0, 4, 5 ]  original array

*/

