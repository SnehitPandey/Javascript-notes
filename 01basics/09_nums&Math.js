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
console.log(Math.sqrt(16)); // returns 4 square root of the number
console.log(Math.min(2, 5, 1, 8, -4)); // returns -4 find minimum value among the given numbers
console.log(Math.max(2, 5, 1, 8, -4)); // returns 8 find maximum value among the given numbers

console.log(Math.random()); // returns a random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // returns a random integer between 1 and 10
console.log(Math.floor(Math.floor(Math.random() * 10) + 1));// returns a random integer between 1 and 10 with is the base integer   
// Math.random() generates a random decimal between 0 and 1
// Multiplying by 10 scales it to 0-10
// Math.floor removes the decimal part, giving 0-9
// Adding 1 shifts the range to 1-10

const min = 5;
const max = 15;

console.log(Math.floor((Math.random() * (max - min + 1))) + min); // returns random integer between min and max
// Math.random() generates a random decimal between 0 and 1
// Multiplying by (max - min + 1) scales it to the desired range size
// Math.floor removes the decimal part
// Adding min shifts the range to start from min value