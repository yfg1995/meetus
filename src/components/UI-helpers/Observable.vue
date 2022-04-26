<template>
  <!-- <span ref="spanRef"> -->
  <slot></slot>
  <!-- </span> -->
</template>

<script>
import { onMounted, ref } from "vue";
// import { IntersectionTransitions } from "@/helpers/IntersectionTransitions.js";

export default {
  props: {
    mode: String,
  },
  setup(props) {
    const spanRef = ref(null);
    onMounted(() => {
      // const el = spanRef.value.children[0];
      // const el = spanRef.value;
      // console.log(el);
      // el.classList.add("ivtr");
      // if (props.mode) {
      //   el.classList.add(`ivtr--${props.mode}`);
      // }
      // new IntersectionTransitions(el);
    });

    return {
      spanRef,
    };
  },
};
</script>


