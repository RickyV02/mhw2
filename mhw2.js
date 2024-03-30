const loginitem = document.querySelector(".login");
const cross_img = document.querySelectorAll(".cross");

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
