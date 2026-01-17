//functions are the block of code which can be reused multiple times 

//function name(parameters){  }  //function definition
// funcName (argument1 ,argument 2); // function call 

function greet(){  //function declaration
    console.log("Hello User");
}

//greet(); --------------------- //function invocation or function call


function add (a, b){
   console.log( a + b); 
}

// add(); //gives NAN 
// add(3, 2);
// add(3, "3"); gives 33 
//add(3, Null);

const result = add(3,5);
// console.log (result);


function add ( num1 , num2){
    // let result = num1 + num2;
    // return result;   //------------------------------------ one way 

    return num1 + num2; 
    //console.log(result)--- // Unreachable code because anything after return is unreachable ....
}


function loginUserMessage(username = "Guest"){  // default parameter
    if(username === undefined){
        console.log("please enter username");
        return;
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessage("XYZ")); // using wrap to print 
console.log(loginUserMessage()); // calling without username undefined 