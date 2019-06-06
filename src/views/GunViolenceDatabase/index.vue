<template>
  <div class="app-container">
    <AppHeaderSearch title="Gun Violence Database Admin" new-button="New Incident +"/>
    <ListView :list="incidentList" @editRecord="editRecord"/>
    <modal v-if="showModal" :record="recordModel" @close="showModal = false"/>
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
      recordModel: {},
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
    upsertVictimData(id) {
      fetch("/gun-violence-database/upsert-victim", {
        method: "POST",
        body: null
      }).catch(err => {});
    },
    upsertSuspectData(id) {
      fetch("/gun-violence-database/upsert-suspect", {
        method: "POST",
        body: null
      }).catch(err => {});
    },
    upsertIncidentData(id) {
      fetch("/gun-violence-database/upsert-incident", {
        method: "POST",
        body: null
      }).catch(err => {});
    },
    deleteRecord(id, table) {
      fetch("/gun-violence-database/delete-record", {
        method: "DELETE",
        body: null
      }).catch(err => {});
    },
    saveImage() {},
    editRecord(id) {
      this.getFullRecord(id);
      this.showModal = true;
    }
  }
};
</script>