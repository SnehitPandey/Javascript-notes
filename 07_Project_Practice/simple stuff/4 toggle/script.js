const btn = document.querySelector("#toggle");
const para = document.getElementById("para");

let ishidden = false;

btn.addEventListener("click", function () {
  if (ishidden) {
    btn.innerText === "hide";
    para.textContent = "I can disappear";
    ishidden = false;
  } else {
    btn.innerText === "show";
    para.textContent = "";
    ishidden = true;
  }
});

