<template>
  <Header />
  <router-view></router-view>
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
</style>
