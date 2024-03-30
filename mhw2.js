const loginitem = document.querySelector(".login");
const cross_img = document.querySelectorAll(".cross");
const boxadreviews = document.querySelectorAll(".boxad span");

function login() {
  const window = document.getElementById("loginwindow");
  window.classList.remove("nascosto");
}

loginitem.addEventListener("click", login);

function close(event) {
  const element = event.currentTarget.parentNode;
  element.classList.add("nascosto");
}

for (const crosses of cross_img) {
  crosses.addEventListener("click", close);
}

function hidereviews(event) {
  const element = event.currentTarget;
  element.addEventListener("click", showreviews);
  const elementdiv = event.currentTarget.parentNode;
  const revs = elementdiv.querySelector("p");
  revs.remove();
}

function showreviews(event) {
  const element = event.currentTarget;
  const elementdiv = event.currentTarget.parentNode;
  const new_text = document.createElement("p");
  new_text.classList.add("inforev");
  new_text.textContent = element.dataset.info;
  elementdiv.appendChild(new_text);
  element.removeEventListener("click", showreviews);
  element.addEventListener("click", hidereviews);
}

for (const rev of boxadreviews) {
  rev.addEventListener("click", showreviews);
}
