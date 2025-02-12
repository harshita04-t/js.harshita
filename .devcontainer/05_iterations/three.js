//for of

// ["","",""]
// [{},{},{}] // we can give both string and object in array

// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
    
// }

const greetings = "Hello World"
for (const greet of greetings) { 
    if(greet==" "){
        console.log(`there is space${greet}`);
        continue;
        
    }                                                                                             
    //console.log(`Each char is ${greet}`);
    
}

//maps
//maps is like a array
//save unique value
const map = new Map()

map.set('IN',"India")
map.set('USA',"united stats of America")
map.set('FR',"France")

console.log(map);

for(const [key,value] of map){ // we can hold key value differently
   console.log(key,':-',value);
    
}

// const myObject = {
//     'game1':'NFS',
//     'game2':'Spiderman',
// }

// for (const [key,value] of myObject) { // it is not iteratable
//     console.log(key,':-',value);
// }