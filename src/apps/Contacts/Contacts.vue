<template>
  <div class="app-container">
    <AppHeader
      :title="header.title"
      :new-button="header.newButton"
      :description="header.description"
      @new="newRecord"
      @search="searchRecords"
    />

    <List
      :header="list.header"
      :groupby="list.groupby"
      :data="list.data"
      :editable="list.editable"
      @edit="editRecord"
    />

    <Modal v-if="modal.show" :title="modal.title" :footer="modal.footer" @close="closeModal">
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
            placeholder="502-123-4567"
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
            placeholder="502-123-4567"
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
    </Modal>
  </div>
</template>

<script>
import AppHeader from "@/assets/components/AppHeader";
import List from "@/assets/components/List";
import Modal from "@/assets/components/Modal";
import { baseUrl } from "@/assets/libs/baseUrl";

export default {
  name: "Contacts",
  components: { AppHeader, List, Modal },
  data() {
    return {
      header: {
        title: "Contacts",
        newButton: "New Contact",
        description:
          "A collection of commonly used phone and email addresses sorted by category. Click on a row to see more contact info including cell/alternate # as well as notes. This is a staff curated list, so please update any records you notice are incorrect/out of date or add new contacts that you notice are missing."
      },
      list: {
        header: [
          { label: "Position", width: 20, key: "name" },
          { label: "Contact Person", width: 30, key: "contactPerson" },
          { label: "Phone", width: 20, key: "phone" },
          { label: "Email", width: 25, key: "email" }
        ],
        groupby: "category",
        editable: true,
        data: null
      },
      modal: {
        show: false,
        title: "Edit Contact Info",
        footer: ["delete", "save", "done"]
      }
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
          this.list.data = data;
        })
        .catch(err => {
          console.log("Error fetching contacts list");
        });
    },
    editRecord(id) {
      console.log(id);
      this.modal.show = true;
      this.modal.data = this.list.data.filter(n => n.id === id)[0];
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