"use strict";

const applicationForm = document.querySelector(".application-nav");
const ordersSection = document.querySelector(".orders");
const heroSection = document.querySelector(".hero");

const sectionName = document.querySelector(".sec-name");

const orderBtn = document.querySelector(".order-btn");
const menuBtn = document.querySelector(".home-btn");
const rewardsBtn = document.querySelector(".rewards-btn");
const moreBtn = document.querySelector(".more-btn");
const showFormBtn = document.querySelector(".show-form");
const btnCloseForm = document.querySelector(".close-form");

import {
  showRewardsCell,
  showOrderCell,
  showMenu,
  showMore,
  showForm,
  closeForm,
} from "./mainBody.js";
showRewardsCell(rewardsBtn, sectionName, heroSection);
showOrderCell(orderBtn, sectionName, heroSection);
showMenu(menuBtn, sectionName, heroSection);
showMore(moreBtn, sectionName, heroSection);
showForm(showFormBtn, applicationForm);
closeForm(applicationForm, btnCloseForm);

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude: lat, longitude: lng } = position.coords;
    const cordinates = `   https://www.google.com/maps/@${lat},${lng},10z?entry=ttu   `;
    console.log(cordinates);

    const map = L.map("map").setView([lat, lng], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([lat, lng]).addTo(map).bindPopup("codesmann").openPopup();
  },
  (err) => alert(err)
);
