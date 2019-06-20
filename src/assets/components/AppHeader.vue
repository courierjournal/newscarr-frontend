<template>
  <div class="header">
    <div class="header-bar">
      <h2 class="app-title">{{title}}</h2>
      <div>
        <button class="btn" @click="$emit('new')">{{newButton}}</button>
        <input
          class="input-search"
          type="text"
          :value="searchText"
          @input="update"
          placeholder="Search..."
        >
      </div>
    </div>
    <p v-if="description" class="description">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: { title: String, "new-button": String, description: String },
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    update() {}
  }
};
</script>

<style scoped>
.header-bar {
  margin: 20px 0;
  display: flex;
}
.app-title {
  margin: 0;
  flex: 1;
  font-weight: 300;
  color: #555;
  font-family: Lato, sans-serif;
}

.description {
  max-width: 960px;
  margin: 0 auto;
  font-family: Avenir;
}

.btn {
  margin-right: 20px;
}
</style>