const coding = ["js","ruby","java","python","javascript","cpp"]

// console.log(coding);
// coding.forEach( function(val) {
//     console.log(val);
    
// })

// coding.forEach( (V) => {
//     console.log(V);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe) // given the reference of function

// 
const myCoding =[
    {
        laguageName:"javascript",
        laguageFileName:"js"
    },

    {
        laguageName:"java",
        laguageFileName:"java"
    },

    {
        laguageName:"C++",
        laguageFileName:"cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.laguageFileName);
    
})