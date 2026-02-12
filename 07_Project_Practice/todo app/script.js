const input = document.getElementById("taskInput");
const subBtn = document.getElementById("submit");
const list = document.getElementById("list");

subBtn.addEventListener("click", function () {
    const taskText = input.value.trim();
    if(taskText === "") return;
    
  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button class="delete">❌</button>
  `;
  
  list.appendChild(li);
  input.value=""
});

list.addEventListener("click",function (e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});



