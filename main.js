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

const menu1 = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/menu-gallery-2.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/menu-gallery-1.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/menu-gallery-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/menu-gallery-2.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/menu-gallery-3.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/menu-gallery-1.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/menu-gallery-1.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/menu-gallery-1.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/menu-gallery-2.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 36.99,
    img: "./images/menu-gallery-2.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "jollof rice",
    category: "dinner",
    price: 36.99,
    img: "./images/menu-gallery-1.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "fried rice",
    category: "dinner",
    price: 36.99,
    img: "./images/menu-gallery-3.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const room1 = [
  {
    id: 1,
    title: "single ",
    category: "single",
    price: 200.99,
    img: "./images/room-1.jpg",
    desc: `A room assigned to one person. May have one or more beds.The room size or area of Single Rooms are generally between 37 m² to 45 m².`,
  },
  {
    id: 1,
    title: "single ",
    category: "single",
    price: 200.99,
    img: "./images/room-2.jpg",
    desc: `A room assigned to one person. May have one or more beds.The room size or area of Single Rooms are generally between 37 m² to 45 m².`,
  },
  {
    id: 1,
    title: "single ",
    category: "single",
    price: 200.99,
    img: "./images/room-3.jpg",
    desc: `A room assigned to one person. May have one or more beds.The room size or area of Single Rooms are generally between 37 m² to 45 m².`,
  },
  {
    id: 2,
    title: "double room",
    category: "double",
    price: 155.99,
    img: "./images/room-4.jpg",
    desc: `A room assigned to two people. May have one or more beds.
The room size or area of Double Rooms are generally between 40 m² to 45 m².`,
  },
  {
    id: 2,
    title: "double room",
    category: "double",
    price: 155.99,
    img: "./images/room-5.jpg",
    desc: `A room assigned to two people. May have one or more beds.
The room size or area of Double Rooms are generally between 40 m² to 45 m².`,
  },

  {
    id: 2,
    title: "double room",
    category: "double",
    price: 155.99,
    img: "./images/room-2.jpg",
    desc: `A room assigned to two people. May have one or more beds.
The room size or area of Double Rooms are generally between 40 m² to 45 m².`,
  },

  {
    id: 4,
    title: "standard room",
    category: "standard",
    price: 200.99,
    img: "./images/room-3.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "standard room",
    category: "standard",
    price: 22.99,
    img: "./images/room-4.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "deluxe room",
    category: "deluxe",
    price: 1000.99,
    img: "./images/room-5.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bdeluxe room",
    category: "deluxe",
    price: 1000.99,
    img: "./images/room-6.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "queen room",
    category: "queen",
    price: 1200.99,
    img: "./images/room-6.jpg",
    desc: `A room with a queen-sized bed. May be occupied by one or more people.
The room size or area of Queen Rooms are generally between 32 m² to 50 m².`,
  },
  {
    id: 8,
    title: "queen room",
    category: "queen",
    price: 1200.99,
    img: "./images/room-5.jpg",
    desc: `A room with a queen-sized bed. May be occupied by one or more people.
The room size or area of Queen Rooms are generally between 32 m² to 50 m².  `,
  },
  {
    id: 8,
    title: "queen room",
    category: "queen",
    price: 1200.99,
    img: "./images/room-4.jpg",
    desc: `A room with a queen-sized bed. May be occupied by one or more people.
The room size or area of Queen Rooms are generally between 32 m² to 50 m².`,
  },
  {
    id: 9,
    title: "quad room",
    category: "quad",
    price: 16.99,
    img: "./images/room-1.jpg",
    desc: `A room assigned to four people. May have two or more beds.
The room size or area of Quad Rooms are generally between 70 m² to 85 m².`,
  },
  {
    id: 9,
    title: "quad room",
    category: "quad",
    price: 16.99,
    img: "./images/room-2.jpg",
    desc: `A room assigned to four people. May have two or more beds.
The room size or area of Quad Rooms are generally between 70 m² to 85 m².`,
  },
  {
    id: 9,
    title: "quad room",
    category: "quad",
    price: 16.99,
    img: "./images/room-3.jpg",
    desc: `A room assigned to four people. May have two or more beds.
The room size or area of Quad Rooms are generally between 70 m² to 85 m².`,
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
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
const sectionCenterRoom = document.querySelector(".section-center-room");
const btnContainerRoom = document.querySelector(".btn-container-room");

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

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu1);
  randomBtn(menu1);
});

window.addEventListener("DOMContentLoaded", () => {
  displayRoomItems(room1);
  randomBtnRoom(room1);
});

function randomBtn(btnMenu) {
  const categories = btnMenu.reduce(
    (values, categoryItem) => {
      if (!values.includes(categoryItem.category)) {
        values.push(categoryItem.category);
      }
      return values;
    },
    ["all"]
  );
  let categoriesBtn = categories.map((category) => {
    return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
  });

  categoriesBtn = categoriesBtn.join("");
  btnContainer.innerHTML = categoriesBtn;
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu1.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category == "all") {
        displayMenuItems(menu1);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

function randomBtnRoom(btnMenu) {
  const categories = btnMenu.reduce(
    (values, categoryItem) => {
      if (!values.includes(categoryItem.category)) {
        values.push(categoryItem.category);
      }
      return values;
    },
    ["all"]
  );
  let categoriesBtn = categories.map((category) => {
    return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
  });

  categoriesBtn = categoriesBtn.join("");
  btnContainerRoom.innerHTML = categoriesBtn;
  const filterBtnsRoom = document.querySelectorAll(".filter-btn");
  filterBtnsRoom.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = room1.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category == "all") {
        displayRoomItems(room1);
      } else {
        displayRoomItems(menuCategory);
      }
    });
  });
}

function displayRoomItems(roomItem) {
  let displayRoom = roomItem
    .map((item) => {
      return ` <article class="menu-item">
                <img src="${item.img}" alt="${item.title} class="photo" />
                <div class="item-info">
                    <div class="header">
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </div>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
                 <button class="btn-green">order</button>
            </article>`;
    })
    .join("");
  sectionCenterRoom.innerHTML = displayRoom;
}

function displayMenuItems(menuItem) {
  let displayMenu = menuItem.map(function (itemM) {
    return ` <article class="menu-item">
                <img src="${itemM.img}" alt="${itemM.title} class="photo" />
                <div class="item-info">
                    <div class="header">
                        <h4>${itemM.title}</h4>
                        <h4 class="price">$${itemM.price}</h4>
                    </div>
                    <p class="item-text">
                        ${itemM.desc}
                    </p>
                </div>
                 <button class="btn-green">order</button>
            </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

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
