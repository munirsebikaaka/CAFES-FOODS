const openCell1 = document.querySelector(".btn1");
const openCell2 = document.querySelector(".btn2");
const openCell3 = document.querySelector(".btn3");
const openCell4 = document.querySelector(".btn4");
const showFormBtn = document.querySelector(".show-form");
const orderBackBtn = document.querySelectorAll(".back");

const breakPrice = document.querySelector(".big-on-breakfasts");
const genePrice = document.querySelector(".generous-big-meal");
const drinksPrice = document.querySelector(".pefected-drinks");
const desertsPrice = document.querySelector(".dedicant-deserts");
const sectionName = document.querySelector(".sec-name");
const heroSection = document.querySelector(".hero");

const allBtn = [openCell1, openCell2, openCell3, openCell4];
allBtn.forEach((btn) => (btn.style.display = "none"));
orderBackBtn.forEach((el) => (el.style.display = "none"));

function runInnerOrder(show, price, section, backBtn, name) {
  price.classList.remove("hidden");
  section.classList.add("hidden");
  backBtn.style.display = "block";
  show.classList.add("hidden");
  sectionName.textContent = name;
  allBtn.forEach((btn) => (btn.style.display = "none"));
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

export const openCloseCell1 = function () {
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
      "BIG ON BREAKFAST"
    )
  );
};
export const openCloseCell2 = function () {
  openCell2.addEventListener("click", () =>
    runInnerOrder(
      showFormBtn,
      genePrice,
      heroSection,
      orderBackBtn[1],
      "GENEROUS BIG MEAL"
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
};
export const openCloseCell3 = function () {
  openCell3.addEventListener("click", () =>
    runInnerOrder(
      showFormBtn,
      drinksPrice,
      heroSection,
      orderBackBtn[2],
      "PERFECTED DRINKS"
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
};
export const openCloseCell4 = function () {
  openCell4.addEventListener("click", () =>
    runInnerOrder(
      showFormBtn,
      desertsPrice,
      heroSection,
      orderBackBtn[3],
      "DEDICANT DESERTS"
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
};
