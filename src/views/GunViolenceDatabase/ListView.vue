<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Incident Date</th>
          <th>Location</th>
          <th>Victims</th>
          <th>Narrative</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index" @click="editIncident(item.id)">
          <td>{{item.date}}</td>
          <td>{{item.address}}</td>
          <td>{{item.victimCount}}</td>
          <td>{{item.narrative}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: { list: Array },
  computed: {},
  methods: {
    editIncident(index) {
      this.$emit('editRecord', index);
    }
  }
};
</script>

<style scoped>
.table-container {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  font-family: Avenir;
  font-size: 0.9em;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

thead {
  color: rgba(0, 0, 0, 0.6);
}

tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

tbody > tr:hover {
  background-color: #eee;
}

td,
th {
  padding: 15px 5px;
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  border-radius: 2px;
}
</style>