<template>
  <form @submit.prevent="$emit('submit', modelData)">
    <slot name="default" :item="modelData"></slot>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: { data: Object },
  data() {
    return {
      originalData: {},
      modelData: {}
    };
  },
  watch: {
    modelData: {
      handler() {
        if (_.isEqual(this.originalData, this.modelData)) {
          this.$emit("dirty", false);
        } else {
          this.$emit("dirty", true);
        }
      },
      deep: true
    },
    data: {
      handler() {
        this.modelData = _.cloneDeep(this.data);
        this.originalData = _.cloneDeep(this.data);
      },
      deep: true
    }
  }
};
</script>