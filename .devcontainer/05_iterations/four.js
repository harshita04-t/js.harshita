const myObject = {
    js:"javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"swift by apple"
}
for (const key in myObject) { // forin loop
    //console.log(`${key} shorcut is for ${myObject[key]}`);
    
}

const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
   
    //    console.log(key);
       console.log(programming[key]);
        
    }


    const map = new Map()// forin loop in map

map.set('IN',"India")
map.set('USA',"united stats of America")
map.set('FR',"France")

for (const key in map) { //it is not iteratable
   //console.log(map[key]);
   
}



