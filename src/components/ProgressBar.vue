<template lang="">
  <div class="member__skill_item" v-for="(skill, idx) in skills" :key="idx" :class="{ hide: skill[1] == null || skill[1] == undefined }">
    <h4>
      {{ skill[0] }}
      <span :data-progress="skill[1]" class="counter">0</span>%
    </h4>

    <div class="member__skill_progress-br">
      <div class="member__skill_progress">
        <observable mode="custom">
          <div :data-progress="skill[1]" class="member__skill_progress-bar"></div>
        </observable>
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
      bars.forEach((bar, key) => {
        for (let i = 0; i <= parseFloat(bar.dataset.progress); i++) {
          bar.style.setProperty("--progressWidth", i);
          counters[key].innerText = i;
        }
      });
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
  background: var(--bg-linear-gradient-left);
  transition: width 1s ease-in-out;
  height: 10px;
  border-radius: 5px;
  width: 0;
  width: calc(var(--progressWidth) * 1%);
}

/* .member__skill_progress-bar.inView {
  width: calc(var(--progressWidth) * 1%);
} */

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
.hide {
  display: none;
}
</style>