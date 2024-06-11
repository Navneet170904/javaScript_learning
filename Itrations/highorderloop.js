// for of

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);    
}

const greetings = "Hello world!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
// map.set("UK", "United Kingdom") 
map.set('UK', "United Kingdom")
// map will not rewrite the value and it will print in same order....
// map.set('IN', "India") // not rewrite


// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

const myobject = {
    game1: "templerun",
    game2: "subwaysuffer"
}
// for (const [key, value] of myobject) {
//     // console.log(key, ':-', value);
//     // myobject is not iterable
// //  they are not iterable by for of loop................
// }


// object ke liye loop...............

const Language ={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift',
}

for (const key in Language) {
    // console.log(`${key} is shortcut for ${Language[key]}`);
}

// for in loop on array...............

const Myarr = ["ruby", "cpp", "js", "swift"]

for (const key in Myarr) {
    // console.log(key)
/*
when we print key by for in loop it will give this
0
1
2
3
*/
// for values....
    // console.log(Myarr[key]);
}



// for each loops.........................................................

const coding = ["ruby", "cpp", "js", "swift"]
// coding.forEach( function (items) { // for function
//     console.log(items);
// })


// coding.forEach( (items) => { // for arrow function....
//     console.log(items);
// })

// function print(items){
//     console.log(items);
// }

// coding.forEach(print)

// coding.forEach( function (items, index, arr) { // for function
//     console.log(items, index, arr);
// })


// object inside array

const mycoding =[
    {
        filename: "javascript",
        fileshortname: "js",
    },
    {
        filename: "java",
        fileshortname: "java",
    },
    {
        filename: "python",
        fileshortname: "py",
    },
]

mycoding.forEach( (items) => {
    console.log(items.fileshortname);
})