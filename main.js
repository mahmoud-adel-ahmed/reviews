let next_btn = document.querySelector(".next");
let prev_btn = document.querySelector(".prev");
let img = document.querySelector("img");
let desc = document.querySelector(".desc");
let human = document.querySelector(".person");
let nextAndPrev = 0;

const reviews = [
  {
    name: "bill anderson",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it, marfa pok cray venmo actually seitan. VHS farm-to-table, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    name: "michael raga",
    img: "./images/pic-2.jpg",
    text: "Lorem ipsum dolor sit amet adipisicing elit. nostrum quaerat ullam ducimus eaque ab minus ipsa nam facere rerum sapiente culpa quis, cupiditate eos!",
  },
  {
    name: "tom macarchy",
    img: "./images/pic-1.jpg",
    text: "Lorem, ipsum dolor sit amet elit. Accusamus nesciunt, nobis iusto rerum saepe fugiat voluptate quod quos tenetur impedit quisquam porro.",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  showPerson(nextAndPrev);
});

next_btn.addEventListener("click", () => {
  nextAndPrev++;
  if (nextAndPrev > reviews.length - 1) {
    nextAndPrev = 0;
  }
  showPerson(nextAndPrev);
});

prev_btn.addEventListener("click", () => {
  nextAndPrev--;
  if (nextAndPrev < 0) {
    nextAndPrev = reviews.length - 1;
  }
  showPerson(nextAndPrev);
});

function showPerson(person) {
  let user = reviews[person];
  img.src = user.img;
  human.textContent = user.name;
  desc.textContent = user.text;
}
