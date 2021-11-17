import db from "../../../db.json" assert { type: "json" };

const fourthListRef = document.querySelector(".summary-left_fourth_list");

const { arrayData, titleName } = db.summaryLeft.fourthList;

const fourthListTitle = document.createElement("h2");
fourthListTitle.textContent = `${titleName}:`.toLocaleUpperCase();
fourthListTitle.classList.add("summary-left__title");

fourthListRef.before(fourthListTitle);

fourthListRef.innerHTML = arrayData
  .map((i) => {
    return `<li><p>${i}</p></li>`;
  })
  .join("");
