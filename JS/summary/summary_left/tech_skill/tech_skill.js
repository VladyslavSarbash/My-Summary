import { summaryLeft } from "../../../db.js";

const techSkillRef = document.querySelector(".tech-skill__list");

const { techSkill } = summaryLeft;

techSkillRef.innerHTML = techSkill
  .map((i) => {
    return `<li>${i}</li>`;
  })
  .join("");
