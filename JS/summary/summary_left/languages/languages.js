import { summaryLeft } from "../../../db.js";

const languagesRef = document.querySelector(".languages__list");

const { languages } = summaryLeft;

languagesRef.innerHTML = languages
  .map((i) => {
    return `<li>${i}</li>`;
  })
  .join("");
