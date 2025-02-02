//if statement
// const isUserLoggedIn = true
// const temperature = 41

// if(temperature === 40 ){ //it is printing else console because the temperature value is fixed
//    console.log("less than 50");
   
// }
// else{
//    console.log("temperature id greater than 50");
   
// }

// const score = 200
// if(score > 100){
//    const power = "fly"
//    console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // it show error because the scope of const is under the pairenthises {} 

//short hand notation
// const balance = 1000

//if(balance > 500) console.log("test"),console.log("test");//we can write if ststement like that but its not good write like that 

// Nested if
// if(balance < 500){
//    console.log("less than 500");
// } 
// else if(balance < 750){
//    console.log("less than 750");
   
// }
// else if(balance < 900){
//    console.log("less than 7900");
   
// }
// else{
//    console.log("less than 1200");
   
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) { // it will check both the conditions
   console.log("Allow to buy course");
   
}

if(loggedInFromGoogle || loggedInFromEmail){
   console.log("User logged in");
   
}