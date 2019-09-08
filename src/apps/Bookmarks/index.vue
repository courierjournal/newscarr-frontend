<template>
  <div class="app-container">
    <AppHeader
      :title="header.title"
      :new-button="header.newButton"
      :description="header.description"
      @new="newRecord"
      @search="searchRecords"
    />

   
  </div>
</template>

<script>
import AppHeader from "@/assets/components/AppHeader";
import DataTable from "@/assets/components/DataTable";
import Modal from "@/assets/components/Modal";
import { baseUrl } from "@/assets/libs/baseUrl";

export default {
  name: "Contacts",
  components: { AppHeader, DataTable, Modal },
  data() {
    return {
      header: {
        title: "Bookmarks",
        newButton: "New Bookmark",
        description:
          "A collection of commonly used websites sorted by category. Click on a row to see more. This is a staff curated list, so please update any records you notice are incorrect/out of date or add new contacts that you notice are missing."
      },
      list: {
        header: [
          { label: "Name", width: 25, key: "name" },
          { label: "URL", width: 50, key: "url" },
          { label: "Notes", width: 25, key: "notes" }
        ],
        groupby: "category",
        data: []
      },
      modal: { show: false, title: "", data:null }
    };
  },
  created() {
    this.getDataTable();
  },
  methods: {
    getDataTable() {
      fetch(`${baseUrl}/bookmarks/get-list`)
        .then(res => res.json())
        .then(data => {
          this.list.data = data;
        })
        .catch(err => {
          console.log("Error fetching bookmarks list");
        });
    },
    editRecord(id) {
      console.log(id);
      this.modal.title = "Edit Record";
      this.modal.show = true;
      this.modal.data = this.list.data.filter(n=>n.id===id);
    },
    saveRecord(id) {},
    deleteRecord(id) {},
    newRecord() {
      this.modal.title = "New Record";
      this.modal.data = null;
      this.modal.show = true;
    },
    closeModal() {
      this.modal.show = false;
    },
    searchRecords(query) {}
  }
};
</script>