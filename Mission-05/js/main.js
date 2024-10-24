import "./navigation.js";

const menu = document.querySelector(".button--category");
const nav = document.querySelector(".navigation__list");

menu.addEventListener("mouseenter", () => {
  nav.classList.add("is--active");
});
menu.addEventListener("mouseleave", () => {
  nav.classList.remove("is--active");
});
