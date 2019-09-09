<template>
  <div class="control-bar">
    <button v-if="newControl" @click="$emit('new')">+</button>
    <input v-if="filterControl" type="text" @keyup="$emit('filter', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: "ControlBar",
  props: { newControl: String, filterControl: String }
};
</script>