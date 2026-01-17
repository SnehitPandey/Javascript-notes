// Immediatle Invoked Function Expression (IIFE) 
//we use this because some time we find pollution in global scope so to avoid that we use IIFE
//it is a function that runs as soon as it is defined
//() () 

(function user(){
    console.log("db connected");
})(); // IIFE function to connect to database immediately when the script loads      
//  it does not know when to finish executing the function so we use ; after () at the end to invoke it immediately and finish 

( ()=>{
    console.log(`data fetched`);
})(); 

