<template>
  <div class="tab-content" v-show="title == selectedTitle">
    <div></div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: ["title"],
  setup() {
    const selectedTitle = inject("selectedTitle");

    return {
      selectedTitle,
    };
  },
};
</script>

<style scoped>
.tab-content {
  margin-top: 50px;
  width: 100%;
}
</style>