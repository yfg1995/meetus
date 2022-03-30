<template>
  <Header />
  <router-view></router-view>
  <Testimonials v-if="$route.name != 'contact' && $route.name != 'elements'" />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Testimonials from "@/components/Testimonials.vue";
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
