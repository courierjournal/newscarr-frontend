<template>
  <div class="table-container">
    <CircleLoader v-if="data === null" />
    <section v-for="(categoryGroup,index) in categorizedList" :key="index">
      <h4 v-if="groupby">{{categoryGroup.category}}</h4>
      <table>
        <colgroup>
          <col v-for="(column,index) in header" :key="index" :style="{width:column.width+'%'}" />
          <col v-if="editable" style="width:5%" />
        </colgroup>
        <thead>
          <tr>
            <th v-for="(column,index) in header" :key="index">{{column.label}}</th>
            <th v-if="editable">More</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in categoryGroup.entries" :key="index">
            <td
              v-for="(column, index) in header"
              :key="index"
              v-html="formatHyperlink(item[column.key])"
            ></td>
            <td v-if="editable" class="edit-cell" @click="editRecord(item.id)"><img class="edit-icon" src="img/edit.svg"></td>
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
  name: "List",
  components: { CircleLoader },
  props: { header: Array, groupby: String, data: Array, editable: Boolean },
  computed: {
    categorizedList() {
      if (this.groupby) {
        return _(this.data)
          .groupBy(x => x[this.groupby])
          .map((value, key) => ({ category: key, entries: value }))
          .value();
      } else {
        return { category: "", entries: this.data };
      }
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

.edit-cell{
  text-align:center;
  cursor:pointer;
}

.edit-cell:hover>.edit-icon{
  transform:scale(1.1,1.1);
}

.edit-icon{
  max-width:20px;
  transition: transform .3s;
  transform:scale(1,1);
}
</style>