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
const firstNames = document.querySelector(".first-name");
const lastNames = document.querySelector(".last-name");
const dateOfBirths = document.querySelector(".dates");
const emails = document.querySelector(".emails");
const passwords = document.querySelector(".password");
const comfirmPasswords = document.querySelector(".comfirm");
const welcomeMsg = document.querySelector(".welcome");
const comfirmBTN = document.querySelector(".comfirm-btn");

const client = {
  firstName: [],
  lastName: [],
  dateOfBirth: [],
  email: [],
  password: [],
};

function regsiter() {
  if (firstNames.value) {
    client.firstName.push(firstNames.value);
  } else {
    alert("Please input first name!");
  }
  if (lastNames.value) {
    client.lastName.push(lastNames.value);
  } else {
    alert("please input last name!");
  }
  if (dateOfBirths.value) {
    client.dateOfBirth.push(dateOfBirths.value);
  } else {
    alert("please input date of birth!");
  }
  if (emails.value) {
    client.email.push(emails.value);
  } else {
    alert("Please input your email address!");
  }
  if (passwords.value.length > 3) {
    if (passwords.value && passwords.value === comfirmPasswords.value) {
      client.password.push(passwords.value);
    } else {
      alert("Please input password!");
    }
  } else {
    alert("too short");
  }
  console.log(client);
}

comfirmBTN.addEventListener("click", () => {
  regsiter();
  if (
    firstNames.value &&
    lastNames.value &&
    dateOfBirths.value &&
    emails.value &&
    passwords.value &&
    passwords.value === comfirmPasswords.value
  ) {
    welcomeMsg.textContent = `welcome mr ${firstNames.value}`;
  }
});
const accEmail = document.querySelector(".login-email");
const accPassword = document.querySelector(".login-password");
const btnLoginOldAcc = document.querySelector(".login-old-acc");

function loginOldAccount() {
  const oldEmail = client.email;
  const oldPassword = client.password;
  oldEmail.forEach((em, i) => {
    if (accEmail.value === em && oldPassword[i] === accPassword.value) {
      alert("CORECT!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
  });
}
btnLoginOldAcc.addEventListener("click", loginOldAccount);
