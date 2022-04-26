<template lang="">
  <section class="p_120">
    <div class="container">
      <div class="main_title">
        <observable mode="btm">
          <h2 class="bold uppercase">our latest featured projects</h2>
        </observable>

        <observable mode="left">
          <p>Who are in extremely love with eco friendly system.</p>
        </observable>
      </div>

      <SlideModal :show="!!modalIsActive" @close="toggleModal">
        <div class="gallery-slider d-flex align-center justify-center">
          <div class="modal-previous cp" @click="prev">
            <PrevIcon />
          </div>
            
          <div class="gallery-slider__img">
            <div class="modal-close cp" @click="toggleModal">
              <svg>
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                />
              </svg>
            </div>
      
            <TransitionGroup class="slide-img-wrap"
            name="slide" tag="div">
              <img
              class="img-fluid"
              :src="`${projects[slider_id].image}`"
              :alt="`${projects[slider_id].title}`"
              :key="slider_id"
              v-for="slider_id in slider_ids"
            />
            </TransitionGroup>
          </div>

          <div class="modal-next cp" @click="next">
            <NextIcon />
          </div>
        </div>
      </SlideModal>  

      <TabsWrapper>
        <div class="tab-content d-flex">
          <Tab
            v-for="project, index in projects"
            :key="project.title"
            :title="project.category"
          >
              <div class="gallery-item tac">
                <div class="g-img-item">
                  <img
                    class="img-fluid"
                    :src="`${project.image}`"
                    :alt="`${project.title}`"
                  />
                  <a class="eye" href="#" @click="(e) => toggleModal(e, index)">
                    <svg viewBox="0 0 576 512">
                      <path
                        d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"
                      />
                    </svg>
                  </a>
                </div>

                <div class="g-text-item">
                  <h4>{{ project.title }}</h4>
                  <p>client project</p>
                </div>
              </div>
          </Tab>
        </div>
      </TabsWrapper>

      <div class="portfolio_btn tac" v-if="showSix">
        <div class="main_btn">
          <router-link to="/portfolio">more projects</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import store from "@/store/index.js";
import TabsWrapper from "@/components/TabsWrapper.vue";
import Tab from "@/components/Tab.vue";
import SlideModal from "@/components/SlideModal.vue";
import PrevIcon from "@/components/UI-helpers/PrevIcon.vue";
import NextIcon from "@/components/UI-helpers/NextIcon.vue";

export default {
  components: {
    TabsWrapper,
    Tab,
    SlideModal,
    PrevIcon,
    NextIcon,
  },
  props: {
    showSix: Boolean,
  },
  setup(props) {
    const projects = computed(() => {
      return !props.showSix
        ? store.getters["info/projects"]
        : store.getters["info/projects"].slice(0, 6);
    });

    const slider_ids = ref([null, null, null]);
    const currentIndex = ref(0);
    const modalIsActive = ref(false);

    function setSliderIds(index) {
      slider_ids.value = [index];
    }

    function toggleModal(e, index) {
      if (e) {
        console.log("index: ", index);
        e.preventDefault();
        currentIndex.value = index;
        setSliderIds(index);
      }
      modalIsActive.value = !modalIsActive.value;
    }

    function next() {
      if (currentIndex.value === projects.value.length - 1) {
        currentIndex.value = 0;
      } else {
        currentIndex.value += 1;
      }

      setSliderIds(currentIndex.value);
    }

    function prev() {
      if (currentIndex.value === 0) {
        currentIndex.value = projects.value.length - 1;
      } else {
        currentIndex.value -= 1;
      }
      setSliderIds(currentIndex.value);
    }

    onMounted(() => {});

    return {
      projects,
      modalIsActive,
      toggleModal,
      currentIndex,
      slider_ids,
      next,
      prev,
    };
  },
};
</script>

<style scoped>
.tab-content {
  flex-wrap: wrap;
}
.gallery-item {
  position: relative;
  border-radius: 5px;
  margin-top: 55px;
}
.g-img-item,
.g-img-item .img-fluid {
  position: relative;
  height: 100%;
  width: 100%;
}
.g-img-item:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 98.35%;
  opacity: 0;
  transition: all 0.25s linear;
  z-index: 2;
  border-radius: 10px;
  background: var(--bg-linear-gradient-right);
}
.g-img-item:hover:before {
  opacity: 0.7;
}
.g-img-item .img-fluid {
  max-height: 389px;
}
.g-img-item .eye {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 3;
  border-radius: 50%;
}
.g-img-item .eye svg {
  fill: #fff;
  width: 70px;
  height: 70px;
  transition: all 0.25s ease-in;
}
.g-img-item .eye svg:hover {
  width: 100px;
  height: 100px;
}
.g-img-item:hover .eye {
  opacity: 1;
}
.g-text-item h4 {
  color: var(--vt-c-black-soft);
  margin-top: 20px;
  transition: all 0.25s linear;
  font-size: 1.5em;
  font-weight: 500;
}
.gallery-item:hover .g-text-item h4 {
  color: var(--clr-primary);
}
.g-text-item h4,
.g-text-item p {
  text-transform: capitalize;
}
.portfolio_btn {
  margin-top: 80px;
}
.main_btn a {
  display: inline-block;
  background-image: linear-gradient(
    to right,
    var(--clr-primary) 0%,
    var(--clr-secondary) 50%,
    var(--clr-primary) 100%
  );
  background-size: 200% auto;
  padding: 4px 40px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 0.875em;
  font-weight: bold;
  line-height: 3em;
  border-radius: 5px;
  transition: all 0.25s ease-in;
  text-transform: capitalize;
}
.main_btn a:hover {
  background-position: right center;
  transform: translateY(-5px);
}

/* SLIDER MODAL */
.gallery-slider {
  position: relative;
  margin: 20px auto;
}
.slide-img-wrap {
  display: flex;
  width: 340px;
  height: 340px;
  overflow: hidden;
}
.modal-close {
  position: absolute;
  top: -10%;
  right: -5%;
  width: 18px;
  height: 18px;
  z-index: 9999;
  transition: all 0.25s linear;
}
.modal-close svg {
  width: 18px;
  height: 18px;
  transition: all 0.25s linear;
  fill: #fff;
}
.modal-close:hover svg {
  fill: var(--clr-primary);
}
.modal-previous,
.modal-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  transition: all 0.25s linear;
}
.modal-previous {
  left: -50%;
}
.modal-next {
  right: -50%;
}
.modal-previous svg,
.modal-next svg {
  transition: all 0.25s linear;
  fill: #fff;
  width: 50px;
  height: 50px;
}
.modal-previous:hover svg,
.modal-next:hover svg {
  fill: var(--clr-primary);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s linear;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

/* RESPONSIVE */
@media (max-width: 1366px) {
  .g-img-item .eye svg:hover {
    width: 85px;
    height: 85px;
  }
}
</style>