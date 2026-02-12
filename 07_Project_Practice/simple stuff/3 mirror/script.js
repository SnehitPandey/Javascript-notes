const input = document.querySelector('#name');
const show = document.getElementById('show');




input.addEventListener("input", function (e){
    show.textContent = e.target.value;
})


