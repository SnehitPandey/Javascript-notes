//Stack (Primitive ), Heap (Non-primitive) 

//stack - gives copy of the value
let a = 10;
let b = a;
b = 20;
console.log(a); //10
console.log(b); //20
//gives copy of reference so both point to different memory locations changing one does not affect the other

//heap - gives reference of the value
const userOne = {
    name: "user",
    id: "user@123",
}

const userTwo = userOne; //userTwo points to the same memory location as userOne
userTwo.name = "newUser"; //modifying userTwo also modifies userOne

console.log(userOne.name); //newUser
console.log(userTwo.name); //newUser