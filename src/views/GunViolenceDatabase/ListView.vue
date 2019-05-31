<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Incident Date</th>
          <th>Location</th>
          <th>Narrative</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index" @click="edit(index)">
          <td>{{formatDate(index)}}</td>
          <td>{{item.address}}</td>
          <td>{{formatNarrative(index)}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: { list: Array },
  computed: {
    
  },
  methods: {
    formatDate(id) {
      return this.list[id].date + " @ " + this.list[id].time;
    },
    formatNarrative(id) {
      if (this.list[id].narrative.length > 50) {
        return this.list[id].narrative.slice(0, 50) + "...";
      }
      return this.list[id].narrative;
    },
    editNarrative(index) {
      console.log(index);
    },
    newNarrative(){

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