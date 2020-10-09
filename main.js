const hamburger = document.querySelector(".hamburger ");
const menu = document.querySelector(" .menu");
const logos = document.querySelector(" .logos");
const nav2 = document.querySelector(".navbar__content2");
const prevBtn = document.querySelector(".prevbtn");
const nextBtn = document.querySelector(".nextbtn");
const roomImg = document.getElementById("roomimg");

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

let rooms = [
  { img: "./images/rooms.jpg" },
  { img: "./images/room-1.jpg" },
  { img: "./images/room-2.jpg" },
  { img: "./images/room-3.jpg" },
  { img: "./images/room-4.jpg" },
  { img: "./images/room-5.jpg" },
  { img: "./images/room-6.jpg" },
];

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPicture(currentItem);
});

function showPicture(picture) {
  const item = rooms[picture];
  roomImg.src = item.img;
}

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentItem++;
  if (currentItem > rooms.length - 1) {
    currentItem = 0;
  }
  showPicture(currentItem);
});

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentItem--;
  if (currentItem < 0) {
    currentItem = rooms.length - 1;
  }
  showPicture(currentItem);
});
