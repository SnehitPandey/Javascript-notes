//variables declaration
// const assign variable which cannot be reassigned/ changed 
const name = "Snehit"

//two ways to assign variable
let age = 20
var country = "India"

//variable can be declared just by declaring a name but not a good practice.
city = "Delhi"

//name = Peter (Not allowed will throw error ' Assignment to constant variable.')
age = 21
country = "france"
city = "paris"
let dataState; //will be considered as undefined

/*
Do not prefer to use var 
Because of issue in scope and functional scope
*/

// console.log(name);

// to print all variable at once....

console.log([name,age,country,city,dataState])
