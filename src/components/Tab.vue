<template>
  <transition name="projects">
    <div v-show="title == selectedTitle || selectedTitle === 'all'">
      <slot />
    </div>
  </transition>
</template>

<script>
import { inject } from "vue";

export default {
  props: ["title"],
  setup() {
    const selectedTitle = inject("selectedTitle");

    return {
      selectedTitle,
    };
  },
};
</script>

<style scoped>
div {
  width: calc((100% - 30px) / 3);
  padding: 0 15px;
}
.projects-enter-from {
  opacity: 0;
  transform: scale(0.5) translateY(-80px);
}
.projects-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.projects-enter-active {
  transition: all 0.2s linear;
}
.projects-leave-active {
  position: absolute;
  z-index: -1;
}
.projects-enter-to,
.projects-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>