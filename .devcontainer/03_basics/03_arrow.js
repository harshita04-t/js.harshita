const user = {
    username: "harshita",
    price:999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to this website`);
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username="taehyung"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//      let  username ="harshita"
//      console.log(this.username);// this work in object not im function 
     
// }

// chai()

// const chai = function(){
//     let  username ="harshita"
//   console.log(this.username);
// }


const chai = () => {
    let  username ="harshita"
  console.log(this);
}

// chai()

// const addtwo = (num1, num2) => {// basic arrow function
//     return num1 + num2
// } // here we have to write a return keyword because of {}

// const addtwo = (num1, num2) =>   num1 + num2 // impisite return 

// const addtwo = (num1, num2) =>   num1 + num2 

// const addtwo = (num1, num2) =>   (num1 + num2) //we can write it like that or like thid we dont have to write return keyword 


const addtwo = (num1, num2) =>   ({username:"harshita"}) // object con't we defined without this ()
console.log(addtwo(3,4));
