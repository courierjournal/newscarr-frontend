<template>
  <div class="app-container">
    <AppHeader :new-button="'New Request'" @new="newRecord" @search="searchRecords" />
    <div class="app-body">
      <Calendar />
    </div>

    <Modal
      v-if="modal.show"
      :title="modal.title"
      :footer="modal.footer"
      @close="closeModal"
      @save="saveRecord"
    >
      <template>
        <input type="hidden" v-model="modal.data.id" />
        <div class="row">
          <div class="col-md-8 form-group">
            <label>Story Title</label>
            <input type="text" class="form-control" v-model="modal.data.slug" />
          </div>
          <div class="col-md-4 form-group">
            <label>Request Date</label>
            <input type="datetime-local" class="form-control" v-model="modal.data.dateRequested" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 form-group">
            <label>Reporter Name</label>
            <input class="form-control" type="text" v-model="modal.data.reporterName" />
          </div>
          <div class="col-md-4 form-group">
            <label>Reporter Cell</label>
            <input
              class="form-control"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              v-model="modal.data.reporterCell"
            />
          </div>
          <div class="col-md-4 form-group">
            <label>Reporter Email</label>
            <input
              class="form-control"
              type="email"
              v-model="modal.data.reporterEmail"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 form-group">
            <label>Contact Name</label>
            <input class="form-control" type="text" v-model="modal.data.contactName" />
          </div>
          <div class="col-md-4 form-group">
            <label>Contact Cell</label>
            <input
              class="form-control"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              v-model="modal.data.contactCell"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 form-group">
            <label>Location</label>
            <textarea class="form-control" v-model="modal.data.locationNotes"></textarea>
          </div>
           <div class="col-md-6 form-group">
            <label>Address</label>
            <textarea class="form-control" v-model="modal.data.address"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 form-group">
            <label>Notes</label>
            <textarea class="form-control" v-model="modal.data.notes" rows="4"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 form-group">
            <label>Presto ID</label>
            <input class="form-control" type="text" v-model="modal.data.prestoId" />
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import AppHeader from "@/assets/components/AppHeader";
import List from "@/assets/components/List";
import Modal from "@/assets/components/Modal";
import Calendar from "@/assets/components/Calendar";
import { baseUrl } from "@/assets/libs/baseUrl";

export default {
  name: "PhotoBudget",
  components: { AppHeader, List, Modal, Calendar },
  data() {
    return {
      modal: {
        show: false,
        data: {},
        title: "",
        footer: ["save", "done"]
      }
    };
  },
  methods: {
    newRecord() {
      this.modal.title = "New Photo Request";
      this.modal.show = true;
    },
    searchRecords() {},
    closeModal() {
      this.modal.show = false;
    },
    saveRecord() {}
  }
};
</script>

<style>
.app-body {
  max-width: 960px;
  margin: 0 auto;
}
</style>