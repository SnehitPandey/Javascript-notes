const newTask = document.getElementById("newTask");
const list = document.getElementById("tasks");
let tasks = [];

function renderList() {
  list.innerHTML = "";
  for (i = 0; i < tasks.length; i++) {
    createLi(tasks[i], i);
  }

}

function createLi(task, index) {
  const li = document.createElement("li");
  const content = document.createElement("span");
  content.textContent = task.content;
  const input = document.getElementById("inputbox");
  input.value ="";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.addEventListener("change", function () {
    content.classList.toggle("completed");
    tasks[index].toggle = !tasks[index].toggle;
    saveTasks();
    renderList()
  });

  const del = document.createElement("button");
  del.textContent = "x";

  del.addEventListener("click", function () {
    tasks.splice(index, 1);
    console.log(tasks);
    saveTasks();
    renderList();
  });

  if (task.toggle) {
  content.classList.add("completed");
  toggle.checked = true;
}

  li.appendChild(content);
  li.appendChild(toggle);
  li.appendChild(del);
  list.appendChild(li);
}

newTask.addEventListener("click", function () {
  const input = document.getElementById("inputbox");
  if(input.value=="" ){
    alert("nuh uh");
    return;
  }
  const object = {
    content: input.value,
    toggle: false,
  };
  tasks.push(object);
  saveTasks();
  renderList();
});

function saveTasks() {
  localStorage.setItem("tasks",  JSON.stringify(tasks));
  console.log(`data ${tasks}`);
}

function loader() {
  const stored = localStorage.getItem("tasks");

  if (stored) {
    try {
      tasks = JSON.parse(stored);
      if (!Array.isArray(tasks)) {
        tasks = [];
      }
    } catch (e) {
      tasks = [];
      localStorage.removeItem("tasks");
    }
  } else {
    tasks = [];
  }

  renderList(tasks);
}

loader();
