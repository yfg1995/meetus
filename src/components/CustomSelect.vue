<template lang="">
  <div class="custom-select cp" :tabindex="tabindex" @blur="open = false">
    <div class="selected" @click="open = !open">
      {{ selected }}
      <div class="select-arrow" :class="{ rotateArrow: open }">
        <svg viewBox="0 0 384 512">
          <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/>
        </svg>
      </div>
    </div>
    <div class="items" :class="{ selectShow: open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const open = ref(false);
    const selected = ref(
      props.default
        ? props.default
        : props.options.length > 0
        ? props.options[0]
        : null
    );

    onMounted(() => {
      emit("input", props.selected);
    });

    return {
      selected,
      open,
    };
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  outline: none;
}
.custom-select .selected {
  position: relative;
  display: block;
  width: 100%;
  border: 1px solid transparent;
  outline: none;
  background: #f9f9ff;
  padding: 8px 20px;
  font-size: 1em;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
  color: var(--vt-c-grey-soft);
}
.custom-select .select-arrow {
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  transition: all 0.2s ease-in-out;
}
.custom-select .select-arrow svg {
  fill: #797979;
  height: 11px;
  width: 11px;
}
.custom-select .items {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: 10px 0 10px 22px;
  background: #fff;
  text-transform: capitalize;
  color: var(--vt-c-grey-soft);
  visibility: hidden;
  opacity: 0;
}
.custom-select .items div {
  cursor: pointer;
  font-size: 0.875em;
  line-height: 1.875em;
}
.custom-select .items div:hover {
  color: var(--elements-c-primary);
}
.single-element-widget .custom-select {
  width: 70%;
}
.single-element-widget .custom-select .select-arrow {
  right: 8%;
}
.input-group-icon .custom-select .selected {
  padding-left: 14px;
}
.input-group-icon .custom-select .items {
  left: -5%;
  width: 105%;
  padding-left: 50px;
}
.selectShow {
  visibility: visible !important;
  opacity: 1 !important;
}
.rotateArrow {
  transform: rotate(-180deg) !important;
  top: 21% !important;
}
</style>
