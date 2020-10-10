const reviews = [
  {
    id: 1,
    name: "susan smith",
    img: "./images/user-3.jpg",
    text:
      "the hotel is on a very good location, almost every sight in indry by is max 15 minutes away from it. the rooms are nice and clean and there's not much noise at night",
  },
  {
    id: 3,
    name: "peter jones",
    img: "./images/user-1.jpg",
    text:
      "Friendly staff, convenient location, great atmosphere I stayed  for 7 nights. It had 2 shower rooms a toilet room and a separate sink. great hotel !!!",
  },
  {
    id: 4,
    name: "bill anderson",
    img: "./images/user-2.jpg",
    text:
      "the hotel is on a very good location, almost every sight in indry by is max 15 minutes away from it. the rooms are nice and clean and there's not much noise at night",
  },
  {
    id: 1,
    name: "susan smith",
    img: "./images/user-3.jpg",
    text:
      "the hotel is on a very good location, almost every sight in indry by is max 15 minutes away from it. the rooms are nice and clean and there's not much noise at night",
  },
  {
    id: 3,
    name: "peter jones",
    img: "./images/user-1.jpg",
    text:
      "Friendly staff, convenient location, great atmosphere I stayed  for 7 nights. It had 2 shower rooms a toilet room and a separate sink. great hotel !!!",
  },
  {
    id: 4,
    name: "bill anderson",
    img: "./images/user-2.jpg",
    text:
      "the hotel is on a very good location, almost every sight in indry by is max 15 minutes away from it. the rooms are nice and clean and there's not much noise at night",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById("info");

const pBtn = document.querySelector(".prev-btn");
const nBtn = document.querySelector(".next-btn");

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
  showReviews(currentItem);
});

function showReviews(review) {
  const itemReview = reviews[review];
  img.src = itemReview.img;
  author.textContent = itemReview.name;
  info.textContent = itemReview.text;
}

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

nBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentItem++;
  if (currentItem > rooms.length - 1) {
    currentItem = 0;
  }
  showReviews(currentItem);
});

pBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentItem--;
  if (currentItem < 0) {
    currentItem = rooms.length - 1;
  }
  showReviews(currentItem);
});
