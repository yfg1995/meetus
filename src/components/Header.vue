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
  background: linear-gradient(
    to right,
    var(--clr-primary),
    var(--clr-secondary)
  );
  min-height: 120px;
}
.headerScroll {
  background: #111;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  min-height: 80px;
  transition: background 0.4s, all 0.5s ease-in-out;
}
.headerScroll ul li a:before {
  background: var(--clr-secondary);
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
  padding: 5px 0 0;
  font-size: 0.875rem;
}

ul li a:before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0%;
  background: var(--clr-primary);
  height: 2px;
  transition: all 0.2s ease-in-out;
}

ul li a:hover:before {
  width: 100%;
}

img {
  object-fit: contain;
}
</style>