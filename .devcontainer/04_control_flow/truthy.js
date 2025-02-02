// const userEmail = "harshi@gmail.com"

// if(userEmail){
//     console.log("Got user email");
    
// }
// else{
//     console.log("Dont have user email");
    
// }

//  falsy values

//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

//"0", 'false', " ", [], {}, function(){}

// if (userEmail.length===0) {
//     console.log("array is empty"); // to check if array is empty
    
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) { // to check object is emtpy
//     console.log("Object is empty");
    
// }

//Nullish Coalescing Operater (??): null undefined

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 7
val1 = null ?? 10 ?? 5

console.log(val1);

//?? if value is null or undefined

//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
