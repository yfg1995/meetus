<template>
  <div class="tabs">
    <ul class="tabs__header d-flex justify-center align-center">
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTitle = title"
        :class="{ active: selectedTitle == title ? true : false }"
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
  setup(_, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
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
  font-size: 0.75em;
  transition: 300ms;
}
.tabs__header li:hover {
  color: var(--clr-primary);
}
/* HELPERS */
.active {
  color: var(--clr-primary);
}
</style>