if (true){
//     console.log("This will always execute.");
}
if (false){
    // console.log("This will never execute.");
}

const isUserLoggedIn = true;
if (isUserLoggedIn){
    // console.log("Welcome back, user!");
}else{
    // console.log("Please log in to continue.");
}


//short hand notation

const balance = 100;
// if (balance > 0) console.log("You have a positive balance.");
// else console.log("Your balance is zero or negative.");


// if (balance > 500) console.log("test"),console.log("test2");
// not a good practice


if (balance > 0){
    // console.log("You have a positive balance.");
}else if (balance === 0){
    // console.log("Your balance is zero.");
}else if (balance < 0){
    // console.log("Your balance is negative.");
}else{
    // console.log("Invalid balance.");
}


const userLoggedIn = true;
const cardActive = true;
const loggedfromgoogle = true;
const loggedfromfacebook = false;

if (userLoggedIn && cardActive ){
    // console.log("Access user to buy.");
}
if (loggedfromgoogle || loggedfromfacebook){
 // console.log("User logged in from third party.");
}