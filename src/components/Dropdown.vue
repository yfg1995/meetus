<template lang="">
    <li @mouseenter="isActive = true" @mouseleave="isActive = false" class="menu-item menu-item_fot uppercase">
      {{ title }}

        <ul class="sub-item" :class="{ activeVisible: isActive }">
          <li v-for="(item, idx) in items" :key="idx" class="menu-item" @click="toggleClass">
            <router-link :to="item.link">{{ item.title }}</router-link>
          </li>
        </ul>
    </li>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: ["title", "items"],
  setup() {
    const isActive = ref(false);

    function toggleClass() {
      isActive.value = !isActive.value;
    }

    onMounted(() => {
      document.addEventListener("mouseover", (e) => {
        if (
          e.target.classList.contains(".sub-item") ||
          e.target.classList.contains(".menu-item")
        ) {
          isActive.value = !isActive.value;
        }
      });
    });

    return {
      isActive,
      toggleClass,
    };
  },
};
</script>

<style scoped>
.headerScroll .sub-item {
  top: 206%;
}
.sub-item {
  position: absolute;
  top: 285%;
  left: 0;
  min-width: 200px;
  visibility: hidden;
  transition: all 0.3s linear 0s;
  box-shadow: 0px 3px 16px 0px rgb(0 0 0 / 10%);
  opacity: 0;
  background: #fff;
  z-index: 90;
}
.sub-item .menu-item a:hover {
  background: var(--clr-primary);
  color: #fff;
}
.menu-item {
  font-size: 0.875em;
}
.menu-item_fot {
  padding-top: 3px;
}
.sub-item .menu-item a {
  color: var(--vt-c-black-soft);
  padding: 18px;
  font-weight: 500;
  display: block;
  transition: all 0.3s linear 0s;
}
.sub-item .menu-item:not(:last-of-type) {
  border-bottom: 1px solid #ededed;
}

/* HELPERS */
.activeVisible {
  visibility: visible;
  opacity: 1;
}
</style>