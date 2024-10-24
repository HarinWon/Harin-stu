import "./navigation.js";

const categoryButton = document.querySelector(".button--category");
const navList = document.querySelector(".navigation__list");

categoryButton.addEventListener("mouseenter", () => {
  navList.classList.add("is--active");
});

navList.addEventListener("mouseleave", () => {
  navList.classList.remove("is--active");
});
