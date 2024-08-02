"use strict";

const applicationForm = document.querySelector(".application-nav");
const heroSection = document.querySelector(".hero");
const sectionName = document.querySelector(".sec-name");

const orderBtn = document.querySelector(".order-btn");
const menuBtn = document.querySelector(".home-btn");
const rewardsBtn = document.querySelector(".rewards-btn");
const moreBtn = document.querySelector(".more-btn");
const showFormBtn = document.querySelector(".show-form");
const btnCloseForm = document.querySelector(".close-form");

// CODE FOR THE MAIN BODY OF THE APPLICATION FROM MAINBODY.JS
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
    const coord = [lat, lng];
    console.log(`https://www.google.com/maps/@${lat},${lng}`);

    const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      .openPopup();
  },
  () => alert("error")
);
