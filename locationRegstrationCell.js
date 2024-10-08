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
const geolocationBtn = document.querySelector(".geolocation-btn");
const map = document.getElementById("map");

regsiterCell.style.display = "none";
loginCell.style.display = "none";

geolocationBtn.addEventListener("click", function () {
  heroSection.classList.add("hidden");
  map.classList.remove("hidden");
});

export const currentPositionOnMap = function () {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude: lat, longitude: lng } = position.coords;
      const posCoords = [lat, lng];
      console.log(posCoords);
      const map = L.map("map").setView(posCoords, 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      const kawempe = [0.37288879372160305, 32.55798339843751];
      const gayaza = [0.4488255373975061, 32.61016845703126];
      const kampala = [0.3112741893818594, 32.58682250976563];
      const kyambogo = [0.3552777649635313, 32.625961303710945];
      const gaba = [0.25949210624339925, 32.628707885742195];
      const ntinda = [0.35647937142302477, 32.44314193725587];
      const makerere = [0.33691033280328014, 32.56416320800782];
      const nansana = [0.36403232269975694, 32.52622604370118];
      const mutundwe = [0.2819794954305079, 32.53137588500977];
      const kira = [0.34652319893266076, 32.59592056274415];
      L.marker(kawempe).addTo(map).openPopup();
      L.marker(gayaza).addTo(map).openPopup();
      L.marker(kampala).addTo(map).openPopup();
      L.marker(kyambogo).addTo(map).openPopup();
      L.marker(gaba).addTo(map).openPopup();
      L.marker(ntinda).addTo(map).openPopup();
      L.marker(makerere).addTo(map).openPopup();
      L.marker(nansana).addTo(map).openPopup();
      L.marker(mutundwe).addTo(map).openPopup();
      L.marker(kira).addTo(map).openPopup();
    },
    function () {
      alert("Failed to access your position!!!!");
    }
  );
};
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
  secSetCnt,
  content
) {
  cellToChangeDisplay.style.display = "block";
  addClassCell.classList.add("hidden");
  btnAndClass.classList.remove("hidden");
  btnRemoveClass.classList.add("hidden");
  secSetCnt.textContent = content;
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
      sectionName,
      "REGISTERS"
    );
  });

  loginBtn.addEventListener("click", function () {
    openLoginAndRegisterCells(
      loginCell,
      heroSection,
      btnCloseLogin,
      showFormBtn,
      sectionName,
      "LOGIN"
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
