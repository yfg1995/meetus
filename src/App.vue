<template>
  <Header />
  <div class="router-view">
    <router-view></router-view>
  </div>
  <Testimonials v-if="$route.name != 'contact'" />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Testimonials from "./components/Testimonials.vue";
import Footer from "@/views/Footer.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    Header,
    Testimonials,
    Footer,
    useRoute,
  },
};
</script>

<style>
@import "@/assets/base.css";

#app {
  margin: 0;
}

body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-track {
  background: #6de0ec;
}

body::-webkit-scrollbar-thumb {
  background: #007bff;
}

.router-view {
  margin-top: 120px;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

ul {
  padding-left: 0;
}

li {
  list-style: none;
}

h3 {
  font-size: 3rem;
  text-transform: uppercase;
  text-transform: bold;
}

h4 {
  font-size: 1rem;
}

h6 {
  font-size: 0.875rem;
}

p {
  color: #777777;
}

h3,
h4,
h6,
p {
  cursor: default;
}

a {
  text-decoration: none;
}

a,
svg {
  transition: all 0.2s ease-in-out;
}

/* HELPERS */
.flex {
  display: flex;
}

.uppercase {
  text-transform: uppercase;
}

.bold {
  font-weight: bold;
}

.p_120 {
  padding: 120px 0;
}

.section-box-shadow {
  box-shadow: inset 0px 200px 70px 0px rgba(238, 238, 238, 0.7);
}

/* MAIN TITLE */
.main_title {
  text-align: center;
  margin-bottom: 75px;
}
.main_title h2 {
  font-size: 3rem;
}
.main_title p {
  max-width: 670px;
  display: flex;
  margin: auto;
}

/* MEDIA QUERY */
@media (min-width: 1366px) {
  .container {
    max-width: 1200px;
  }
}
</style>
