import db from "../../../db.json" assert { type: "json" };

const thirdListRef = document.querySelector(".summary-right_third_item");

const { titleName, text } = db.summaryRight.thirdList;

const thirdListTitle = document.createElement("h2");
thirdListTitle.textContent = `${titleName}:`.toUpperCase();
thirdListTitle.classList.add("summary-right__title");

const thirdListInfo = text
  .map(({ years, position, responsibilities }) => {
    return `
  <p><b>${years}</b></p>
  <p>${position}</p>
  <ul>
    ${responsibilities
      .map((i) => {
        return `<li>${i}</li>`;
      })
      .join("")}
  </ul>
  `;
  })
  .join("");

thirdListRef.prepend(thirdListTitle);
thirdListRef.insertAdjacentHTML("beforeend", thirdListInfo);
