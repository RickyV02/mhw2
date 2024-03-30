const loginitems = document.querySelectorAll(".login");
const cross_img = document.querySelectorAll(".cross");

function login() {
  const window = document.getElementById("loginwindow");
  window.classList.remove("nascosto");
}

function close(event) {
  const element = event.currentTarget.parentNode;
  element.classList.add("nascosto");
}

for (const logitem of loginitems) {
  logitem.addEventListener("click", login);
}

for (const crosses of cross_img) {
  crosses.addEventListener("click", close);
}
