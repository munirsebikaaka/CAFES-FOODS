"use strict";

const ordersSection = document.querySelector(".orders");
const heroSection = document.querySelector(".hero");

const orderBtn = document.querySelector(".order-btn");

// ordersSection.classList.add("hidden");
orderBtn.addEventListener("click", function () {
  ordersSection.classList.remove("hidden");
  heroSection.classList.add("hidden");
});
