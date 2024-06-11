// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is the best number")
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`\nOuter Loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop vlaue: ${j}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
    
}
let myarr = ["siderman", "virat", "dhoni"]
// console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
    // in java script there is no outofbound error instide of outofbound error they give undefined.
    
}

// break and continue....


// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Detected ${i}`);
//         break
//     }
//     console.log(`value of i is ${i}`);
    
// }
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected ${i}`);
        continue  // continue will say that first time he will ignore the condition 
        //if the condition second time repeat it will stop the process.
    }
    console.log(`value of i is ${i}`);
    
}