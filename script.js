"use strict";

const applicationForm = document.querySelector(".application-nav");
const ordersSection = document.querySelector(".orders");
const heroSection = document.querySelector(".hero");

const sectionName = document.querySelector(".sec-name");

const orderBtn = document.querySelector(".order-btn");
const menuBtn = document.querySelector(".home-btn");
const rewardsBtn = document.querySelector(".rewards-btn");
const moreBtn = document.querySelector(".more-btn");
const showFormBtn = document.querySelector(".show-form");

showFormBtn.addEventListener("click", function () {
  applicationForm.classList.remove("hidden2");
});
menuBtn.addEventListener("click", function () {
  sectionName.textContent = "HOME";
  heroSection.innerHTML = `
  
  <section class="hero">
        <div class="hero-section">
          <div class="hero-content-cell">
            <h1 class="hero-discription">
              WELCOME TO <b class="description-name">CJ's!!</b>
            </h1>
            <button class="btn hero-btn">
              <ion-icon class="link-icon" name="bag-check-outline"></ion-icon
              >START ORDER
            </button>
          </div>
        </div>

        <div class="about-us">
          <h1 class="about-head">ORDER FIRST FROM YOUR FAVOURITES</h1>
          <div class="register-cell">
            <button class="btn geolocation-btn">
              <ion-icon name="globe-outline"></ion-icon>view our cafeJavas
              brunches
            </button>
            <div class="control-btn-cell">
              <button class="btn login-btn">login</button>
              <button class="btn register-btn">register</button>
            </div>
          </div>
          <h4 class="about-semi-head">my recent orders</h4>
          <p class="about-semi-description">
            Login for an easy, one tap order again for your recent orders.
          </p>
        </div>
      </section>
  `;
});

orderBtn.addEventListener("click", function () {
  sectionName.textContent = "ORDERS";
  heroSection.innerHTML = `
  
  <div class="orders-in">
          <div class="inside-order">
            <div class="big-on-breakfast">
              <img
                class="big-img"
                src="bigBrakeFAST/breakFastCombo/combo8.jpg"
                alt=""
              />
              <p class="order-name">namesssss</p>
            </div>
            <div class="big-on-breakfast">
              <img
                class="big-img"
                src="bigBrakeFAST/breakFastCombo/combo6.jpg"
                alt=""
              />
              <p class="order-name">namesssss</p>
            </div>
          </div>
          <div class="inside-order">
            <div class="big-on-breakfast">
              <img
                class="big-img"
                src="bigBrakeFAST/breakFastCombo/combo5.jpg"
                alt=""
              />
              <p class="order-name">namesssss</p>
            </div>
            <div class="big-on-breakfast">
              <img
                class="big-img"
                src="bigBrakeFAST/cappuccino-1869731_1280.jpg"
                alt=""
              />
              <p class="order-name">namesssss</p>
            </div>
          </div>
        </div>
  
  `;
});
rewardsBtn.addEventListener("click", function () {
  sectionName.textContent = "REWARDS";
  heroSection.innerHTML = `
  

<div class="about-rewards-cell">
          <div class="about-reward">
            <p class="reward-head">Welcome to <span>rewards</span></p>
            <p class="reward-dis">
              introducing rewards! our way to say thank you for using our app
            </p>
          </div>
          <div class="reward">
            <p class="point">points earned</p>
            <p class="amount">00/10,00,000</p>
            <p class="range"></p>
          </div>
        </div>
        <div class="rewards-movement">
          <h4 class="move-head">how it works</h4>
          <div class="movement-cell">
            <h4 class="move-name">earn points</h4>
            <p class="move-dis">you can earn points on every order</p>
          </div>
          <div class="movement-cell">
            <h4 class="move-name">validity of points</h4>
            <p class="move-dis">
              points credited has an expiry of 1 year from the date that is
              creditted
            </p>
          </div>
          <div class="movement-cell">
            <h4 class="move-name">points transfer</h4>
            <p class="move-dis">
              earned rewards points can not be trnsfered to any third party.
            </p>
          </div>
          <div class="movement-cell">
            <h4 class="move-name">redeem points</h4>
            <p class="move-dis">
              our CART before checkout, you can enter the point you want to
              redeem.
            </p>
          </div>
          <div class="movement-cell">
            <h4 class="move-name">credits on your phone number</h4>
            <p class="move-dis">points credited basis the phone number.</p>
          </div>
        </div>

  
  
  `;
});
moreBtn.addEventListener("click", function () {
  sectionName.textContent = "MORE";
  heroSection.innerHTML = `
     <ul>
        <li class="footer-links"><a href="#">E-GIFT CARD</a></li>
        <li class="footer-links"><a href="#">TRACK ORDER</a></li>
        <li class="footer-links"><a href="#">DEALS</a></li>
        <li class="footer-links"><a href="#">TERMS AND CONDITIONS</a></li>
        <li class="footer-links"><a href="#">PRIVACY POLICY </a></li>
        <li class="footer-links"><a href="#"> ABOUT US</a></li>
        <li class="footer-links"><a href="#"> GALLARY</a></li>
        <li class="footer-links"><a href="#"> CONTACT SUPPORT</a></li>
      </ul>
  
  `;
});
