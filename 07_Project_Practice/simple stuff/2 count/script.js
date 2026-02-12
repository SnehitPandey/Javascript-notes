const count = document.getElementById("count");
const btn = document.querySelectorAll(".btn");
let num =0;

// plus.addEventListener("click",function (){
//     num++;
//     count.textContent= num;
// })

// minus.addEventListener("click",function (){
//     num--;
//     count.textContent= num;
// })

// reset.addEventListener("click",function (){
//     num=0;
//     count.textContent= num;

// })

btn.forEach(function(btn) {
    console.log(btn)
    btn.addEventListener("click", function (e){
        console.log(e.target)
        if(e.target.id === "increase"){
            num++;
            count.textContent=num;
        }if (e.target.id === "decrease"){
            num--;
            count.textContent = num;
        }if (e.target.id === "reset"){
            num = 0;
            count.textContent = num;
        }
    })
});
