<template>
  <section class="p_120">
    <div class="container">
      <div class="main_title">
        <h2 class="bold uppercase">our latest featured projects</h2>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>

      <TabsWrapper>
        <Tab title="all" />
      </TabsWrapper>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import TabsWrapper from "@/components/TabsWrapper.vue";
import Tab from "@/components/Tab.vue";

export default {
  components: {
    TabsWrapper,
    Tab,
  },
  setup() {
    const tabTitles = ref(["all", "vector", "raster", "ui/ux", "printing"]);
    return { tabTitles };
  },
};
</script>

<style scoped>
</style>