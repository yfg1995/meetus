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
        <div class="services_cards__item">
          <img src="/buildings.png" alt="" />
          <h4>architecture</h4>
          <p>
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $17 each.
          </p>
        </div>

        <div class="services_cards__item">
          <img src="/skyline.png" alt="" />
          <h4>interior design</h4>
          <p>
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $17 each.
          </p>
        </div>

        <div class="services_cards__item">
          <img src="/sketch.png" alt="" />
          <h4>concept design</h4>
          <p>
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $17 each.
          </p>
        </div>

        <div class="services_cards__item">
          <img src="/buildings.png" alt="" />
          <h4>architecture</h4>
          <p>
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $17 each.
          </p>
        </div>

        <div class="services_cards__item">
          <img src="/skyline.png" alt="" />
          <h4>interior design</h4>
          <p>
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $17 each.
          </p>
        </div>

        <div class="services_cards__item">
          <img src="/sketch.png" alt="" />
          <h4>concept design</h4>
          <p>
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $17 each.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

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
.services_cards__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px;
  border-radius: 10px;
  transition: all 0.2s linear;
  background: #f9f9ff;
}
.services_cards__item img {
  width: 60px;
  height: 60px;
  margin-bottom: 35px;
}
.services_cards__item h4 {
  position: relative;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.313em;
  margin-bottom: 20px;
  transition: all 0.15s linear;
}
.services_cards__item:hover {
  background: #fff;
  box-shadow: 0px 10px 30px 0px rgb(0 0 0 / 8%);
  transform: translate(5px, -5px);
}
.services_cards__item:hover h4 {
  color: var(--clr-primary);
}

/* RESPONSIVE */
@media (max-width: 1366px) {
  .services_cards {
    grid-gap: 40px;
  }
}
</style>