<template>
  <Header />
  <router-view></router-view>
  <Testimonials
    v-if="
      $route.name === 'home' ||
      $route.name === 'services' ||
      $route.name === 'about'
    "
  />
  <Footer />
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Testimonials from "@/components/layout/Testimonials.vue";
import Footer from "@/views/Footer.vue";

export default {
  components: {
    Header,
    Testimonials,
    Footer,
  },
};
</script>

<style>
@import "@/assets/base.css";
</style>
