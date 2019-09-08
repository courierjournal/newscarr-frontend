<template>
  <form @submit.prevent="$emit('submit', formData)">
    <slot name="default"></slot>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: { formData: Object },
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
    formData: {
      handler() {
        this.modelData = _.cloneDeep(formData);
        this.originalData = _.cloneDeep(formData);
      },
      deep: true
    }
  }
};
</script>