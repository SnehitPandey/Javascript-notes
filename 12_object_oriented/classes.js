//object literal

const user = {
    username: "alpha",
    loginCount : 8,
    signedin: true,

    getUserDetails: function(){
        // console.log("get user details");
        // console.log(`username: ${username}`);
        console.log(`username: ${this.username}`);
        console.log(this); // gives the current context
    }
}

// console.log(user['username']);
console.log(user.getUserDetails());
console.log(this); //-> give object beacuse there is no current context;


