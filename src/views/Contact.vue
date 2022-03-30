<template>
  <section class="p_120">
    <div class="container">
      <div class="contact__rows flex">
        <div class="contact__info">
          <div class="contact__info--item">
            <svg viewBox="0 0 576 512">
              <path
                d="M511.8 287.6L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6z"
              />
            </svg>

            <h6>California, United States</h6>
            <p>Santa Monica Bullevard</p>
          </div>

          <div class="contact__info--item">
            <svg viewBox="0 0 512 512">
              <path
                d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
              />
            </svg>

            <h6>00 (440) 9865 562</h6>
            <p>Mon to Fri 9am to 6pm</p>
          </div>

          <div class="contact__info--item">
            <svg viewBox="0 0 512 512">
              <path
                d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"
              />
            </svg>
            <h6>support@gmail.com</h6>
            <p>Send us your query anytime!</p>
          </div>
        </div>

        <form>
          <div class="contact__form flex justify-between">
            <div class="contact__form--input">
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter email address" />
              <input type="text" placeholder="Enter subject" />
            </div>

            <div class="contact__form--msg">
              <textarea placeholder="Enter message"></textarea>
            </div>
          </div>

          <div class="submit-btn bold">Send Message</div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section:first-of-type {
  box-shadow: none;
}
.contact__info {
  max-width: 300px;
  width: 100%;
}
.contact__info--item {
  position: relative;
  padding-left: 40px;
}
.contact__info--item svg {
  position: absolute;
  top: 5px;
  left: 0;
  fill: var(--clr-primary);
  width: 20px;
  height: 25px;
}
.contact__info--item:not(:last-of-type) {
  margin-bottom: 20px;
}
.contact__info--item h6 {
  font-size: 1rem;
  font-weight: bold;
}
.contact__form input,
.contact__form textarea {
  font-size: 0.875rem;
  color: #999;
  border: 2px solid #eee;
  width: 100%;
  outline: none;
  transition: border-color 0.15s ease-in-out;
}
.contact__form input {
  height: 40px;
  padding: 0 20px;
}
.contact__form input:focus,
.contact__form textarea:focus {
  border-color: var(--clr-primary);
}
.contact__form input:not(:last-of-type) {
  margin-bottom: 10px;
}
.contact__form textarea {
  height: 140px;
  padding: 15px;
}
.contact__form--input,
.contact__form--msg {
  max-width: 48%;
  width: 100%;
}
.submit-btn {
  max-width: 200px;
  background: var(--clr-primary);
  padding: 0px 50px;
  color: #fff;
  font-size: 0.875rem;
  line-height: 3.125rem;
  border-radius: 5px;
  border: 1px solid var(--clr-primary);
  cursor: pointer;
  transition: all 300ms linear 0s;
  margin-top: 20px;
  margin-left: calc(100% - 200px);
}
.submit-btn:hover {
  background: transparent;
  color: var(--clr-primary);
}
</style>