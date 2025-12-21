//***********************Operation************************** */

let value = 3
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
//  console.log(1 + "2");
//  console.log("1" + 2 + 2);// "1" + 2 => "12" + 2 => "122" reason string has higher precedence 
// console.log(1 + 2 + "2");// 1 + 2 => 3 + "2" => "32"

// console.log("hello" - "hitesh");//gives NaN not a number as - operator is not defined for string
// console.log("hello" * "hitesh");//gives NaN not a number as * operator is not defined for string
// console.log("hello" / "hitesh");//gives NaN not a number as / operator is not defined for string

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);    // gives 1 beacause + operator converts boolean to number 
// console.log(+false);   // gives 0 because + operator converts boolean to number
// console.log(+"");      //gives 0 because + operator converts empty string to number

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2

console.log(num1,num2,num3);

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion