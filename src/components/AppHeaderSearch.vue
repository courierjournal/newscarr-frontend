<template>
  <div class="header">
    <h2 class="app-title">{{title}}</h2>
    <div>
      <button class="btn">{{newButton}}</button>
      <input class="input-search" type="text" placeholder="Search">
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: { title: String, "new-button": String }
};
</script>

<style scoped>
.header {
  margin: 20px 0;
  display: flex;
}
.app-title {
  margin: 0;
  flex: 1;
}

.btn {
  margin-right: 20px;
}
</style>