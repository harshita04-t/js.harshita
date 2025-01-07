//Date
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log( typeof myDate);

// let myCreatedDate = new Date(2025,0,7)
// console.log(myCreatedDate.toString());

//let myCreatedDate = new Date(2025,0,7,9,6)
let myCreatedDate = new Date("2025-01-07")
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    calendar: "Date",
}));


