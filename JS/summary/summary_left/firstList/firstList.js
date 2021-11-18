import db from "../../../db.json" assert { type: "json" };

const firstListRef = document.querySelector(".summary-left_first_list");

const { titleName, tel, email, links } = db.summaryLeft.firstList;

const firstListTitle = document.createElement("h2");
firstListTitle.textContent = `${titleName}:`.toLocaleUpperCase();
firstListTitle.classList.add("summary-left__title");

firstListRef.before(firstListTitle);

const renderMailAndTel = `<li> 
    <a href="tel:${tel.number}" target="_blank" rel="noreferrer noopener">
      <svg class="icon" >
        <use href="${tel.icon}"></use>
      </svg>  
    ${tel.number}
    </a> 
      </li>

      <li> 
    <a href="mailto:${email.address}" target="_blank" rel="noreferrer noopener">
    <svg class="icon" >
    <use href="${email.icon}"></use>
    </svg> 
      ${email.address}
    </a> 
      </li>`;

const renderLinks = links
  .map((i) => {
    return `<li> 
    <a href="${i.link}" target="_blank" rel="noreferrer noopener"> 
    <svg class="icon" >
    <use href="${i.icon}"></use>
    </svg> 
    ${i.linkName}
    </a> 
    </li>`;
  })
  .join("");

firstListRef.innerHTML = `${renderMailAndTel} ${renderLinks}`;
