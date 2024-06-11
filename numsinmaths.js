const score = 300
// console.log(score);

const num = new Number(1000)
// console.log(num);

// console.log(num.toString());
// console.log(num.toFixed(2));

const anotherNum = 23.353;
// console.log(anotherNum.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'));

/************************************* MATH ***********************************/

// console.log(Math);
// console.log(Math.abs(-4)); // negative will change into postiove not vice versa
// console.log(Math.round(4.6)); // here it will do round of
// console.log(Math.ceil(4.2)); // here if a value goes above 4 it will give round of 5
// console.log(Math.floor(4.6)); // it will give 4 if value goes 4.9.

// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max-min+1))+min); // important lineeeeeee
