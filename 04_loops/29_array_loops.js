const codingLanguages = [
  "JavaScript",
  "Python", 
    "Ruby",
    "Java",
    "C++"
];
 
// for each method with a callback function 

codingLanguages.forEach( function (item){
// console.log(item);
});

// using arrow function as callback
const numbers = [1,2,3,4,5];

numbers.forEach((num) => {
    // console.log(num * 2);
});

// using named function as callback
function printme(item){
    // console.log(item);
}

// codingLanguages.forEach(printme());

codingLanguages.forEach((item,index, arr)=>{
    // console.log(index, item, arr);
});

const myCoding=[
    {
        name: "javaScript",
        File: "js" 
    },
    {
        name: "python",
        File: "py"
    },
    {
        name: "mongo",
        File: "db"
    }
];

myCoding.forEach( (item)=>{
    console.log(item.name);
});

