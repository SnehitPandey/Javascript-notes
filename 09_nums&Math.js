const balance = 300; // here javascript internally creates a number object
// console.log(balance);

const amount = new Number(200);// here we are explicitly creating a number object
// console.log(amount); // "number"

// console.log(balance.toString().length);  // converts number to string

const price = new Number(150.56789);
// console.log(price.toFixed(2));   // gives 2 decimal places

const otherPrice = 123.87289;
// console.log(otherPrice.toPrecision(4));  // gives total number of digits including before and after decimal
// console.log(otherPrice.toPrecision(3));  // does rounding based on precision value

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-US')); // adds commas based on locale
// console.log(hundreds.toLocaleString('en-IN')); // adds commas based on locale (Indian format)

Number.MAX_VALUE; // largest possible number in JS
Number.MIN_VALUE; // smallest possible number in JS
//there are many more methods and properties in Number object refer mdn docs

//============================Maths===============================

console.log(Math); // Math is a built-in object that provides mathematical constants and functions
console.log(Math.PI); // returns the value of PI
console.log(Math.abs(-10)); // returns absolute value 10
console.log(Math.round(4.6)); // returns 5
console.log(Math.floor(4.9)); // returns 4 bascially removes decimal part and gives the base integer
console.log(Math.ceil(4.1)); // returns 5 basically adds 1 to the base integer if there is any decimal part

