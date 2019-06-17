<template>
  <div class="app-container">
    <AppHeaderSearch
      title="Contacts"
      new-button="New Contact"
      description="Commonly used contacts"
    />
    <ListView :list="contactList" @editRecord="editRecord"/>
    <modal v-if="showModal" :record="recordModel" @close="closeModal"/>
  </div>
</template>

<script>
import ListView from "./ListView";
//import Modal from "./Modal";
import AppHeaderSearch from "@/global-components/AppHeaderSearch";
import { baseUrl } from "@/baseUrl.js";

export default {
  name: "Contacts",
  components: { ListView, AppHeaderSearch },
  data() {
    return {
      header: {
        title: "Contacts",
        newButton: "New Contact",
        description: "This app contains a categorized list of commonly used contacts."
      },
      contactList: [],
      showModal: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      fetch(`${baseUrl}/contacts/get-list`)
        .then(res => res.json())
        .then(data => {
          this.contactList = data;
        })
        .catch(err => {});
    },
    saveRecord() {},

    deleteRecord(id, table) {
      fetch("/gun-violence-database/delete-record", {
        method: "DELETE",
        body: null
      }).catch(err => {});
    },
    newRecord() {},
    editRecord(id) {
      this.getFullRecord(id);
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>