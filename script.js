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

//REGSTER AND LOGIN FUNCTIONALLITY OF THE APPLICATION
import {
  showComfirmationMsg,
  loginOldAccountExpo,
  showAndHideLoginAndRegisterFunctionallity,
} from "./locationRegstrationCell.js";
showComfirmationMsg();
loginOldAccountExpo();
showAndHideLoginAndRegisterFunctionallity();

const openCell1 = document.querySelector(".btn1");
const openCell2 = document.querySelector(".btn2");
const openCell3 = document.querySelector(".btn3");
const openCell4 = document.querySelector(".btn4");

const breakPrice = document.querySelector(".big-on-breakfasts");
const genePrice = document.querySelector(".generous-big-meal");
const drinksPrice = document.querySelector(".pefected-drinks");
const desertsPrice = document.querySelector(".dedicant-deserts");
const orderBackBtn = document.querySelectorAll(".back");
console.log(orderBackBtn);
const allBtn = [openCell1, openCell2, openCell3, openCell4];

allBtn.forEach((btn) => (btn.style.display = "none"));
orderBackBtn.forEach((el) => (el.style.display = "none"));

function runInnerOrder(show, price, section, backBtn, name, allBtns) {
  price.classList.remove("hidden");
  section.classList.add("hidden");
  backBtn.style.display = "block";
  show.classList.add("hidden");
  sectionName.textContent = name;
  allBtns.forEach((btn) => {
    btn.style.display = "none";
  });
}

function runOutOrders(show, price, section, backBtn, name, allBtns) {
  price.classList.add("hidden");
  section.classList.remove("hidden");
  backBtn.style.display = "none";
  show.classList.remove("hidden");
  sectionName.textContent = name;
  allBtns.forEach((btn) => {
    btn.style.display = "block";
  });
}
//////////////////////////////////////////////////
orderBackBtn[0].addEventListener("click", () =>
  runOutOrders(
    showFormBtn,
    breakPrice,
    heroSection,
    orderBackBtn[0],
    "ORDERS",
    allBtn
  )
);

openCell1.addEventListener("click", () =>
  runInnerOrder(
    showFormBtn,
    breakPrice,
    heroSection,
    orderBackBtn[0],
    "BIG ON BREAKFAST",
    allBtn
  )
);
//////////////////////////////////////////////////////

openCell2.addEventListener("click", () =>
  runInnerOrder(
    showFormBtn,
    genePrice,
    heroSection,
    orderBackBtn[1],
    "GENEROUS BIG MEAL",
    allBtn
  )
);
orderBackBtn[1].addEventListener("click", () =>
  runOutOrders(
    showFormBtn,
    genePrice,
    heroSection,
    orderBackBtn[1],
    "ORDERS",
    allBtn
  )
);
//////////////////////////////////////////////////////////////
openCell3.addEventListener("click", () =>
  runInnerOrder(
    showFormBtn,
    drinksPrice,
    heroSection,
    orderBackBtn[2],
    "PERFECTED DRINKS",
    allBtn
  )
);
orderBackBtn[2].addEventListener("click", () =>
  runOutOrders(
    showFormBtn,
    drinksPrice,
    heroSection,
    orderBackBtn[2],
    "ORDERS",
    allBtn
  )
);
///////////////////////////////////////////////////
openCell4.addEventListener("click", () =>
  runInnerOrder(
    showFormBtn,
    desertsPrice,
    heroSection,
    orderBackBtn[3],
    "DEDICANT DESERTS",
    allBtn
  )
);

orderBackBtn[3].addEventListener("click", () =>
  runOutOrders(
    showFormBtn,
    desertsPrice,
    heroSection,
    orderBackBtn[3],
    "ORDERS",
    allBtn
  )
);
