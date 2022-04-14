<template lang="">
  <section class="p_120">
    <div class="container">
      <div class="about" v-for="(member, index) in members" :key="index">
        <div class="member__card d-flex">
          <div class="member__bg">
            <div class="member__img">
              <img v-if="member.image" :src="member.image" :alt="member.name" />
            </div>
          </div>

          <div class="member__content">
            <h6>hello everybody, i am</h6>
            <h3>
              {{ member.name }}
            </h3>
            <h4 class="bold">{{ member.profession }}</h4>

            <p>
              You will begin to realise why this exercise is called the Dickens
              Pattern (with reference to the ghost showing Scrooge some
              different futures).
            </p>

            <ul class="member__contact">
              <li>
                <a href="#">
                  <svg viewBox="0 0 448 512">
                    <path
                      d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"
                    />
                  </svg>
                  {{ member.date }}</a
                >
              </li>
              <li>
                <a href="#">
                  <svg viewBox="0 0 512 512">
                    <path
                      d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                    />
                  </svg>
                  {{ member.phone }}</a
                >
              </li>
              <li>
                <a href="#" target="_blank" class="member-mail">
                  <svg viewBox="0 0 512 512">
                    <path
                      d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"
                    />
                  </svg>
                  {{ member.mail }}</a
                >
              </li>
              <li>
                <a href="#">
                  <svg viewBox="0 0 576 512">
                    <path
                      d="M511.8 287.6L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6z"
                    />
                  </svg>
                  {{ member.address }}</a
                >
              </li>
            </ul>
            <!-- member contact -->

            <ul class="member__links d-flex">
              <li>
                <a href="#">
                  <svg viewBox="0 0 320 512">
                    <path
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    /></svg
                ></a>
              </li>
              <li>
                <a href="#"
                  ><svg viewBox="0 0 512 512">
                    <path
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    /></svg
                ></a>
              </li>
              <li>
                <a href="#"
                  ><svg viewBox="0 0 448 512">
                    <path
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    /></svg
                ></a>
              </li>
            </ul>
          </div>
          <!-- member content -->
        </div>
        <!-- member card -->

        <div class="member__info d-flex justify-between align-center">
          <div class="member__about">
            <h3 class="bold">about myself</h3>
            <p>
              Inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards especially in the
              workplace. That's why it's crucial that, as women, our behavior on
              the job is beyond reproach. Inappropriate behavior is often
              laughed.
            </p>

            <div class="member__about--items d-flex justify-between align-center">
              <div class="member__about--item">
                <svg viewBox="0 0 448 512">
                  <path
                    d="M448 80V128C448 172.2 347.7 208 224 208C100.3 208 0 172.2 0 128V80C0 35.82 100.3 0 224 0C347.7 0 448 35.82 448 80zM393.2 214.7C413.1 207.3 433.1 197.8 448 186.1V288C448 332.2 347.7 368 224 368C100.3 368 0 332.2 0 288V186.1C14.93 197.8 34.02 207.3 54.85 214.7C99.66 230.7 159.5 240 224 240C288.5 240 348.3 230.7 393.2 214.7V214.7zM54.85 374.7C99.66 390.7 159.5 400 224 400C288.5 400 348.3 390.7 393.2 374.7C413.1 367.3 433.1 357.8 448 346.1V432C448 476.2 347.7 512 224 512C100.3 512 0 476.2 0 432V346.1C14.93 357.8 34.02 367.3 54.85 374.7z"
                  />
                </svg>
                <h4>${{ member.donation }}M</h4>
                <p>Total Donation</p>
              </div>
              <div class="member__about--item">
                <svg viewBox="0 0 448 512">
                  <path
                    d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"
                  />
                </svg>
                <h4>{{ member.projects }}</h4>
                <p>Total Projects</p>
              </div>
              <div class="member__about--item">
                <svg viewBox="0 0 640 512">
                  <path
                    d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"
                  />
                </svg>
                <h4>{{ member.volunteers }}</h4>
                <p>Total Volunteers</p>
              </div>
            </div>
          </div>
          <!-- member about -->
          <div class="member__skill_main">
            <ProgressBar
              v-if="member.skills"
              :skills="Object.entries(member.skills)"
            />
          </div>
          <!-- member skill main -->
        </div>
        <!-- member info -->
      </div>
      <!-- about -->
    </div>
    <!-- container -->
  </section>
</template>

<script>
import { onMounted, computed } from "vue";
import store from "@/store/index.js";
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  components: {
    ProgressBar,
  },
  setup() {
    const members = computed(() => {
      return store.getters["info/members"];
    });

    onMounted(() => {});

    return {
      members,
    };
  },
};
</script>

<style>
.about {
  padding: 120px 0;
}
.about:first-of-type {
  padding-top: 0;
}
.about:last-of-type {
  padding-bottom: 0;
}
.about:not(:last-of-type) {
  border-bottom: 2px solid var(--clr-primary);
}
.member__card {
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #eee;
  padding-bottom: 150px;
}
.member__card h3,
.member__card h4,
.member__card h6 {
  text-transform: uppercase;
  font-weight: 500;
}
.member__card p {
  margin-bottom: 40px;
}
.member__card svg {
  width: 20px;
  height: 20px;
}
.member__bg {
  position: relative;
  border-radius: 12px 12px 0 0;
  max-width: 40%;
  width: 100%;
  background: var(--bg-linear-gradient-bottom);
  padding-bottom: 40%;
}
.member__img {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}
.member__img img {
  object-fit: contain;
}
.member__img,
.member__img img {
  width: 100%;
  height: 100%;
}
.member__content {
  max-width: 50%;
  width: 100%;
  margin-top: 30px;
}
.member__contact li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.member__contact li a {
  position: relative;
  padding-left: 30px;
  color: var(--vt-c-grey-soft);
  font-size: 1em;
  cursor: default;
  transition: all 0.3s ease;
}
.member__contact svg {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  fill: var(--clr-primary);
}
.member__contact .member-mail svg {
  transform: translateY(-40%);
}
.member__contact .member-mail:hover {
  color: var(--clr-primary);
  cursor: pointer;
}
.member__links {
  margin-top: 40px;
}
.member__links li {
  width: 40px;
  height: 40px;
}
.member__links li:not(:last-of-type) {
  margin-right: 20px;
}
.member__links svg {
  fill: #fff;
  transition: all 0.3s ease;
}
.member__links li a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #e8e8e8;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.member__links li a:hover {
  background: var(--bg-linear-gradient-right);
}
.member__about {
  max-width: 47%;
}
.member__about h3 {
  font-size: 2.25em;
}
.member__about p {
  margin-bottom: 40px;
}
.member__about--item {
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 6px;
  width: calc((100% - 40px) / 3);
}
.member__about--item h4 {
  font-weight: 500;
  font-size: 1.5em;
  margin: 15px 0 5px;
}
.member__about--item p {
  margin-bottom: 0;
}
.member__about--item svg {
  width: 30px;
  height: 30px;
  fill: var(--clr-primary);
}
.member__card h3 {
  margin-bottom: 15px;
}
.member__card h4 {
  margin-bottom: 20px;
}
.member__card h6 {
  letter-spacing: 2.1px;
  font-weight: 400;
}
.member__card p {
  max-width: 550px;
}
.member__info {
  padding-top: 120px;
}
.member__info h3 {
  margin-bottom: 15px;
}
.member__skill_main {
  max-width: 47%;
  width: 100%;
}
</style>
