//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

//syntax => name.reduce(callbackFn, initialValue)

const myNums= [ 1,2,3];

// const mytotal = myNums.reduce(function(acc,currval){
//    console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval;
// }, 0);


const mytotal = myNums.reduce ( (acc,arr) => acc + arr,0);

// console.log (mytotal);

const shoppingCart =[
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "python course",
        price: 1999,
    },
    {
        itemName: "data science course",
        price: 12999,
    },
    {
        itemName: "mobile dev course",
        price: 5799,
    }
]

const total = shoppingCart.reduce((initialPrice,item)=>initialPrice + item.price,0)

console.log(total);