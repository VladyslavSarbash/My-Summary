import db from "../../../db.json" assert { type: "json" };

const secondListRef = document.querySelector(".summary-left_second_list");

const { titleName, arrayData } = db.summaryLeft.secondList;

const secondListTitle = document.createElement("h2");
secondListTitle.textContent = `${titleName}:`.toLocaleUpperCase();
secondListTitle.classList.add("summary-left__title");

secondListRef.before(secondListTitle);

secondListRef.innerHTML = arrayData
  .map((i) => {
    return `<li><p>${i}</p></li>`;
  })
  .join("");
