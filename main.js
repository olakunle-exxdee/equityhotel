const hamburger = document.querySelector(".hamburger ");
const menu = document.querySelector(" .menu");
const logos = document.querySelector(" .logos");
const nav2 = document.querySelector(".navbar__content2");
let showMenu = false;

hamburger.addEventListener("click", () => {
  if (!showMenu) {
    nav2.classList.add("open");
    hamburger.classList.add("open");
    logos.classList.add("open");
    showMenu = true;
  } else {
    nav2.classList.remove("open");
    hamburger.classList.remove("open");
     logos.classList.remove("open");
    showMenu = false;
  }
});