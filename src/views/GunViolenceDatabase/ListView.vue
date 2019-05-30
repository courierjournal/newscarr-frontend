<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Incident Date</th>
          <th>Address</th>
          <th>Victim Count</th>
          <th>Suspect Count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index" @click="edit(index)">
          <td>{{item.date}}</td>
          <td>{{item.address}}</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: { list: Array },
  methods: {
    edit(index) {
      console.log(index);
    }
  }
};
</script>

<style scoped>
.table-container {
  max-width: 960px;
  margin: 0 auto;
  margin-top: 50px;
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