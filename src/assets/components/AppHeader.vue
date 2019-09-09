<template>
  <header>
    <h2>
      <slot name="title">{{$route.meta.title}}</slot>
    </h2>
    <div class="description">
      <slot name="description">{{$route.meta.description}}</slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="less" scoped>
header {
  margin: 20px 0 30px 0;
}

h2 {
  font-weight: 600;
  color: #555;
  font-family: Lato, sans-serif;
}

.description {
  margin: 0 auto;
  font-family: Avenir;
}
</style>
