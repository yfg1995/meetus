<template>
  <section class="p_120 section-box-shadow">
    <div class="container">
      <div class="main_title">
        <h2 class="bold uppercase">our latest featured projects</h2>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>

      <TabsWrapper>
        <Tab title="all">all</Tab>
        <Tab title="vector">1</Tab>
        <Tab title="raster">2</Tab>
        <Tab title="ui/ux">3</Tab>
        <Tab title="printing">4</Tab>
      </TabsWrapper>
    </div>
  </section>
</template>

<script>
import TabsWrapper from "@/components/TabsWrapper.vue";
import Tab from "@/components/Tab.vue";

export default {
  components: {
    TabsWrapper,
    Tab,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>