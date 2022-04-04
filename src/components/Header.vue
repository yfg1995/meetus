<template>
  <header id="header">
    <div class="header-container">
      <div class="header flex justify-between align-center">
        <div class="logo">
          <router-link to="/">
            <h1 class="uppercase">meetus</h1>
          </router-link>
        </div>

        <ul class="flex align-center">
          <li class="menu-item">
            <router-link to="/">home</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/about-us">about us</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/services">services</router-link>
          </li>

          <Dropdown title="pages" :items="pages" />

          <li class="menu-item">
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
import Dropdown from "@/components/Dropdown.vue";

export default {
  components: {
    Dropdown,
  },
  setup() {
    const route = useRoute();

    const pages = ref([
      {
        title: "portfolio",
        link: "/portfolio",
      },
      {
        title: "elements",
        link: "/elements",
      },
    ]);

    onMounted(() => {
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          route.name != "contact" &&
          (document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200)
        ) {
          document.getElementById("header").className = "headerScroll";
        } else {
          document.getElementById("header").className = "";
        }
      }
    });

    return {
      route,
      pages,
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
  transition: all 0.4s ease-in-out;
}
.headerScroll {
  background: #111;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  min-height: 80px;
  transition: background 0.4s, all 0.4s ease-in-out;
}
.headerScroll .menu-item a:before,
.headerScroll .menu-item a:after {
  background: var(--clr-secondary);
}
.headerScroll .logo h1 {
  font-size: 1.625em;
}
.logo h1 {
  font-size: 1.75em;
  color: #fff;
  font-weight: bold;
}

li {
  list-style: none;
}

ul {
  display: flex;
}
.menu-item {
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0 20px;
  cursor: pointer;
}
.menu-item:last-of-type {
  margin-right: 0;
}
.menu-item a {
  position: relative;
  padding: 5px 0;
  font-size: 0.875em;
  color: #fff;
}
.menu-item a:before,
.menu-item a:after {
  position: absolute;
  content: "";
  width: 0%;
  background: var(--clr-primary);
  height: 2px;
  transition: all 0.25s ease-in-out;
}
.menu-item a:before {
  top: 0;
  left: 0;
}
.menu-item a:after {
  bottom: 0;
  right: 0;
}
.menu-item a:hover:before,
.menu-item a:hover:after,
.menu-item a.router-link-active:before {
  width: 100%;
}
.menu-item a.router-link-active:after {
  width: 0;
}
</style>