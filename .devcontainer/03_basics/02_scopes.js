let a = 40
if(true){
    let a = 10
// var b = 20; we dont use it
const c = 30
// console.log("inner:", a);


}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    username = "harshita"

    function two(){ // it can access the variable of one because for it the one is gobal
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);//we cant access this from the block scope
    
    two()

}
// one()

if(true){
    const username = "harshita"

    if(username === "harshita"){
      const website = " youtube"
    //   console.log(username + website);
      //console.log(`its my name ${username} and is my website ${website}`);
      
    }

    //console.log(website);
    
}

//console.log(username);

//+++++++++++++++++++++++++++interesting+++++++++++++++
 console.log(addone(7));
function addone(num){
    return num +1
}



const addtwo = function(num){
    return num + 2
}
 console.log(addtwo(7));
