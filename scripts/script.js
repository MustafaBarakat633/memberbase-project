const nav = document.querySelector("header nav");
const hamburgerIconBtn = document.querySelector(".hamburger-icon-btn");

hamburgerIconBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

document.querySelectorAll("header nav ul.links li a").forEach((el) => {
  el.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 767) {
    nav.classList.remove("show");
  }
});

////

document.getElementById("year").innerHTML = new Date().getFullYear();
