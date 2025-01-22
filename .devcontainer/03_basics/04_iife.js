//Immediately Invoked Function Expressions(IIFE)
// (function chai()
// {   //named iife
//     console.log(`DB CONNECTED`);
    
// }) ();

// (
//     (name) => {
//         console.log(`DB Connection two${name}`);
        
//     }
// )("Harshita")

// let val1 = 4
// let val2 = 3
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(4,3)
// console.log(result1);
// console.log(result2);

function one(){
    console.log("one");
    two()
}

function two(){
    console.log("two");
    three()
}

function three(){
    console.log("three");
    
}
one()
two()
three()