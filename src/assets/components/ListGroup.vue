<template>
  <div class="table-container">
    <CircleLoader v-if="data === null"/>
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
            <td
              v-for="(column, index) in header"
              :key="index"
              v-html="formatHyperlink(item[column.key])"
            ></td>
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
    formatHyperlink(val) {
      if (typeof val === "string") {
        if (val.substr(0, 4) === "http") {
          return `<a href="${val}" target="_blank">${val}</a>`;
        }
        if (val.indexOf("@") > 0 && val.indexOf(" ") === -1) {
          return `<a href="mailto:${val}">${val}</a>`;
        }
      }
      return val;
    },
    editRecord(index) {
      this.$emit("edit", index);
    }
  }
};
</script>

<style scoped>
.table-container {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
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

td {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

section {
  margin-bottom: 70px;
}

h4 {
  font-size: 1.5em;
  text-transform: uppercase;
  color: #2196f3;
}
</style>