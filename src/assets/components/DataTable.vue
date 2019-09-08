<template>
  <div class="table-container">
    <CircleLoader v-if="loading" />
    <div class="control-bar">
      <button @click="$emit('new')">+</button>
      <input type="text" @keyup="$emit('search', searchQuery)" v-model="searchQuery" />
    </div>
    <section v-for="(categoryGroup,index) in categorizedDataTable" :key="index">
      <h4 v-if="groupby">{{categoryGroup.category}}</h4>
      <table>
        <thead>
          <tr>
            <slot name="head">
              <th
                v-for="(column,index) in header"
                :key="index"
                :style="{width:column.width+'%'}"
              >{{column.label}}</th>
            </slot>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in categoryGroup.entries" :key="index">
            <slot name="row" :item="item">
              <td v-for="(column, index) in header" :key="index">{{item[column.key]}}</td>
            </slot>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import CircleLoader from "@/assets/components/CircleLoader";

export default {
  name: "DataTable",
  components: { CircleLoader },
  props: {
    loading: Boolean,
    header: Array,
    groupby: String,
    data: Array
  },
  data() {
    return {
      searchQuery: ""
    };
  },
  computed: {
    categorizedDataTable() {
      if (this.groupby) {
        return _(this.data)
          .groupBy(x => x[this.groupby])
          .map((value, key) => ({ category: key, entries: value }))
          .value();
      } else {
        return [{ category: "", entries: this.data }];
      }
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.table-container {
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
  background-color: #fafafa;
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
}

td {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

td.overflow {
  white-space: initial;
}

section {
  margin-bottom: 70px;
}

h4 {
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: Lato;
  font-weight: 300;
  border-left: 6px solid #2196f3;
  padding-left: 8px;
  color: #111;
  margin-left: -10px;
}

.edit-cell {
  text-align: center;
  cursor: pointer;
}

.edit-cell:hover > .edit-icon {
  transform: scale(1.1, 1.1);
}

.edit-icon {
  max-width: 20px;
  transition: transform 0.3s;
  transform: scale(1, 1);
}
</style>