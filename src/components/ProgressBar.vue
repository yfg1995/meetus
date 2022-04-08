<template lang="">
  <div class="member__skill_item" v-for="(skill, idx) in skills" :key="idx">
    <h4>
      {{ skill[0] }}
      <span :data-progress="skill[1]" class="counter">0</span>%
    </h4>

    <div class="member__skill_progress-br">
      <div class="member__skill_progress">
        <div :data-progress="skill[1]" class="member__skill_progress-bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import store from "@/store/index.js";

export default {
  props: {
    skills: Array,
  },
  setup() {
    const members = computed(() => {
      return store.getters["members/members"];
    });

    onMounted(() => {
      const bars = document.querySelectorAll(".member__skill_progress-bar");
      const counters = document.querySelectorAll(".counter");
      const speed = 200;

      function progressBar() {
        bars.forEach((bar) => {
          let getWidth = parseFloat(bar.dataset.progress);
          for (let i = 0; i < getWidth; i++) {
            bar.style.width = i + "%";
          }
        });
        counters.forEach((counter) => {
          const animate = () => {
            const value = +counter.getAttribute("data-progress");
            const data = +counter.innerText;
            const time = value / speed;
            if (data < value) {
              counter.innerText = Math.ceil(data + time);
              setTimeout(animate, 100);
            } else {
              counter.innerText = value;
            }
          };
          animate();
        });
      }
      setInterval(progressBar, 300);
      clearInterval(progressBar);
    });

    return {
      members,
    };
  },
};
</script>

<style scoped>
.member__skill_progress-br {
  border: 1px solid #eee;
  padding: 5px;
  border-radius: 10px;
}
.member__skill_progress {
  height: 10px;
  border-radius: 10px;
  background: #f2f2f2;
}
.member__skill_progress-bar {
  background: linear-gradient(
    to left,
    var(--clr-primary),
    var(--clr-secondary)
  );

  transition: width 1.5s ease-in-out;
  height: 10px;
  border-radius: 5px;
  width: 0%;
}
.member__skill_item:not(:last-of-type) {
  margin-bottom: 18px;
}
.member__skill_item h4 {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 0.875em;
  text-transform: capitalize;
}
.counter {
  font-weight: bold;
}
</style>