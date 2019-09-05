<template>
  <input type="checkbox" class="switch" />
</template>

<script>
export default {
  name: "Switch",
  props: { toggled: Boolean },
  data() {
    return {
      toggleState: false
    };
  },
  methods: {
    toggleSwitch() {
      this.toggleState = !this.toggleState;
      this.$emit(this.toggleState);
    }
  }
};
</script>

<style lang="less" scoped>
.switch{
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 22px;
    min-width: 44px;
    line-height: 20px;
    vertical-align: middle;
    border-radius: 100px;
    border: 1px solid transparent;
    background-color: rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: all 0.36s;
    user-select: none;
}

.switch-checked{
    background-color: blue;
}

</style>