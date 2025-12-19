//variables declaration
// const assign variable which cannot be reassigned/ changed 
const name = "Snehit"

//two ways to assign variable
let age = 20
var country = "India"

/*
Do not prefer to use var 
Because of issue in scope and functional scope
*/

//variable can be declared just by a name but not a good practice.
city = "Delhi"

//name = Peter (Not allowed will throw error ' Assignment to constant variable.')
age = 21
country = "france"
city = "paris"
let dataState; //will be considered as undefined



// printing the variables
// log(shortcut or console.log)
// console.log(name);

// to print all variable at once....
console.log([name,age,country,city,dataState])

// to print in table format
console.table([name,age,country,city,dataState])