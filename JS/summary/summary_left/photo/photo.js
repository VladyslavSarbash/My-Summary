import db from "../../../db.json" assert { type: "json" };

const { myPhoto } = db.summaryLeft;

const summaryLeftRef = document.querySelector(".summary-left");

const img = document.createElement("img");
img.classList.add("myPhotoImg");

img.src = myPhoto;
img.alt = "Моя фотография";

summaryLeftRef.prepend(img);
