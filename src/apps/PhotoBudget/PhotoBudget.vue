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
      @delete="deleteRecord"
    >
      <template>
        <input type="hidden" v-model="modal.data.id" />
        <div class="row">
          <div class="col-md-4 form-group">
            <label>Category</label>
            <input type="text" class="form-control" v-model="modal.data.category" />
          </div>
          <div class="col-md-4 form-group">
            <label>Contact Name</label>
            <input type="text" class="form-control" v-model="modal.data.contactPerson" />
          </div>
          <div class="col-md-4 form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="modal.data.name" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 form-group">
            <label>Primary Phone #</label>
            <input
              class="form-control"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              v-model="modal.data.phone"
            />
          </div>
          <div class="col-md-2 form-group">
            <label>Extension</label>
            <input type="text" class="form-control" v-model="modal.data.ext" />
          </div>
          <div class="col-md-3 form-group">
            <label>Secondary or Cell #</label>
            <input
              class="form-control"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              v-model="modal.data.altPhone"
            />
          </div>
          <div class="col-md-4 form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="modal.data.email" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 form-group">
            <label>Notes</label>
            <textarea class="form-control" v-model="modal.data.notes"></textarea>
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
        title: "",
        footer: ["delete", "save", "done"]
      }
    };
  },
  methods: {
    newRecord() {},
    searchRecords() {}
  }
};
</script>

<style>
.app-body {
  max-width: 960px;
  margin: 0 auto;
}
</style>