import db from "../../../db.json" assert { type: "json" };

const summaryRightRef = document.querySelector(".summary-right");

const { nameAndSurname } = db.summaryRight;

const myNameTitle = document.createElement("h1");
myNameTitle.textContent = `${nameAndSurname}`;
myNameTitle.classList.add("summary-name");

summaryRightRef.prepend(myNameTitle);
