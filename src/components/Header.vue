<template>
  <header id="header">
    <div class="container">
      <div class="header flex justify-between align-center">
        <div class="logo">
          <router-link to="/">
            <h1 class="bold">meetus</h1>
          </router-link>
        </div>

        <ul>
          <li>
            <router-link to="/">home</router-link>
          </li>
          <li>
            <router-link to="/about-us">about us</router-link>
          </li>
          <li>
            <router-link to="/services">services</router-link>
          </li>

          <li class="dropdown-toggle">
            <a @mouseenter="toggleClass" @mouseleave="toggleClass" href=""
              >pages</a
            >
            <ul
              class="dropdown-menu"
              :class="{ active: isActive ? true : false }"
            >
              <li>
                <router-link to="/portfolio">portfolio</router-link>
              </li>
              <li>
                <router-link to="/elements">elements</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/contact">contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const isActive = ref(false);

    function toggleClass() {
      isActive.value = !isActive.value;
    }

    onMounted(() => {
      window.onscroll = function () {
        scrollFunction();
      };

      document.addEventListener("mouseover", (e) => {
        if (
          (e.target.closest(".dropdown-toggle") &&
            e.relatedTarget.closest(".dropdown-toggle")) ||
          (e.target.closest(".dropdown-menu") &&
            e.relatedTarget.closest(".dropdown-menu"))
        ) {
          isActive.value = !isActive.value;
        }
        e.preventDefault();
      });

      function scrollFunction() {
        if (
          route.name != "contact" &&
          (document.body.scrollTop > 120 ||
            document.documentElement.scrollTop > 120)
        ) {
          document.getElementById("header").className = "headerScroll";
        } else {
          document.getElementById("header").className = "";
        }
      }
    });

    return {
      route,
      toggleClass,
      isActive,
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  min-height: 120px;
  background: linear-gradient(
    to right,
    var(--clr-primary),
    var(--clr-secondary)
  );
}
.headerScroll {
  background: #111;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  min-height: 70px;
  transition: background 0.4s, all 0.5s ease-in-out;
}
.headerScroll ul li a:before,
.headerScroll ul li a:after {
  background: var(--clr-secondary);
}
.headerScroll h1 {
  font-size: 1.625rem;
}
.headerScroll .dropdown-menu {
  top: 188%;
}
.headerScroll .dropdown-toggle a:not(".dropdown-menu") {
  padding: 25px 0;
}
h1 {
  font-size: 1.75rem;
}

a {
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
}

ul {
  display: flex;
}

li {
  list-style: none;
  margin: 0 20px;
}

ul li:last-of-type {
  margin-right: 0;
}

ul li a {
  position: relative;
  padding: 5px 0;
  font-size: 0.875rem;
}

ul li a:before,
ul li a:after {
  position: absolute;
  content: "";
  width: 0%;
  background: var(--clr-primary);
  height: 2px;
  transition: all 0.25s ease-in-out;
}

ul li a:before {
  top: 0;
  left: 0;
}

ul li a:after {
  bottom: 0;
  right: 0;
}

ul li a:hover:before,
ul li a:hover:after,
ul li a.router-link-active:before {
  width: 100%;
}
/* DROPDOWN MENU */
.dropdown-toggle {
  position: relative;
}
.dropdown-toggle a {
  padding: 50px 0;
}
.dropdown-menu {
  position: absolute;
  top: 285%;
  left: 0;
  min-width: 200px;
  max-height: 118px;
  display: none;
  transition: all 300ms ease-in;
  box-shadow: 0px 3px 16px 0px rgb(0 0 0 / 10%);
  opacity: 0;
  background: #fff;
  z-index: 90;
}
.dropdown-menu li {
  margin: 0;
}
.dropdown-menu li a:hover {
  background: var(--clr-primary);
  color: #fff;
}
.dropdown-menu li a {
  color: #222;
  padding: 18px;
  display: block;
  transition: 300ms ease-in-out;
}
.dropdown-menu li:not(:last-of-type) {
  border-bottom: 1px solid #ededed;
}
.dropdown-menu li a:before,
.dropdown-menu li a:after,
.dropdown-toggle a:after,
.dropdown-toggle a:before {
  display: none;
}
/* HELPERS */
.active {
  display: block;
  opacity: 1;
}
</style>