import { summaryLeft } from "../../../db.js";

const softSkillRef = document.querySelector(".soft-skill__list");

const { softSkill } = summaryLeft;

softSkillRef.innerHTML = softSkill
  .map((i) => {
    return `<li>${i}</li>`;
  })
  .join("");
