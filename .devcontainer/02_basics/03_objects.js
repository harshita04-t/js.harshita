//singleton
//object.create // way to creat object in constructor method

//Object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Harshita",
    "full name": "Harshita Choudhary", // we can't access it by . operater
    [mySym]:"Harshita",// declare symbol in object like that
    age: 20,
    location: "Jaipur",
    email: "harshita@google.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]
}

// console.log(JsUser.email);
// console.log( typeof JsUser["email"]);// square rotations
// console.log(JsUser[mySym]);
// console.log(typeof mySym);

JsUser.email = "harshitac@google.com" // to change value of object 
// Object.freeze(JsUser)// to freeze the object to no one can make changes in it

// JsUser.greeting = function(){
//     console.log("Hello JsUser");
    
// }

// console.log(JsUser.greeting); // come refrenece of function as a result
// console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);// string interperlation
    
}

console.log(JsUser.greetingTwo());


