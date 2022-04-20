<template>
  <section class="p_120">
    <div class="container">
      <div class="main_title">
        <h2 class="bold uppercase">offerings to my clients</h2>
        <p>
          If you are looking at blank cassettes on the web, you may be very
          confused at the difference in price. You may see some for as low as
          $17 each.
        </p>
      </div>

      <div class="services_cards">
        <div class="services_card">
          <div class="services_card__item">
            <img src="/buildings.png" alt="buildings image" />
            <h4>architecture</h4>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>

        <div class="services_card">
          <div class="services_card__item">
            <img src="/skyline.png" alt="skyline image" />
            <h4>interior design</h4>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>

        <div class="services_card">
          <div class="services_card__item">
            <img src="/sketch.png" alt="sketch image" />
            <h4>concept design</h4>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>

        <div class="services_card">
          <div class="services_card__item">
            <img src="/buildings.png" alt="buildings image" />
            <h4>architecture</h4>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>

        <div class="services_card">
          <div class="services_card__item">
            <img src="/skyline.png" alt="skyline image" />
            <h4>interior design</h4>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>

        <div class="services_card">
          <div class="services_card__item">
            <img src="/sketch.png" alt="sketch image" />
            <h4>concept design</h4>
            <p>
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding-bottom: 90px;
}
.services_cards {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 360px 360px;
  grid-gap: 30px;
}
.services_card {
  display: grid;
  place-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1em;
  background: #fff;
  overflow: hidden;
}
.services_card:hover {
  box-shadow: 0px 10px 30px 0px rgb(0 0 0 / 8%);
}
.services_card:before {
  position: absolute;
  content: "";
  width: 800px;
  height: 100%;
  top: 5%;
  right: 300px;
  background: var(--bg-linear-gradient-right);
  transform: rotate(-45deg) translate(0, -100px);
}
.services_card:hover:before {
  animation: cardEffect 1.5s;
}
.services_card__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px;
  border-radius: 10px;
  transition: all 0.2s linear;
  background: #f9f9ff;
  overflow: hidden;
  z-index: 1;
  height: 100%;
}
.services_card__item:hover {
  background: #fff;
  transform: translate(5px, -5px);
}
.services_card__item img {
  width: 60px;
  height: 60px;
  margin-bottom: 35px;
}
.services_card__item h4 {
  position: relative;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.313em;
  margin-bottom: 20px;
  transition: all 0.15s linear;
}
.services_card__item:hover h4 {
  color: var(--clr-primary);
}

@keyframes cardEffect {
  100% {
    transform: rotate(-45deg) translate(0, 900px);
  }
}

/* RESPONSIVE */
@media (max-width: 1366px) {
  .services_cards {
    grid-gap: 40px;
  }
}
</style>