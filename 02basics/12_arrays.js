const marvelHeros = ["thor" , "ironman" , "hulk" ];

const dcHeros =["superman" , "batman" , "flash"];

// marvelHeros.push(dcHeros); // adds dcHeros array as a single element at the end of marvelHeros array

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]); // accessing flash from nested array


marvelHeros.concat(dcHeros); // does not change original array rather returns a new array
const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);


// console.log(marvelHeros); // original array remains unchanged

//======================Array Methods========================

//spread operator (...) == more prefered way of merging arrays 

const new_heros = [...marvelHeros,...dcHeros]; // creates a new array by spreading elements of both arrays
// console.log(new_heros);

const num_array= [1,2,3,[4,5],6,[7,[8,9]]];// nested array

const usable_array = num_array.flat(Infinity); // flattens the array to level mentioned, Infinity flattens all levels
// console.log(usable_array);


console.log(Array.isArray(marvelHeros)); // checks if marvelHeros is an array, returns true
console.log(Array.from("TONY STARK")); // creates an array from the string "TONY STARK"

console.log(Array.from({name:"Steve Rogers"})); // creates an array from an object, returns [undefined] since object has no indexed properties

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // creates an array from the given arguments 

