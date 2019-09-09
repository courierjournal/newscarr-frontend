<template>
  <div class="search-bar">
    <button v-if="newControl" @click="$emit('new')">+</button>
    <input v-if="filterControl" type="text" @keyup="$emit('filter', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: { newControl: String, filterControl: String }
};
</script>

<style scoped>
.search-bar{
  display:flex;
  flex-direction:row;
  justify-content: flex-end;
}

input{
  max-width:150px;
}
</style>