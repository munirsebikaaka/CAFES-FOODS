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

//SHOW AND HIDE ORDER PRODUCTS FUNCTIONALLITY OF THE APPLICATION
import {
  openCloseCell1,
  openCloseCell2,
  openCloseCell3,
  openCloseCell4,
} from "./seeInsideOrder.js";
openCloseCell1();
openCloseCell2();
openCloseCell3();
openCloseCell4();
