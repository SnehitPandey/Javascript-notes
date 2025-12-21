let name = "abc";
let repoCount  = 100;

// Strings are primitive data types in JavaScript
// They are immutable, meaning once created, they cannot be changed directly

// console.log(name + "has" + repoCount + "repos"); // abc has 100 repos 
//old way of concatenation not recommended

console.log(`my name is ${name} and my repo count is ${repoCount}`)
//better way to concatenate strings using string interpolation

const gameName = "farCry 6";

// const anotherName = gameName.replace("6", "5");
// console.log(gameName); //farCry 6
// console.log(anotherName); //farCry 5

// console.log(gameName[0]);
// console.log(gameName.length); //checks length of string
console.log(gameName.__proto__); //gives access to string methods

// In the above example, the original string 'gameName' remains unchanged
// The 'replace' method returns a new string with the specified changes

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('C'));
// these are some common string methods 
// Strings methods do not modify the original string, they return a new string


