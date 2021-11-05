import { summaryLeft } from "../../../db.js";

const contactsRef = document.querySelector(".contacts__list");

const { tel, email, gitHub } = summaryLeft.contacts;

contactsRef.innerHTML = `<li> <a href='tel:${tel}'>${tel}</a> </li> 
<li> <a href="mailto:${email}">${email}</a> </li>  
<li> <a href="${gitHub}">GitHub</a> </li>`;
