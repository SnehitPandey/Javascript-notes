// Array is a special varialble which store different elements in form of list also if we copy an array it creates a shallow copy(reference copy) of that array.

let cities = []; // variable declaration and initialization as an empty array
cities = ["Delhi", "Mumbai", "Bangalore"]; // array declaration

// console.log(cities);     // print array
// console.log(cities[0]);  // print first element of array

const heros =  new Array("Superman", "Batman", "Spiderman"); // another way to declare array

//operation on array-------------------------------------------------------------
heros.pop("Batman"); // remove last element of array
heros.push("Ironman"); // add element to array
heros.pop(); // remove last element of array

heros.unshift("Captain America"); // add element at the beginning of array
heros.shift(); // remove first element of array

heros.includes("Superman"); // check if element is present in array or not
heros.indexOf("Spiderman"); // get index of element in array

//two ways to print the length of array----------------------------------------
console.log(cities.length); // print length of array Outputs the length of the cities array. If cities = ["New York", "London", "Tokyo"], its length is 3.

console.log(--cities.length); // print length of array Outputs the length of the cities array after decrementing it by 1. If cities = ["New York", "London", "Tokyo"], its length is 2.
//This is an error! ❌cities.length is a number, but modifying it directly (--cities.length) is not valid because .length is not a variable—it’s a property of an object.
//If attempted, it will throw "TypeError: Cannot assign to read only property 'length'" in strict mode.

console.log(cities.length -1); // print length of array  This does not change the length; it just calculates length - 1. If cities.length = 3, it prints 2.

console.log(cities[cities.length -1]); // print last element of array 
console.log(cities -1); // print typeof last element of array 

//slice and splice method-------------------------------------------------------
const newCities = cities.slice(0,2); // slice method creates a new array from the original array starting from index 0 to index 2 (not inclusive of index 2).
console.log(newCities); // Outputs: ["Delhi", "Mumbai"]

cities.splice(1,1,"Chennai","Kolkata"); // splice method modifies the original array by removing 1 element at index 1 and adding "Chennai" and "Kolkata" at that position.
console.log(cities); // Outputs: ["Delhi", "Chennai", "Kolkata", "Bangalore"]