const marvel_heros = ["Thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //its not good why to push because
//  array take any data element in it even array also

const allHeros = marvel_heros.concat(dc_heros)//concat combine  two array
console.log(allHeros);

const allnewHeros = [...marvel_heros,...dc_heros]// it is a spread operater
console.log(allnewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// const real_another_array = another_array.flat(2)
// const real_another_array = another_array.flat(1)
console.log(real_another_array);

console.log(Array.isArray("Harshita"));
console.log(Array.from("Harshita"));


console.log(Array.from({name:"Harshita"}));// interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
console.log(Array.from("tae"));

