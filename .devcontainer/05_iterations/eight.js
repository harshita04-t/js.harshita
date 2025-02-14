//Reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc , curral) {
//     console.log(`acc:${acc} and amount:${curral}`);
//     return acc + curral
    
    
// }, 0)

const myTotal = myNums.reduce( (acc , curr) => acc + curr,0)
// console.log(myTotal);

const shoppingCart = [
    {
    itemName: "js course",
    price:2999
    },
    {
    itemName: "java course",
    price:1999
    },
    {
    itemName: "Mobilr dev course",
    price:5999
    },
    {
    itemName: "data science course",
    price:2999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => 
   
   

    acc + item.price,0)

console.log(priceToPay);
