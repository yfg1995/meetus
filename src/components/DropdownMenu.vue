<template>
  <div class="header__item">
    <a href="#" class="header__link">
      <transition name="slide-fade">
        <!-- Header Navigation Menu Icon -->
        <button class="header--button cp" @click="toggleClass">
          <div class="hamburger" :class="{ showDropdown: show }">
            <span></span>
            <span></span>
            <span></span>
          </div>
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

    function toggleClass() {
      show.value = !show.value;
    }

    return {
      show,
      toggleClass,
    };
  },
};
</script>

<style scoped>
.header--button {
  color: var(--clr-primary);
  border: 0;
  background: transparent;
  outline: none;
  visibility: hidden;
}
.hamburger {
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-40%);
}
.hamburger span {
  display: block;
  height: 2px;
  width: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  background: var(--clr-primary);
  transition: all 0.3s ease-in-out;
}
.hamburger span:nth-child(1),
.hamburger span:nth-child(3) {
  transform-origin: left;
}
.hamburger span:nth-child(2) {
  transform-origin: center;
}
.showDropdown span:nth-child(1) {
  transform: rotate(45deg);
}
.showDropdown span:nth-child(2) {
  transform: scaleX(0);
}
.showDropdown span:nth-child(3) {
  transform: rotate(-45deg);
}
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

/* Dropdown Menu */
.dropdown__menu {
  position: absolute;
  top: 200%;
  right: 0;
  width: 100vw;
  z-index: 99;
  padding: 10px 0;
  background: #fff;
  display: none;
}

/* Animation Menu Icon */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}

/* Dropdown Menu Animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.5s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
}

/* RESPONSIVE */
@media (max-width: 767px) {
  .header--button {
    visibility: visible;
  }
  .dropdown__menu {
    display: block;
  }
}
</style>