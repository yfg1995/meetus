<template>
  <Services />
  <Portfolio />
</template>

<script>
import Services from "@/views/Services.vue";
import Portfolio from "@/views/pages/Portfolio.vue";

export default {
  components: {
    Services,
    Portfolio,
  },
};
</script>

<style scoped>
section:first-of-type {
  box-shadow: none;
}
</style>

