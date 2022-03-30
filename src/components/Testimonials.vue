<template>
  <section class="testimonials p_120">
    <div class="container">
      <div class="main_title">
        <h2 class="bold uppercase">testimonials</h2>
        <p>
          If you are looking at blank cassettes on the web, you may be very
          confused at the difference in price. You may see some for as low as
          $.17 each.
        </p>
      </div>

      <div class="swiper">
        <swiper
          :slides-per-view="3"
          :spaceBetween="30"
          :allow-touch-move="true"
          :speed="800"
          :loop="true"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide>
            <div class="testimonial-card">
              <p>
                As conscious traveling Paup ers we must always be oncerned about
                our dear Mother Earth. If you think about it, you travel across
                her face.
              </p>
              <h4>Fanny Spencer</h4>
              <Rating />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="testimonial-card">
              <p>
                As conscious traveling Paup ers we must always be oncerned about
                our dear Mother Earth. If you think about it, you travel across
                her face.
              </p>
              <h4>Fanny Spencer</h4>
              <Rating />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="testimonial-card">
              <p>
                As conscious traveling Paup ers we must always be oncerned about
                our dear Mother Earth. If you think about it, you travel across
                her face.
              </p>
              <h4>Fanny Spencer</h4>
              <Rating />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="testimonial-card">
              <p>
                As conscious traveling Paup ers we must always be oncerned about
                our dear Mother Earth. If you think about it, you travel across
                her face.
              </p>
              <h4>Fanny Spencer</h4>
              <Rating />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import "swiper/css";
import Rating from "./UI-helpers/Rating.vue";
import SwiperCore, { Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    Rating,
  },

  setup() {
    return {};
  },
};
</script>

<style scoped>
.testimonials {
  background: #f9f9ff;
}
.swiper-slide * {
  cursor: grab;
}
.testimonial-card {
  border: 1px solid #eee;
  border-radius: 10px;
  background: #fff;
  padding: 40px 28px;
  max-width: 360px;
}
.swiper h4 {
  font-size: 1.125rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 16px;
}
.swiper p {
  font-style: italic;
  font-size: 1rem;
}
</style>