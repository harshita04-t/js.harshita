function sayMyName(){
    
console.log("H");
console.log("A");
console.log("R");
console.log("S");
console.log("H");
console.log("I");
console.log("T");
console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4)


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// console.log(addTwoNumbers(3,4));

// const result = addTwoNumbers(3, 4)
// console.log("Result:", result);


function loginUserMessage(username = "sam"){ // we are given default  value in parameters
    if(username === undefined){ // if (!username)
       console.log("Please enter a username");
       
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Harshita"));
//console.log(loginUserMessage()); // if we don't give any argument in function the it well give undefined
// console.log(loginUserMessage("harshita")); // but if arguments are given then will over write the default value which is give as a parameter in function


function calulateCartPrice(...num1){// rest operater
    return num1 
}         

// console.log(calulateCartPrice(200, 400, 600));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` );
    
}

//handleObject(user)

handleObject({ // direct pass of object in function
    username: "sam",
    price: 399 
})

const myArray = [200, 400, 500]

function returnSecondValue(getArray){
 return getArray[2]
}
console.log(returnSecondValue(myArray));



