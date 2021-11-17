import db from "../../../db.json" assert { type: "json" };

const fourthListRef = document.querySelector(".summary-right_fourth_item");

const { titleName, dataArray } = db.summaryRight.fourthList;

const fourthListTitle = document.createElement("h2");
fourthListTitle.textContent = `${titleName}:`.toUpperCase();
fourthListTitle.classList.add("summary-right__title");

const listItem = dataArray
  .map((i) => {
    return `<li>
    <p><b>${i.institutionName}</b></p>
    <p>${i.profession}</p>
    <p>${i.yearsOfStudy}</p>
  </li>`;
  })
  .join("");

const renderListItem = `<ul>${listItem}</ul>`;

fourthListRef.prepend(fourthListTitle);
fourthListRef.insertAdjacentHTML("beforeend", renderListItem);
