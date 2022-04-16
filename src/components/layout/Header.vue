<template>
  <header class="header" :class="{ headerScroll: fixedHeader ? true : false }">
    <div class="header-container">
      <div class="d-flex justify-between align-center">
        <div class="logo">
          <router-link to="/">
            <h1 class="uppercase">meetus</h1>
          </router-link>
        </div>

        <ul class="d-flex align-center">
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

          <Dropdown title="blog" :items="blog" />

          <li class="menu-item">
            <router-link to="/contact">contact</router-link>
          </li>
        </ul>

        <!-- <DropdownMenu /> -->
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Dropdown from "@/components/Dropdown.vue";
// import DropdownMenu from "@/components/DropdownMenu.vue";

export default {
  components: {
    Dropdown,
    // DropdownMenu,
  },
  setup() {
    const route = useRoute();
    const fixedHeader = ref(false);
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

    const blog = ref([
      {
        title: "blog",
        link: "/blog",
      },
      {
        title: "blog details",
        link: "/single-blog",
      },
    ]);

    onMounted(() => {
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          route.name != "contact" &&
          route.name != "notFound" &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          fixedHeader.value = true;
        } else {
          fixedHeader.value = false;
        }
      }
    });

    return {
      route,
      pages,
      blog,
      fixedHeader,
    };
  },
};
</script>

<style scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100px;
  background: var(--bg-linear-gradient-right);
  transition: all 0.3s linear;
}
.headerScroll {
  position: fixed;
  left: 0;
  background: #111;
  z-index: 99;
  width: 100%;
}
.headerScroll .menu-item a:before,
.headerScroll .menu-item a:after {
  background: var(--clr-secondary);
}
.headerScroll .logo h1 {
  transform: translateX(-100px);
  font-size: 2.5em;
}
.logo h1 {
  font-size: 2em;
  color: #fff;
  font-weight: bold;
  transition: all 0.3s linear;
}

li {
  list-style: none;
}

ul {
  display: flex;
}
.menu-item {
  text-transform: uppercase;
  margin: 0 20px;
  cursor: pointer;
}
.menu-item:last-of-type {
  margin-right: 0;
}
.menu-item a {
  position: relative;
  color: #fff;
  padding: 5px 0;
  font-size: 0.9375em;
  line-height: 1.5em;
  transition: all 0.3s linear;
  font-weight: 500;
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

/* RESPONSIVE */
@media (max-width: 1366px) {
  .header {
    min-height: 90px;
  }
  .header .logo h1 {
    transform: translateX(0);
    font-size: 1.75em;
  }
  .menu-item a {
    font-size: 0.875em;
  }
}
</style>