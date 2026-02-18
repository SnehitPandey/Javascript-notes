//promise object :- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Description
/*A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.*/

// how to build a promise

const promiseOne = new Promise(function (resolve, reject) {
  // Do an asyn task
  //Db calls , cryptography, network
  setTimeout(function () {
    console.log("Asyn task is completed");
    resolve(); // this connects .then to promise only used after task is done
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise cosumed");
});

//directly in one promise

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1500);
}).then(function () {
  console.log("Async 2 resolved");
});

// promise 3 -> getting values and data consumption

const promisethree = new Promise((resolve, rejected) => {
  setTimeout(() => {
    console.log("Async task 3");
    resolve({ username: "some", email: "someone@example.com" });
  }, 2000);
});

promisethree.then(function (user) {
  console.log(user);
});

//promise 4 ->

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("task 4");
    let error = true;
    if (!error) {
      resolve({ username: "Sung", password: "some@example.com" });
    } else reject("error code: 101");
  }, 2500);
});

promisefour
  .then((data) => {
    console.log(data);
    return data.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("the promise is either resolve or rejected");
});

//promise 5 ->

const promisefive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    console.log('task 5');
    if(!error){
        resolve({username:'john', password:'doe'});
    }else{
        reject('Error code: 404');
    }
  }, 3000);
});

//  async await
async function consumePromisefive(){
    try{
        const response = await promisefive;
    console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromisefive()



async function getAllUsers(){
   try{
     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
   }catch{
    console.log('failed');
   }
}

getAllUsers();




