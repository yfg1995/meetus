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

      <div class="portfolio_btn tac">
        <a class="main_btn" href="#">load more items</a>
      </div>
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
.portfolio_btn {
  margin-top: 80px;
}
.main_btn {
  display: inline-block;
  background-image: linear-gradient(
    to right,
    var(--clr-primary) 0%,
    var(--clr-secondary) 50%,
    var(--clr-primary) 100%
  );
  background-size: 200% auto;
  padding: 4px 40px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 0.875em;
  font-weight: bold;
  line-height: 3em;
  border-radius: 5px;
  transition: all 0.3s linear;
  text-transform: capitalize;
}
.main_btn:hover {
  background-position: right center;
}
</style>