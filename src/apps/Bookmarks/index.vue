<template>
  <div class="app-container">
    <AppHeader
      :title="header.title"
      :new-button="header.newButton"
      :description="header.description"
      @search="searchRecords"
    />

    <ListGroup :header="list.header" :groupby="list.groupby" :data="list.data" @edit="editRecord"/>
    <!--<modal v-if="showModal" :record="recordModel" @close="closeModal"/>-->
  </div>
</template>

<script>
import AppHeader from "@/assets/components/AppHeader";
import ListGroup from "@/assets/components/ListGroup";
import { baseUrl } from "@/assets/libs/baseUrl";

export default {
  name: "Contacts",
  components: { AppHeader, ListGroup },
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
          { label: "URL", width: 50, key: "url"},
          { label: "Notes", width: 25, key: "notes" }
        ],
        groupby: "category",
        data: []
      },
      modal: { show: false }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
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
      this.modal.show = true;
    },
    saveRecord(id) {},
    deleteRecord(id) {},
    newRecord() {},
    closeModal() {
      this.modal.show = false;
    },
    searchRecords(query){

    }
  }
};
</script>