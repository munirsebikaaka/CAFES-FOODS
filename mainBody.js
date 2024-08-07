const openCell1 = document.querySelector(".btn1");
const openCell2 = document.querySelector(".btn2");
const openCell3 = document.querySelector(".btn3");
const openCell4 = document.querySelector(".btn4");
const overly = document.querySelector(".overly");
const allBtn = [openCell1, openCell2, openCell3, openCell4];

export const showRewardsCell = function (btnRe, secNa, herSec) {
  btnRe.addEventListener("click", function () {
    secNa.textContent = "REWARDS";
    allBtn.forEach((btn) => {
      btn.style.display = "none";
    });
    herSec.innerHTML = `
        
        
        <div class="rewards">
                <div class="about-rewards-cell">
                  <div class="about-reward">
                    <p class="reward-head">
                      Welcome to <span class="reward-head-m">Rewards</span>
                    </p>
                    <p class="reward-dis">
                      Introducing Rewards! Our way to say Thank you for using our app.
                    </p>
                  </div>
                  <div class="reward">
                    <p>ionicons</p>
                    <div>
                      <p class="point">Points Earned</p>
                      <p class="amount">00/10,00,000</p>
                      <p class="range">input ranges of rewards</p>
                    </div>
                  </div>
                </div>
                <div class="rewards-movement">
                  <h4 class="move-head">how it works</h4>
                  <div class="movements-cell">
                    <div class="movement-cell">
                      <h4 class="move-name">Earn Points</h4>
                      <p class="move-dis">You can Earn Points on every order</p>
                    </div>
                    <div class="movement-cell">
                      <h4 class="move-name">Validity of Points</h4>
                      <p class="move-dis">
                        Points credited has an expiry of 1 year from the date that is
                        creditted
                      </p>
                    </div>
                    <div class="movement-cell">
                      <h4 class="move-name">Points Transfer</h4>
                      <p class="move-dis">
                        Earned rewards points can not be trnsfered to any third party.
                      </p>
                    </div>
                    <div class="movement-cell">
                      <h4 class="move-name">Redeem Roints</h4>
                      <p class="move-dis">
                        Our CART before Checkout, You can enter the point you want to
                        redeem.
                      </p>
                    </div>
                    <div class="movement-cell">
                      <h4 class="move-name">Credits on your Phone Number</h4>
                      <p class="move-dis">Points credited basis the phone number.</p>
                    </div>
                  </div>
                </div>
              </div>
        
        `;
  });
};

export const showOrderCell = function (btnOr, secNa, herSec) {
  btnOr.addEventListener("click", function () {
    secNa.textContent = "ORDERS";
    allBtn.forEach((btn) => {
      btn.style.display = "block";
    });

    herSec.innerHTML = `
       <div class="orders-in">
          <div class="inside-order">
            <div id="breakfastID" class="big-on-breakfast">
              <img
                class="big-img breakfast"                 
                src="bigBrakeFAST/breakFastCombo/combo8.jpg"
                alt=""
              />
              <p class="order-name">BREAKFIST</p>

            </div>
            <div class="big-on-breakfast">

              <img
                class="big-img breakfast2"
                src="bigBrakeFAST/breakFastCombo/combo6.jpg"
                alt=""
              />
              <p class="order-name">namesssss</p>
            </div>
          </div>
          <div class="inside-order">
            <div class="big-on-breakfast">
              <img
                class="big-img breakfast3"
                src="bigBrakeFAST/breakFastCombo/combo5.jpg"
                alt=""
              />
              <p class="order-name">namesssss</p>
            </div>
            <div class="big-on-breakfast">
              <img
                class="big-img breakfast4"
                src="bigBrakeFAST/cappuccino-1869731_1280.jpg"
                alt=""
              />
              <p class="order-name">namesssss</p>
            </div>
          </div>
        </div>
    
    `;
  });
};

export const showMenu = function (btnM, secNa, herSec) {
  btnM.addEventListener("click", function () {
    secNa.textContent = "HOME";
    allBtn.forEach((btn) => {
      btn.style.display = "none";
    });
    herSec.innerHTML = `
        
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
};

export const showMore = function (btnMore, secNa, herSec) {
  btnMore.addEventListener("click", function () {
    secNa.textContent = "MORE";
    allBtn.forEach((btn) => {
      btn.style.display = "none";
    });
    herSec.innerHTML = `
           
        <ul class="footer-links-cell">
        <li class="footer-links">
          <a href="#" class="footer-link">E-GIFT CARD</a>
        </li>
        <li class="footer-links">
          <a href="#" class="footer-link">TRACK ORDER</a>
        </li>
        <li class="footer-links"><a href="#" class="footer-link">DEALS</a></li>
        <li class="footer-links">
          <a href="#" class="footer-link">TERMS & CONDITIONS</a>
        </li>
        <li class="footer-links">
          <a href="#" class="footer-link">PRIVACY POLICY </a>
        </li>
        <li class="footer-links">
          <a href="#" class="footer-link"> ABOUT US</a>
        </li>
        <li class="footer-links">
          <a href="#" class="footer-link"> GALLARY</a>
        </li>
        <li class="footer-links">
          <a href="#" class="footer-link"> CONTACT SUPPORT</a>
        </li>
      </ul>
        `;
  });
};

function addClass(appForm) {
  appForm.classList.remove("hidden2");
  overly.classList.remove("hidden");
}
const removeClass = (appForm) => {
  appForm.classList.add("hidden2");
  overly.classList.add("hidden");
};
export const showForm = function (showBtn, appForm) {
  showBtn.addEventListener("click", () => addClass(appForm));
};
export const closeForm = function (appForm, close) {
  close.addEventListener("click", () => removeClass(appForm));
};
export const useOverly = function (appForm) {
  overly.addEventListener("click", () => removeClass(appForm));
};
