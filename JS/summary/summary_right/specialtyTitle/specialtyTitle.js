import db from "../../../db.json" assert { type: "json" };

const summaryRightListRef = document.querySelector(".summary-right__list");

const { specialty } = db.summaryRight;

const specialtyTitle = document.createElement("h2");
specialtyTitle.textContent = `${specialty}`;
specialtyTitle.classList.add("summary-specialty");

summaryRightListRef.before(specialtyTitle);
