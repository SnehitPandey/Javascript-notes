
{
    //scope
}

let a = 300; // function-scoped or globally-scoped variable


if (true) {  // anything inside these curly braces is part of block scope
    let a = 10;
    const b = 20;
    // var c = 30; // var is function-scoped not block-scoped
    //d = 40; // implicitly global (not recommended)
   // console.log("Inner:",a); // 10
}

//console.log("Outer:", a); // 300 

// console.log(a); -------// ReferenceError: a is not defined
// console.log(b); -------// ReferenceError: b is not defined
//console.log(c); -----------// 30 var is function-scoped or globally-scoped, so it is accessible outside the block
//console.log(d);---------------- // 40 implicitly global, accessible anywhere

// scope is checked differently in code environments like Node.js and browser console


function testScope() {
    const userName = "abc"; 
    function innerFunction() {
        const website = "example.com";
        console.log(userName); // accessible due to lexical scoping
    }   
    //console.log(`${userName} visits ${website}`); // ReferenceError: website is not defined 

    innerFunction();
}

testScope(); 


if (true) {
    const username = "hitesh" ;
    if (username === "hitesh") {
        const website = "example.com";
        console.log(`${username} visits ${website}`); // works fine
    }
   // console.log(website); // ReferenceError: website is not defined
}

// In JavaScript, scope determines the accessibility of variables and functions in different parts of the code
// There are mainly two types of scope: Global Scope and Local Scope (Function Scope and Block Scope)
// Variables declared with var are function-scoped, while let and const are block-scoped
// Lexical scoping means that inner functions have access to variables defined in their outer functions

// ------------------------------------ interesting part -------------------------------------------------
console.log(outerFunction(5)); // 6
function outerFunction(num) {
    return + 1;
}

const addTwo = function(num) {
    return + 2;
}

addTwo(5); // 7