import db from "../../../db.json" assert { type: "json" };

const thirdListRef = document.querySelector(".summary-right_third_item");

const { titleName, text } = db.summaryRight.thirdList;

const thirdListTitle = document.createElement("h2");
thirdListTitle.textContent = `${titleName}:`.toUpperCase();
thirdListTitle.classList.add("summary-right__title");

const thirdListText = document.createElement("p");
thirdListText.textContent = `${text}`;

thirdListRef.prepend(thirdListTitle);
thirdListRef.append(thirdListText);
