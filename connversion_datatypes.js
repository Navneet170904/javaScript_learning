let score = true

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); 


// in the case of a number like 33 it will give number output 
// but in the case of 33aa  and also with undefined it will give NAN
// in the case of null it will give 0
// true => 1, false => 0

let isLoggedIn = "Navneet"
let booleanisLoggedIn = Boolean(isLoggedIn)

// console.log(booleanisLoggedIn);

// 1 => true; 0 => false
// "" => false; "navneet" => true

let numbertostring = 33

let stringvalue = String(numbertostring)

// console.log(stringvalue);
// console.log(typeof stringvalue);

// ******************************* Operations *********************************

let value = 8
let negvalue = -value

// console.log(negvalue);

let str1 = "navneet"
let str2 = " yadav"

let str3 =  str1 + str2

// console.log(str3);

// console.log("1" + 2 + 2);  // 122
// console.log(1 + 2 + "2"); //32

// console.log(+true); // 1
// console.log(+"");  //0



//************************************************** comparison ***********************************/


console.log(null > 0); // false  here we do comparison so it will change null in to 0 and 0 is not greater than 0
console.log(null == 0); // false here we do equality check so null stay null not change into 0
console.log(null >= 0); // true here same comparison happening it will change into 0

// ===

console.log("2" === 2); // here it will also check the data type for equlity