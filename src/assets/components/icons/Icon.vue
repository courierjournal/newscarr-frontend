<template>
  <img :src="getType" />
</template>

<script>
export default {
  name: "Icon",
  props: { type: String },
  computed: {
    getType() {
      return `../icons/${this.type}.svg`;
    }
  }
};
</script>