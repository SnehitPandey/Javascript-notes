// singleton
// imp - if we declare abject like literals then it is not singleton and if made from constructor then it is always singleton

//Object literals

const mySymbol = Symbol("key1");

const jsUser = {
    name : "Tony",
    "full name" : "Tony Stark",
    //mySymbol:"key",-------it won't take this as symbol data type but as string
    [mySymbol]:"key",
    age : "35",
    location: "jaipur",
    email:"tony2026@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Mondays","Tuesday"]
}

//console.log(jsUser.email); ---------------// one way to access elements of object
//console.log(jsUser["email"]) ;
//console.log(jsUser["full name"]);
//console.log(jsUser[mySymbol]);------------// other way of accessing/printing element of object

jsUser.name="Tony Stark";
//Object.freeze(jsUser); // this method frezes the object so that no more changes can be do to it
// jsUser.name="Tony Stank" ; 
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello Js User");
}

jsUser.greetingtwo = function(){
    console.log(`hello ${this.name}`); // when we want to targe the same object we use this
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());