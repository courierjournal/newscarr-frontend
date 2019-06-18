<template>
  <div class="table-container">
    <CircleLoader v-if="data.length ===0"/>
    <section v-for="(categoryGroup,index) in categorizedList" :key="index">
      <h4>{{categoryGroup.category}}</h4>
      <table>
        <colgroup>
          <col v-for="(column,index) in header" :key="index" :style="{width:column.width+'%'}">
        </colgroup>
        <thead>
          <tr>
            <th v-for="(column,index) in header" :key="index">{{column.label}}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in categoryGroup.entries"
            :key="index"
            @click="editRecord(item.id)"
          >
            <td v-for="(column, index) in header" :key="index">{{item[column.foo]}}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import _ from "lodash";
import CircleLoader from "@/assets/components/CircleLoader";

export default {
  name: "ListGroup",
  components: { CircleLoader },
  props: { header: Array, groupby: String, data: Array },
  computed: {
    categorizedList() {
      return _(this.data)
        .groupBy(x => x[this.groupby])
        .map((value, key) => ({ category: key, entries: value }))
        .value();
    }
  },
  methods: {
    editRecord(index) {
      this.$emit("edit", index);
    },
    formatEmail(email) {
      return `<a href="mailto:${email}">${email}</a>`;
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
  table-layout: fixed;
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

td:nth-child(4) {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

section {
  margin-bottom: 100px;
}

h4 {
  font-size: 1.5em;
  text-transform: uppercase;
  color: #2196f3;
}
</style>