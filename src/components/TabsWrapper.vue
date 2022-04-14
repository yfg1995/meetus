<template>
  <div class="tabs">
    <ul class="tabs__header d-flex justify-center align-center">
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTitle = title"
        :class="{ active: title == selectedTitle }"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from "vue";

export default {
  setup() {
    const tabTitles = ref(["all", "vector", "raster", "ui/ux", "printing"]);
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);

    return {
      tabTitles,
      selectedTitle,
    };
  },
};
</script>

<style scoped>
.tabs__header li {
  cursor: pointer;
  margin: 0 22px;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.8125em;
  transition: all 0.3s ease;
}
.tabs__header li:hover {
  color: var(--clr-primary);
}
.active {
  color: var(--clr-primary);
}
</style>