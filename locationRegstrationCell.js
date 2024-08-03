const firstNames = document.querySelector(".first-name");
const lastNames = document.querySelector(".last-name");
const dateOfBirths = document.querySelector(".dates");
const emails = document.querySelector(".emails");
const passwords = document.querySelector(".password");
const comfirmPasswords = document.querySelector(".comfirm");
const welcomeMsg = document.querySelector(".welcome");
const comfirmBTN = document.querySelector(".comfirm-btn");
const accEmail = document.querySelector(".login-email");
const accPassword = document.querySelector(".login-password");
const regsiterCell = document.querySelector(".resgister");
const loginCell = document.querySelector(".login");
const heroSection = document.querySelector(".hero");

const btnLoginOldAcc = document.querySelector(".login-old-acc");
const loginBtn = document.querySelector(".login-btn");
const regsiterBtn = document.querySelector(".register-btn");
const btnCloseRegister = document.querySelector(".back-btn");
const btnCloseLogin = document.querySelector(".back-btn-LOGIN");

// console.log(loginBtn, regsiterBtn);

const client = {
  firstName: [],
  lastName: [],
  dateOfBirth: [],
  email: [],
  password: [],
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
    welcomeMsg.textContent = `welcome mr ${firstNames.value}`;
  }
};
export const showComfirmationMsg = function () {
  comfirmBTN.addEventListener("click", () => {
    regsiterFunctionallity();
    success();
  });
};
export const loginOldAccount = function () {
  const oldEmail = client.email;
  const oldPassword = client.password;
  oldEmail.forEach((em, i) => {
    if (accEmail.value === em && oldPassword[i] === accPassword.value) {
      alert("CORECT!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    } else {
      alert("unknown inputs");
    }
  });
};
export const loginOldAccountExpo = function () {
  btnLoginOldAcc.addEventListener("click", loginOldAccount);
};

regsiterCell.style.display = "none";
loginCell.style.display = "none";
const showFormBtn = document.querySelector(".show-form");
const sectionName = document.querySelector(".sec-name");

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

btnCloseLogin.addEventListener("click", function () {
  closeLoginAndRegisterCells(
    loginCell,
    heroSection,
    btnCloseLogin,
    showFormBtn,
    sectionName
  );
});
/////////////////////////////////////////////

btnCloseRegister.addEventListener("click", function () {
  closeLoginAndRegisterCells(
    regsiterCell,
    heroSection,
    btnCloseRegister,
    showFormBtn,
    sectionName
  );
});
