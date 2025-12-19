
let score = 33;
let scoreValue = "33";
let scoreString = "33abc";
let scoreNull = null;
let scoreUndefined;
let scoreBoolean = true;

//"33" => 33
//"33abc" => NaN
//null => 0
//undefined => NaN
//true => 1
//false => 0


//way to fetch type of data--------------------------------
// console.log(typeof score);
// console.log(typeof(scoreValue));
// console.log(typeof(scoreString));
// console.log(typeof(scoreNull));
// console.log(typeof(scoreUndefined));
// console.log(typeof(scoreBoolean));

//convert string to number----------------------------
let valueInNumber = Number(scoreValue);
let valueInString = String(score);
let valueInNumString = Number(scoreString);
let valueInNull = Number(scoreNull);          //null to number conversion
let valueInUndefined = Number(scoreUndefined);//undefined to number conversion
let valueInBoolean = Number(scoreBoolean);    //boolean to number conversion

//check the type of data present in variable after conversion---------------------------------
// console.log(typeof (valueInNumber));
// console.log(typeof (valueInString));
// console.log(typeof (valueInNumString));
// console.log(typeof (valueInNull));      //gives number as NaN is also considered as number type
// console.log(typeof (valueInUndefined)); //gives number as NaN is also considered as number type
// console.log(typeof (valueInBoolean));   //gives number as boolean true is converted to 1

//check the converted value of string to number-----------------------
//prints the converted/changed values---------------------------------
// console.log(valueInNumber);
// console.log(valueInString);
// console.log(valueInNumString);          //gives NaN (not a number) as "33abc" cannot be converted to number
// console.log(valueInNull);               //gives 0 as null is considered as 0 in number conversion
// console.log(valueInUndefined);          //gives NaN as undefined cannot be converted to number
// console.log(valueInBoolean);            //gives 1 as true is considered as 1 in number conversion

//Boolean Conversion-------------------------------------
let booleanIsLoggedIn = 1; 
console.log(Boolean(booleanIsLoggedIn)); //converts number to boolean
console.log(booleanIsLoggedIn);

// 0 => false , 1 => true
// "" ,null , undefined => false
// "snehit" , 33 , -33 , [] , {} => true
