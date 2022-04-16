<template lang="">
    <li @mouseenter="isActive = true" @mouseleave="isActive = false" class="menu-item">
      <a>{{ title }}</a>

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
.sub-item {
  position: absolute;
  top: 247%;
  left: 0;
  min-width: 200px;
  visibility: hidden;
  transition: all 0.3s linear;
  box-shadow: 0px 3px 16px 0px rgb(0 0 0 / 10%);
  opacity: 0;
  background: #fff;
  z-index: 90;
}
.menu-item a {
  color: #fff;
  padding: 5px 0;
  font-size: 0.9375em;
  line-height: 1.5em;
  transition: all 0.3s linear;
  font-weight: 500;
}
.sub-item .menu-item a {
  color: var(--vt-c-black-soft);
  padding: 18px;
  font-weight: 500;
  display: block;
  transition: all 0.3s ease-in;
}
.sub-item .menu-item a:hover {
  background: var(--clr-primary);
  color: #fff;
}

/* HELPERS */
.activeVisible {
  visibility: visible;
  opacity: 1;
}

/* RESPONSIVE */
@media (max-width: 1366px) {
  .menu-item a {
    font-size: 0.875em;
  }
  .sub-item {
    top: 225%;
  }
  .sub-item .menu-item a {
    padding: 16px;
  }
}
</style>