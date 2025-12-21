//Datatypes Summary----------

// Primitive datatypes: number, string, boolean, null, undefined, symbol, bigint

const num = 42; // Number datatype

const str = "Hello, World!"; // String datatype

const isLoggedIn = true; // Boolean datatype

const n = null; // Null datatype

let user; // Undefined datatype 

const id = Symbol("123"); // Symbol datatype

const bigIntNum = 9007199254741991n; // BigInt datatype


const anotherId = Symbol("123");
console.log(id==anotherId); // false

// Reference (Non-primitive) datatype: object, arrays, functions

const heros= [ "ironman", "spiderman", "thor"]; // Array datatype

let myobj = {
    name: "Snehit Pandey",
    age: 21,
}

const mydunction = function(){
    console.log("This is a function");
}


console.log(typeof bigIntNum);

//const is dynamic typing its used when variable type is determined at runtime 
//const in JavaScript declares a block-scoped binding that cannot be reassigned.

//---Primitive (reassignment error)
// const PI = 3.14;
// PI = 3.1415; // TypeError: assignment to constant variable

//----Object (mutating allowed, reassigning not)
const car = {brand: "Porsche", model:"911"};

car.model ="caymen"; // mutating the object is allowed
//car ={ brand:"BMW", model:"M5"}; // reassigning the object is not allowed

/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime
, and you do not need to explicitly declare the type of a variable before using it. You can assign
 different types of values to a variable during its lifetime.*/