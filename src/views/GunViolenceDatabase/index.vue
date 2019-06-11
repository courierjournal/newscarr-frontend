<template>
  <div class="app-container">
    <AppHeaderSearch title="Gun Violence Database Admin" new-button="New Incident"/>
    <ListView :list="incidentList" @editRecord="editRecord"/>
    <modal v-if="showModal" :record="recordModel" @close="closeModal"/>
  </div>
</template>

<script>
import ListView from "./ListView";
import Modal from "./Modal";
import AppHeaderSearch from "@/components/AppHeaderSearch";
import { baseUrl } from "@/baseUrl.js";

export default {
  name: "GunViolenceDatabase",
  components: { ListView, AppHeaderSearch, Modal },
  data() {
    return {
      incidentList: [],
      recordModel: { incident: {}, victims: [], suspects: [] },
      showModal: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      fetch(`${baseUrl}/gun-violence-database/get-list`)
        .then(res => res.json())
        .then(data => {
          this.incidentList = data;
        })
        .catch(err => {});
    },
    getFullRecord(id) {
      fetch(`${baseUrl}/gun-violence-database/get-full-record/${id}`)
        .then(res => res.json())
        .then(data => {
          this.recordModel = data;
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
      this.recordModel = { incident: {}, victims: [], suspects: [] };
    }
  }
};
</script>