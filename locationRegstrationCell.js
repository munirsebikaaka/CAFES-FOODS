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
const btnLoginOldAcc = document.querySelector(".login-old-acc");

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
  console.log(client);
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
