<template>
  <header id="header">
    <div class="container">
      <div class="header flex">
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
            <router-link to="/contact">contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      window.onscroll = () => {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 120 ||
          document.documentElement.scrollTop > 120
        ) {
          document.getElementById("header").className = "headerScroll";
        } else {
          document.getElementById("header").className = "";
        }
      }
    });

    return {};
  },
};
</script>

<style scoped>
header {
  background: linear-gradient(to right, #007bff, #6de0ec);
  transition: background 0.4s, all 0.4s linear;
  min-height: 120px;
  align-items: center;
  display: flex;
}
.headerScroll {
  background: #000;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  min-height: 100px;
}
.header {
  justify-content: space-between;
  align-items: center;
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
  padding: 0 0 10px;
}

ul li a:before {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 0%;
  background: #007bff;
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