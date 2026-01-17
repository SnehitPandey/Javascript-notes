// ... is called as rest operator also spread operator when used in function parameters but changes  functionality based on its usage
// spread operator is used to spread elements of an iterable (like array or object) into individual elements

function calculateCartPrice(...num1){ // rest operator to gather all arguments into an array
    return num1;
}
//console.log(calculateCartPrice(500, 200, 100)); 


function calculateCartPrice2(val1,  val2, ...num2){ // rest operator to gather remaining arguments into an array
 return num2 
}
//console.log(calculateCartPrice2(500, 200, 100, 50, 25)); // [100, 50, 25]


// any object can be passed to function as parameter this way it is used to pass multiple related object values together 
const user = {
    name: "abc",
    price: 100,
}

function handleObject (anyObject){
    console.log(`user name is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({name: "xyz", price: 200}); // passing object directly as argument



// get array as parameter to function it is used for passing multiple related values together 
const myNewArray = [1, 2, 3, 4, 5];

function returnSecondElement(getArray){
    return getArray[1];
}

// console.log(returnSecondElement(myNewArray)); // passing array as argument to function
console.log(returnSecondElement([10, 20, 30, 40])); // passing array directly as argument