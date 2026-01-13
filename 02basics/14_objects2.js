// const xyzUser = new object {}; ---------singleton object 

const xyzUser = {} // non singleton object

xyzUser.id="coolguy@gmail.com"; // adding key value pair in object
xyzUser.isloggedin=false;
xyzUser.name="coolguy"

// console.log(xyzUser);

// nested object 
const regularUser = {
    email: "normalguy@gmail.com",
    fullname:{
        userfullname: {
            firstname:"normal", 
            lastname: "guy"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname); // accessing nested object value
//console.log(regularUser.fullname?.userfullname?.lastname); // accessing nested object value using optional chaining checks for null or undefined at each level
//console.log(regularUser['fullname']['userfullname']['lastname']); // accessing nested object value using bracket notation
const obj1 ={1:"a",2:"b"}; 
const obj2 ={3:"c",4:"d"};

//const returnTarget = object.assign(targent,source);-------------------------
//const obj3 = Object.assign({}, obj1, obj2); // merging two objects using Object.assign method good way to merge objects

const obj3 = {...obj1, ...obj2}; // merging two objects using spread operator 

// console.log(obj3);

const userDetails = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
    },
    {
    }
]

userDetails[1].email // accessing email of second object in array
// console.log(userDetails[0].email);


console.log(Object.keys(xyzUser)); // returns array of keys of the object 
console.log(Object.values(xyzUser)); // returns array of values of the object
console.log(Object.entries(xyzUser)); // returns array of key-value pairs as arrays

console.log(xyzUser.hasOwnProperty("isloggedin")); // checks if the key is present in object or not 



//===============object destructuring=================

 const course = {
    coursename: "js",
    price:799,
    courseinstructor: "xyz",
 }
//const {value,value2} = objectName;-------------------------
 const {coursename: jsCourse} = course; // object destructuring to extract coursename from course object 
 // (coursename: jsCourse renaming coursename to jsCourse)
console.log(jsCourse);


const navbar = ({companyname}) => {

}
navbar(companyname = "xyz"); // default parameter value using object destructuring

//JSON
// {
//     "name": "abc",
//     "age": "25",
//     "isloggedin": false
// }

