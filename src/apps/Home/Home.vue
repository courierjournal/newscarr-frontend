<template>
  <div class="home">
    <router-link
      class="home_app-container"
      v-for="(item, index) in routes"
      :key="index"
      :to="item.path"
    >
      <img class="home_app-icon" :src="`/img/${item.icon}`">
      <div class="home_app-name">{{item.name}}</div>
    </router-link>
  </div>
</template>

<script>
import apps from "@/apps/apps.json";

export default {
  name: "home",
  data() {
    return {
      routes: apps
    };
  }
};
</script>


<style>
.home_app-container {
  max-width: 100px;
  text-align: center;
  display: inline-block;
  margin: 15px 40px;
  cursor: pointer;
  vertical-align: top;
  transition: transform 0.2s;
  color: #222;
  border: none;
}

.home_app-container:hover,
.home_app-container:visited {
  color: #222;
}

.home_app-container:hover {
  transform: scale(1.1, 1.1);
}

.home_app-icon {
  max-width: 100%;
}
</style>