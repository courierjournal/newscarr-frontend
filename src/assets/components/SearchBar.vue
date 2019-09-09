<template>
  <div class="search-bar">
    <button v-if="newControl" @click="$emit('new')" class="btn" id="new-button">+</button>
    <input
      v-if="searchable"
      type="text"
      @keyup="$emit('filter', $event.target.value)"
      placeholder="Search..."
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: { newControl: String, searchable: Boolean }
};
</script>

<style scoped>
.search-bar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

input {
  max-width: 200px;
}

#new-button {
  margin-right: 15px;
  font-weight:bold;
  font-size:16px;
}
</style>