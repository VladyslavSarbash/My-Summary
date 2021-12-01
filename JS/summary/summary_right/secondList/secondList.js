import db from "../../../db.json" assert { type: "json" };

const secondItemRef = document.querySelector(".summary-right_second_item");

const { titleName, dataArray } = db.summaryRight.secondItem;
const secondItemTitle = document.createElement("h2");
secondItemTitle.textContent = `${titleName}:`.toUpperCase();
secondItemTitle.classList.add("summary-right__title");

const listItem = dataArray
  .map((i) => {
    return `<li> 
    <p><b>${i.projectName.name}</b></p> 
    <p class="project-link"> 
    <a href="${
      i.projectLink.dataLink.link
    }" target="_blank" rel="noreferrer noopener">
    ${i.projectLink.dataLink.name}
    </a> 
    </p>
    <p>${i.technologies.tech
      .map((i) => {
        return `${i}`;
      })
      .join(" - ")}</p>
    <p>${i.aboutProject.text}</p>
    </li>`;
  })
  .join("");

const renderListItem = `<ul>${listItem}</ul>`;

secondItemRef.prepend(secondItemTitle);
secondItemRef.insertAdjacentHTML("beforeend", renderListItem);
