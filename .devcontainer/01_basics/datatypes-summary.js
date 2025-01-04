// Primitive
// 7 Types : String, Number, Boolean, null(Empty), undefined, Symbol(it is use to make variable unique),BigInt

// Reference Type(NoN-primitive)
//Array, Objects, functions
const score = 100 
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log( id === anotherId);
// console.log(typeof id);

const bigNumber = 435444767

// const heros = ["shaktiman","naagraj","Kimtaehyung"]//array

// let myObj {
//     name : "harshita",
//     age : 20,

// }

const myFunction = function(){
     console.log("Hello world");
}

// console.log(typeof bigNumber);

//****************** */

//stack(Primitive) we get copy, Heap(Non-Primitive) we reference of variable

let myName = "harshitaChoudhary"

let anothername = myName

 anothername = "choudharyji"
// console.log(anothername);
// console.log(myName);

let userOne ={
     email: "harshita@gmail.com",
     upi: "har@thv"
}

let userTwo = userOne

userTwo.email = "harshi@google.com"

userOne.upi = "harhitaathv"
console.log(userOne);
console.log(userTwo);
