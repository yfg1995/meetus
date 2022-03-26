<template>
  <section class="p_120">
    <div class="container">
      <div class="main_title">
        <h2 class="bold uppercase">our latest featured projects</h2>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>

      <TabsWrapper>
        <Tab title="all" />
        <Tab title="vector" />
        <Tab title="raster" />
        <Tab title="ui/ux" />
        <Tab title="printing" />
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