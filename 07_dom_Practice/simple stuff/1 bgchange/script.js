const text = document.getElementById("text");
const  btn  = document.getElementById("btn");
let isblue = false;

btn.addEventListener("click", function (){
    text.textContent = "you Clicked me"
    
    if(isblue){
        document.body.style.backgroundColor = "lightblue"
        isblue=false;
    }else{
        document.body.style.backgroundColor="white"
        isblue=true;
    }
})

