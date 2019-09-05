<template>
  <div class="app-container">
    <AppHeader />

    <List
      :header="list.header"
      :loading="list.loading"
      :groupby="list.groupby"
      :data="list.data"
      @edit="editRecord"
    >
      <template v-slot:row="rowProps">
        <td>{{rowProps.item.name}}</td>
        <td>{{rowProps.item.contactPerson}}</td>
        <td>
          {{rowProps.item.phone}}
          <span v-if="rowProps.item.ext">(x{{rowProps.item.ext}})</span>
        </td>
        <td>
          <a :href="`mailto:${rowProps.item.email}`">{{rowProps.item.email}}</a>
        </td>
        <td @click="rowProps.editItem(rowProps.item.id)">…</td>
      </template>
    </List>

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
import { baseUrl } from "@/assets/libs/baseUrl";

export default {
  name: "Contacts",
  components: { AppHeader, List, Modal },
  data() {
    return {
      header: {
        newButton: "New Contact"
      },
      list: {
        loading: true,
        header: [
          { label: "Position", width: 20 },
          { label: "Contact Person", width: 30 },
          { label: "Phone", width: 20 },
          { label: "Email", width: 25 },
          { label: "More", width: 5 }
        ],
        groupby: "category",
        data: null
      },
      modal: {
        show: false,
        title: "",
        footer: ["delete", "save", "done"]
      }
    };
  },
  created() {
    this.getRecords();
  },
  methods: {
    getRecords() {
      this.list.loading = true;
      fetch(`${baseUrl}/contacts/get-list`)
        .then(res => res.json())
        .then(data => {
          this.list.data = data;
          this.list.loading = false;
        })
        .catch(err => {
          console.log("Error fetching contacts list");
        });
    },
    searchRecords(query) {
      console.log("Querying api for:", query);
    },
    newRecord() {
      this.modal.title = "New Record";
      this.modal.data = {};
      this.modal.show = true;
    },
    editRecord(id) {
      console.log("fired");
      this.openModal("Edit Contact Info");
      this.modal.data = this.list.data.filter(n => n.id === id)[0];
    },
    saveRecord(id) {
      console.log("Saving record:", this.modal.data.id);
      this.getRecords();
    },
    deleteRecord(id) {
      console.log("Deleting record:", this.modal.data.id);
    },
    openModal(title) {
      this.modal.title = title;
      this.modal.show = true;
    },
    closeModal() {
      this.modal.show = false;
    }
  }
};
</script>