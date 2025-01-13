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


 //*************************** *singleton or By Constructor */
 //const tinderUser = new Object() singleton

 const tinderUser = {}

 tinderUser.Id = "12345"
 tinderUser.name = "Simmy"
 tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "harshita@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Harshita",
            lastname: "Choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//combine the objects
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
// const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)//optional parameter
const obj3 = {...obj1,...obj2} //spread the object
//console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//give answer in true and false
