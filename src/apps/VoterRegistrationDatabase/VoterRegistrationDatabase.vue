<template>
  <div class="app-container">
    <AppHeader>
      <template slot="description">
        A collection of commonly used phone and email addresses sorted by category.
        Click on the `More` arrow icon to see more contact info including cell/alternate # as well as notes.
        This is a staff curated list, so please update any records you notice are incorrect/out
        of date or add new contacts that you notice are missing.
      </template>
    </AppHeader>
    <VoterSearch @search="search" />

    <DataTable
      v-if="searchInitiated"
      :columns="dataTable.columns"
      :loading="dataTable.loading"
      :data="dataTable.data"
      @edit="editRecord"
    >
      <template v-slot:row="rowProps">
        <td>{{rowProps.item.name}}</td>
        <td>{{rowProps.item.party}}</td>
        <td>{{rowProps.item.gender}}</td>

        <td>{{rowProps.item.dob}}</td>
        <td>
          {{rowProps.item.phone}}
          <span v-if="rowProps.item.ext">x{{rowProps.item.ext}}</span>
          <span v-if="!rowProps.item.phone && rowProps.item.altPhone">(c) {{rowProps.item.altPhone}}</span>
        </td>
        <td>
          <a :href="`mailto:${rowProps.item.email}`">{{rowProps.item.email}}</a>
        </td>
        <td @click="editRecord(rowProps.item.id)" class="icon-more"></td>
      </template>
    </DataTable>

    <Modal v-if="modal.show" :title="modal.title" @close="closeModal">
      <p>Modal Data Goes Here</p>
      <p>Debug:</p>
      <pre>{{modal.data}}</pre>
    </Modal>
  </div>
</template>

<script>
import AppHeader from "@/assets/components/AppHeader";
import Form from "@/assets/components/Form";
import VoterSearch from "./VoterSearch";
import DataTable from "@/assets/components/DataTable";
import Modal from "@/assets/components/Modal";
import { baseUrl } from "@/assets/libs/baseUrl";

export default {
  name: "VoterRegistrationDatabase",
  components: { AppHeader, VoterSearch, DataTable, Modal },
  data() {
    return {
      dataTable: {
        header: [
          { label: "Name", width: 25 },
          { label: "Party", width: 30 },
          { label: "Gender", width: 20 },
          { label: "Address", width: 25 },
          { label: "DOB", width: 25 },
          { lable: "More", width: 5 }
        ],
        data: null
      },
      modal: { show: false },
      searchInitiated: false
    };
  },
  methods: {
    search(values) {
      this.searchInitiated = true;
      let urlQuery = this.serialize(values);
      fetch(`${baseUrl}/voterdb/search?q=${urlQuery}`)
        .then(res => res.json())
        .then(data => {
          this.list.data = data;
        })
        .catch(err => {
          console.log("Error retrieving voterdb records");
        });
      console.log("search fired", urlQuery);
    },
    serialize(obj) {
      var str = [];
      for (var p in obj)
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      return str.join("&");
    }
  }
};
</script>