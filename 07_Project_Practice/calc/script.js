const input = document.getElementById("input-box");
const buttonContainer = document.querySelector(".buttons");
let store = "";

console.log(buttonContainer);
buttonContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    console.log(e.target);
    let buttonVal = e.target.innerText;
    if (buttonVal == "AC") {
      store = "";
      input.value = "";
      console.log("wiped");
      return;
    } else if (buttonVal == "=") {
      let result = eval(store);
      input.value = "";
      input.value = result;
      store = input.value;
      console.log(result);
      return;
    } else {
      store += buttonVal;
      input.value = store;
    }
  }
});
