const toggle = document.querySelector(".toggle-menu");
const nav = document.querySelector(".header__nav");
const branding = document.querySelector(".branding");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  branding.classList.toggle("open");
  toggle.classList.toggle("open");
});
