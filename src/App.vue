<template>
  <div id="app">
    <div class="button-group">
      <button @click="pushToast">Push toast</button>
      <button @click="pushQueuedToast">Push 5 queued toast</button>
      <button @click="pushTypedToast">Push typed toast</button>
      <button @click="pushToasts">Push 5 toasts</button>
      <button @click="pushModal">Push modal</button>
      <button @click="pushModalWithEvents">Push modal with events</button>
      <button @click="pushQueuedModals">Push 5 queued modals</button>
      <button @click="pushQueuedModalsWidthDifferentAnimations">
        Push 5 queued modals with different animations
      </button>
    </div>
    <dynamic-components-wrapper />
    <dynamic-components-wrapper name="modals" />
    <dynamic-components-wrapper
      name="toasts"
      style="position: fixed; right: 20px; top: 20px"
    />
  </div>
</template>

<script>
import DynamicModal from "./components/DynamicModal.vue";
import DynamicToast from "./components/DynamicToast.vue";
export default {
  name: "App",
  data() {
    return {
      modals: [],
    };
  },
  methods: {
    pushToast() {
      this.$dc.push(
        DynamicToast,
        {
          props: { text: "Toast" },
          animation: "fade",
        },
        "toasts"
      );
    },
    pushQueuedToast() {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          this.$dc.push(
            DynamicToast,
            {
              animation: "fade",
              queue: "toasts",
            },
            "toasts"
          );
        }, i * 500);
      }
    },
    pushTypedToast() {
      this.$dc.push(
        DynamicToast,
        {
          props: { text: "Toast" },
          animation: "fade",
          type: "toast",
        },
        "toasts"
      );
    },
    pushToasts() {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          this.$dc.push(
            DynamicToast,
            {
              animation: "fade",
            },
            "toasts"
          );
        }, i * 500);
      }
    },
    pushModal() {
      this.$dc.push(
        DynamicModal,
        {
          animation: "slide-fade",
        },
        "modals"
      );
    },
    pushModalWithEvents() {
      this.$dc.push(
        DynamicModal,
        {
          props: { showButtons: true },
          events: {
            selected: (value) => {
              this.$dc.push(
                DynamicToast,
                { props: { text: value.toString() }, animation: "fade" },
                "toasts"
              );
            },
          },
          animation: "slide-fade",
        },
        "modals"
      );
    },
    pushQueuedModals() {
      for (let i = 0; i < 5; i++) {
        this.$dc.push(
          DynamicModal,
          {
            props: { text: "Dynamic modal " + (i + 1) },
            animation: "slide-fade",
            queue: "modals",
          },
          "modals"
        );
      }
    },
    pushQueuedModalsWidthDifferentAnimations() {
      let animations = [
        "fade",
        "slide-fade",
        "slide-top-fade",
        "slide-right-fade",
        "slide-bottom-fade",
      ];
      for (let i = 0; i < 5; i++) {
        this.$dc.push(
          DynamicModal,
          {
            props: { text: "Dynamic modal " + (i + 1) },
            animation: animations[i],
            queue: "modals",
          },
          "modals"
        );
      }
    },
  },
};
</script>
<style scoped>
.button-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.button-group button {
  display: block;
}
</style>