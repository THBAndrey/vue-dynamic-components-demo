<template>
  <div class="wrapper" @click.self="onClick">
    <div :style="{ backgroundColor: color }" class="dialog">
      <div>{{ text }}</div>
      <div v-if="showButtons">
        <button @click="$emit('selected', true)">Yes</button>
        <button @click="$emit('selected', false)">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Dynamic component",
    },
    color: {
      type: String,
      default: "white",
    },
    showButtons: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$hide();
    },
  },
};
</script>

<style scoped>
.wrapper {
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.dialog {
  width: 300px;
  height: 300px;
  border-radius: 5px;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
