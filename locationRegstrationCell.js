let firstNames = document.querySelector(".first-name");
let lastNames = document.querySelector(".last-name");
let dateOfBirths = document.querySelector(".dates");
let emails = document.querySelector(".emails");
let passwords = document.querySelector(".password");
let comfirmPasswords = document.querySelector(".comfirm");
const welcomeMsg = document.querySelector(".welcome");
const comfirmBTN = document.querySelector(".comfirm-btn");
const accEmail = document.querySelector(".login-email");
const accPassword = document.querySelector(".login-password");
const regsiterCell = document.querySelector(".resgister");
const loginCell = document.querySelector(".login");
const heroSection = document.querySelector(".hero");
const showFormBtn = document.querySelector(".show-form");
const sectionName = document.querySelector(".sec-name");
const welcomeBackMsg = document.querySelector(".welcome-back");

const btnLoginOldAcc = document.querySelector(".login-old-acc");
const loginBtn = document.querySelector(".login-btn");
const regsiterBtn = document.querySelector(".register-btn");
const btnCloseRegister = document.querySelector(".back-btn");
const btnCloseLogin = document.querySelector(".back-btn-LOGIN");

regsiterCell.style.display = "none";
loginCell.style.display = "none";

const client = {
  firstName: [],
  lastName: [],
  dateOfBirth: [],
  email: [],
  password: [],
};

const openLoginAndRegisterCells = function (
  cellToChangeDisplay,
  addClassCell,
  btnAndClass,
  btnRemoveClass,
  secSetCnt
) {
  cellToChangeDisplay.style.display = "block";
  addClassCell.classList.add("hidden");
  btnAndClass.classList.remove("hidden");
  btnRemoveClass.classList.add("hidden");
  secSetCnt.textContent = "LOGIN";
};
const closeLoginAndRegisterCells = function (
  addDisplay,
  removeClass,
  addClassBtn,
  removeClassBtn,
  secNaCnt
) {
  addDisplay.style.display = "none";
  removeClass.classList.remove("hidden");
  addClassBtn.classList.add("hidden");
  removeClassBtn.classList.remove("hidden");
  secNaCnt.textContent = "HOME";
};

export const showAndHideLoginAndRegisterFunctionallity = function () {
  regsiterBtn.addEventListener("click", function () {
    openLoginAndRegisterCells(
      regsiterCell,
      heroSection,
      btnCloseRegister,
      showFormBtn,
      sectionName
    );
  });

  loginBtn.addEventListener("click", function () {
    openLoginAndRegisterCells(
      loginCell,
      heroSection,
      btnCloseLogin,
      showFormBtn,
      sectionName
    );
  });

  btnCloseLogin.addEventListener("click", function () {
    closeLoginAndRegisterCells(
      loginCell,
      heroSection,
      btnCloseLogin,
      showFormBtn,
      sectionName
    );
  });

  btnCloseRegister.addEventListener("click", function () {
    closeLoginAndRegisterCells(
      regsiterCell,
      heroSection,
      btnCloseRegister,
      showFormBtn,
      sectionName
    );
  });
};

export const regsiterFunctionallity = function () {
  if (firstNames.value) {
    client.firstName.push(firstNames.value);
  } else {
    alert("Please input first name!");
  }
  if (lastNames.value) {
    client.lastName.push(lastNames.value);
  } else {
    alert("Please input last name!");
  }
  if (dateOfBirths.value) {
    client.dateOfBirth.push(dateOfBirths.value);
  } else {
    alert("Please input date of birth!");
  }
  if (emails.value) {
    client.email.push(emails.value);
  } else {
    alert("Please input your email address!");
  }
  if (passwords.value && passwords.value === comfirmPasswords.value) {
    client.password.push(passwords.value);
  } else {
    alert("Please input password!");
  }
};
export const success = function () {
  if (
    firstNames.value &&
    lastNames.value &&
    dateOfBirths.value &&
    emails.value &&
    passwords.value &&
    passwords.value === comfirmPasswords.value
  ) {
    welcomeMsg.textContent = `Hello and welcome Mr/Mrs ${firstNames.value},this is the cafe javas please get ready to test our fantastic products.`;
  }
};
export const loginOldAccount = function () {
  const oldEmail = client.email;
  const oldPassword = client.password;
  oldEmail.forEach((em, i) => {
    if (accEmail.value === em && oldPassword[i] === accPassword.value) {
      client.firstName.forEach((nam) => {
        welcomeBackMsg.textContent = `Welcome back Mr/Mrs ${nam} choose any type of product you want`;
      });
    } else {
      alert("unknown inputs");
    }
  });
};

export const loginOldAccountExpo = function () {
  btnLoginOldAcc.addEventListener("click", loginOldAccount);
};

export const showComfirmationMsg = function () {
  comfirmBTN.addEventListener("click", () => {
    regsiterFunctionallity();
    success();
    firstNames.value = "";
    lastNames.value = "";
    dateOfBirths.value = "";
    emails.value = "";
    passwords.value = "";
    comfirmPasswords.value = "";
  });
};
