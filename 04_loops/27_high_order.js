//for of

// ["",""]
// [{},{}]

const arr  = [ 1,2,3,4,5];
for (const i of arr){
    // console.log(i);
}
//for of with strings
const greetings = "Hello World";
for(const char of greetings){
    // console.log(char);
}

//maps -- collection of key value pairs keys can be of any data type and values can be of any data type
//maps maintain the order of insertion

//map.set(key,value) -- adds key value pair to map
//map.get(key) -- returns value associated with key
//map.delete(key) -- removes key value pair from map
//map.has(key) -- returns true if key exists in map
//map.size -- returns number of key value pairs in map
//map.clear() -- removes all key value pairs from map

const map = new Map();
map.set("name","john");
map.set("age",30);
map.set("city","New York");

// console.log(map.get("name")); // john
// console.log(map);

for (const [key,value] of map){
    // console.log(`${key}: ${value}`);
}

const  myObject ={
    game1: "chess",
    game2: "football",
    game3: "cricket"
}
// does not work directly with objects 

// for (const [key,value] of Object){
//     // console.log(`${key}: ${value}`);
// }

for (const [key,value] of Object.entries(myObject)){
    // console.log(`${key}: ${value}`);
}

const newObject = {
    js: "javaScript",
    py: "python",
    rb: "ruby"
}

for (const key in newObject) {
    // console.log(`${key}:${newObject[key]}`);
}

const languages = ["javaScript","python","ruby","java","c++"];

for (const key in languages){
    //console.log(`${key}: ${languages[key]}`);
}
// for in iterates over index of array will give index not keys 

//refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map