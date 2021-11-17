import db from "../../../db.json" assert { type: "json" };

const thirdListRef = document.querySelector(".summary-left_third_list");

const { titleName, arrayData } = db.summaryLeft.thirdList;

const thirdListTitle = document.createElement("h2");
thirdListTitle.textContent = `${titleName}:`.toLocaleUpperCase();
thirdListTitle.classList.add("summary-left__title");

thirdListRef.before(thirdListTitle);

thirdListRef.innerHTML = arrayData
  .map((i) => {
    return `<li><p>${i}</p></li>`;
  })
  .join("");
