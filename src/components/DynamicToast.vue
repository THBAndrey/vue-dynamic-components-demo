<template>
  <div @click="$hide()" class="toast" :style="{ backgroundColor: color }">
    {{ text }}
    <div class="time-line" :class="cls"></div>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
      default: 3000,
    },
    text: {
      type: String,
      default: "Text",
    },
    color: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      timer: null,
      cls: "",
    };
  },
  created() {
    this.$nextTick(() => {
      this.$set(this, "cls", "time-line-0");
    });
    this.timer = setTimeout(() => {
      this.$hide();
    }, this.time);
  },
};
</script>

<style>
.toast {
  user-select: none;
  margin-top: 20px;
  position: relative;
  height: 50px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.473);
}

.time-line {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.624);
  bottom: 0;
  left: 0;
  transition: width 3s linear;
}

.time-line-0 {
  width: 0%;
}
</style>
