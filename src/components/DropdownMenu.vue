<template>
  <div class="header__item">
    <a href="#" class="header__link">
      <transition name="slide-fade">
        <!-- Header Navigation Menu Icons -->
        <button
          class="header--button cp"
          v-if="show"
          key="on"
          @click="show = false"
        >
          <svg viewBox="0 0 24 24" class="header--icon">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              fill="currentColor"
              d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
            />
          </svg>
        </button>

        <button class="header--button cp" v-else key="off" @click="show = true">
          <svg viewBox="0 0 24 24" class="header--icon">
            <path
              fill="currentColor"
              d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
            />
          </svg>
        </button>
      </transition>
    </a>

    <!-- Dropdown Menu -->
    <transition name="dropdown">
      <div class="dropdown__menu tac" :class="{ active: show }" v-if="show">
        <ul class="dropdown__menu-nav">
          <li class="menu-item">
            <router-link to="/">home</router-link>
          </li>

          <li class="menu-item">
            <router-link to="/about">about us</router-link>
          </li>

          <li class="menu-item">
            <router-link to="/services">services</router-link>
          </li>

          <li class="menu-item">
            <Dropdown title="pages" :items="pages" />
          </li>

          <li class="menu-item">
            <Dropdown title="blog" :items="blog" />
          </li>

          <li class="menu-item">
            <router-link to="/contact">contact</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import Dropdown from "@/components/Dropdown.vue";

export default {
  components: {
    Dropdown,
  },
  props: ["pages", "blog"],
  setup() {
    const show = ref(false);

    return {
      show,
    };
  },
};
</script>

<style scoped>
.header__item {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.header__item,
.header--icon {
  width: 30px;
  height: 30px;
}
.header--button {
  top: 0;
  right: 0;
  position: absolute;
  margin: 0;
  padding: 0;
  color: var(--clr-primary);
  border: 1px solid transparent;
  background-color: transparent;
}
.header--button:focus {
  outline: 0;
}

/* Dropdown Menu */
.dropdown__menu {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 99;
  width: 100vw;
  padding: 10px 0;
  background: #fff;
}

/* Animation Menu Icon */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}

/* Dropdown Menu Animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>