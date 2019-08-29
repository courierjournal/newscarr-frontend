<template>
  <header>
    <h2>
      <slot name="title">{{$route.meta.title}}</slot>
    </h2>
    <p>
      <slot name="description">{{$route.meta.description}}</slot>
    </p>
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

p {
  margin: 0 auto;
  font-family: Avenir;
}
</style>