// tempoaal is a api for date it will work in future, it will work like Math global variable,

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
/*
Mon May 27 2024 15:13:50 GMT+0530 (India Standard Time)
2024-05-27T09:43:50.270Z
Mon May 27 2024
2024-05-27T09:43:50.270Z
15:13:50 GMT+0530 (India Standard Time)
5/27/2024
5/27/2024, 3:13:50 PM

type of date is OBJECT....
*/


// let myCreatedDate = new Date(2023, 2, 17)
// let myCreatedDate = new Date(2023, 2, 17, 5, 8)
let myCreatedDate = new Date("2023-05-26")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // to convert time into seconds

let newDate = new Date()
// console.log(newDate.toString());
// console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))