<template>
  <form @submit.prevent="$emit('submit', modelData)">
    <slot name="default" :item="modelData"></slot>
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
        this.modelData = _.cloneDeep(this.formData);
        this.originalData = _.cloneDeep(this.formData);
      },
      deep: true
    }
  }
};
</script>