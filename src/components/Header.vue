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
          <li>
            <router-link to="/portfolio">portfolio</router-link>
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
import { onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    onMounted(() => {
      window.onscroll = function () {
        scrollFunction();
      };

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
  transition: background 0.3s, all 0.4s ease-in-out;
}
.headerScroll ul li a:before,
.headerScroll ul li a:after {
  background: var(--clr-secondary);
}
.headerScroll h1 {
  font-size: 1.625rem;
}

h1 {
  font-size: 1.75rem;
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
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
</style>