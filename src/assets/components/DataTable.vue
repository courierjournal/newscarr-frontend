<template>
  <div class="data-table-container">
    <ControlBar :newControl="newControl" :filterControl="filterControl" />
    <CircleLoader v-if="loading" />
    <section v-for="(categoryGroup,index) in categorizedDataTable" :key="index">
      <h4 v-if="groupby">{{categoryGroup.category}}</h4>
      <table>
        <thead>
          <tr>
            <slot name="head">
              <th
                v-for="(column,index) in parsedHeader"
                :key="index"
                :style="{width:column.width+'%'}"
              >{{column.label}}</th>
            </slot>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in categoryGroup.entries" :key="index">
            <slot name="row" :item="item">
              <td v-for="(column, index) in parsedHeader" :key="index">{{item[column.key]}}</td>
            </slot>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import CircleLoader from "@/assets/components/CircleLoader";
import ControlBar from "@/assets/components/ControlBar";

export default {
  name: "DataTable",
  components: { CircleLoader, ControlBar },
  props: {
    loading: { type: Boolean, default: false },
    header: Array,
    groupby: String,
    data: { type: Array, required: true },
    newControl: String,
    filterControl: String
  },
  data() {
    return {
      searchQuery: ""
    };
  },
  computed: {
    categorizedDataTable() {
      if (this.groupby) {
        return _(this.filteredDataTable)
          .groupBy(x => x[this.groupby])
          .map((value, key) => ({ category: key, entries: value }))
          .value();
      } else {
        return [{ category: "", entries: this.filteredDataTable }];
      }
    },
    filteredDataTable() {
      var search = this.searchQuery.toLowerCase().trim();
      if (!search) return this.data;
      return this.data.filter(o =>
        Object.keys(o).some(k => {
          return String(o[k])
            .toLowerCase()
            .includes(search.toLowerCase());
        })
      );
    },
    parsedHeader() {
      if (this.header) return this.header;
      return Object.keys(this.data[0]).map(n => {
        let lbl = n.replace(/_/g, " ").toLowerCase().trim();
        return {
          label: lbl.charAt(0).toUpperCase() + lbl.slice(1),
          key: n
        };
      });
    }
  }
};
</script>

<style lang="less" scoped>
.data-table-container {
  width: 100%;
  margin: 30px auto;
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

section:first-of-type {
  margin-bottom: 0;
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

.edit-icon {
  max-width: 20px;
  transition: transform 0.3s;
  transform: scale(1, 1);
}
</style>