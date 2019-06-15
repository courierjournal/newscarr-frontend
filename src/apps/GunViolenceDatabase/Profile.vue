<template>
  <div class="victim-container">
    <div class="form-row">
      <div class="form-group col-md-2">
        <button>></button>
      </div>
      <div class="form-group col-md-4">
        <label>Name</label>
        <input class="form-control" type="text" v-model="profileData.name">
      </div>
      <div class="form-group col-md-3">
        <label>Sex</label>
        <select class="form-control" v-model="profileData.sex">
          <option value>Unknown</option>
          <option value="m">Male</option>
          <option value="f">Female</option>
        </select>
      </div>
      <div class="form-group col-md-3">
        <label>Race</label>
        <select class="form-control" v-model="profileData.race">
          <option value>Unknown</option>
          <option value="w">White</option>
          <option value="b">Black</option>
          <option value="h">Hispanic</option>
          <option value="a">Asian</option>
          <option value="o">Other</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: { profileData: Object }
};
</script>

<style>
</style>