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

const newString= gameName.substring(0,5);// extracts part of the string from index 0 to 5 where n is not included printing only n-1 
console.log(newString); //won't work in negative indexes


const newStringOne =  new String("     Hello World     ");
console.log(newStringOne.trim(  ));//removes white spaces


const newString2 = gameName.slice(0,4);// similar to substring but can take negative indexes 
// when we use negative indexes it starts from end of string


const url = "https://www.example.com/path20%to/resource?query=123#section";
console.log(url.replace("20%","-"));// replaces 20% with -

console.log(url.includes("example"));// checks if string contains example returns boolean

const superString = new String("Dark-knight-rises");
console.log(superString.split("-"));// splits string into array based on separator 

console.dir(String.prototype); // shows all string methods in browser console

// There are many more string methods available in JavaScript
// search mdn docs

