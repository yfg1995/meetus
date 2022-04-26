<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <slot />
        <menu v-if="!fixed">
          <slot name="actions" />
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    function tryClose() {
      if (props.fixed) {
        return;
      }
      emit("close");
    }

    return {
      tryClose,
    };
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9500;
}

dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 9900;
  border: none;
  background: transparent;
  overflow: hidden;
  user-select: none;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}
.dialog-enter-active {
  transition: all 0.3s ease-in-out;
}
.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
}
</style>