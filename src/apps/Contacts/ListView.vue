<template>
  <div class="table-container">
    <section v-for="(categoryGroup,index) in categorizedList" :key="index">
      <h4>{{categoryGroup.category}}</h4>
      <table>
        <colgroup>
          <col style="width:25%">
          <col style="width:30%">
          <col style="width:20%">
          <col style="width:25%">
        </colgroup>
        <thead>
          <tr>
            <th>Position</th>
            <th>Contact Person</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in categoryGroup.entries"
            :key="index"
            @click="editRecord(item.id)"
          >
            <td>{{item.name}}</td>
            <td>{{item.contactPerson}}</td>
            <td>{{formatPhone(item.phone, item.ext)}}</td>
            <td v-html="formatEmail(item.email)"></td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "ListView",
  props: { list: Array },
  computed: {
    categorizedList() {
      return _(this.list)
        .groupBy(x => x.category)
        .map((value, key) => ({ category: key, entries: value }))
        .value();
    }
  },
  methods: {
    editRecord(index) {
      this.$emit("editRecord", index);
    },
    formatPhone(phone, ext){
        if(ext){
            return `${phone} (x${ext})`
        }
        else{
            return phone;
        }
    },
    formatEmail(email){
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