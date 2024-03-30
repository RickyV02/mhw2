const loginitem = document.querySelector(".login");
const cross_img = document.querySelectorAll(".cross");
const boxadreviews = document.querySelectorAll(".boxad span");
const overviews = document.querySelectorAll(".ac img");

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

function resetoverviews(event) {
  const image = event.currentTarget;
  const index = parseInt(image.dataset.index);
  if (index === 1) {
    image.src = "public/films1.png";
  } else if (index === 2) {
    image.src = "public/films2.png";
  } else {
    image.src = "public/films3.png";
  }
  image.removeEventListener("mouseover", resetoverviews);
  image.addEventListener("mouseover", changeoverviews);
}

function changeoverviews(event) {
  const image = event.currentTarget;
  const index = parseInt(image.dataset.index);
  if (index === 1) {
    image.src = "public/ov1.png";
  } else if (index === 2) {
    image.src = "public/ov2.png";
  } else {
    image.src = "public/ov3.png";
  }
  image.removeEventListener("mouseover", changeoverviews);
  image.addEventListener("mouseover", resetoverviews);
}

for (const ov of overviews) {
  ov.addEventListener("mouseover", changeoverviews);
}
