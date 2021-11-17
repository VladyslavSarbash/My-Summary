import db from "../../../db.json" assert { type: "json" };

const { titleName, text } = db.summaryRight.firstItem;

const firstItemRef = document.querySelector(".summary-right_first_item");

const firstItemTitle = document.createElement("h2");
firstItemTitle.textContent = `${titleName}:`.toUpperCase();
firstItemTitle.classList.add("summary-right__title");

const firstItemText = document.createElement("p");
firstItemText.textContent = `${text}`;

firstItemRef.prepend(firstItemTitle);
firstItemRef.append(firstItemText);
