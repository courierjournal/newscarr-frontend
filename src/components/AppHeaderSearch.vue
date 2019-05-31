<template>
  <div class="header">
    <h2 class="app-title">Gun Violence Database Admin</h2>
    <div>
      <button class="btn">New Incident +</button>
      <input class="input-search" type="text" placeholder="Search">
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
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

.btn{
  margin-right:20px;
}

</style>