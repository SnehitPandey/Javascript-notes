
// this keyword refers to the current lexical context 
const user = {
    name: 'Alice',  
    price: 30,

    welcome: function() {
        console.log(`${this.name} welcome to site!`)
        console.log(this);
    }

}

// user.welcome(); // Alice welcome to site!
// user.name="bob"; // changing the context value
// user.welcome(); // bob welcome to site!

//console.log(this); // refers to the global object (window in browsers) {empty object in node.js}
// this is because we are in the global context and not inside any object or function 

function test() {
    let username = "john";
    console.log(this.username); // gives undefined because this refers to the global object which does not have username property so only works in objects
}

// test();


const test2 = function (){
    let username = "jane";
    console.log(this.username); // gives undefined 
} 

// test2();

//Arrow fuctions -------------------------------------------------------------------------

const test3 = () => {
    let username = "doe";
    console.log(this.username); // gives undefined because arrow functions do not have their own this context they inherit from the parent context which is global here
}

// test3();

const add = (num1,num2) => {
    return num1 + num2; // if we use cirly braces we need to use return statement because it is explicit return
}

//console.log(add(2,3)); // 5

//implicit return 
const addImplicit = (num1,num2) => num1 + num2;  
const addtwo = (num1,num2) => (num1 + num2);  // if we use parentheses it is also implicit return

const objectexample = () => ({name: 'example'}); // returning object we need to use parentheses gives undefined 

//console.log(objectexample()); // { name: 'example' }

const myArray = [1,2,3,4,5];

myArray.forEach();


