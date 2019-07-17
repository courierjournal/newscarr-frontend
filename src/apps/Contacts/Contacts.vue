<template>
  <div class="app-container">
    <AppHeader
      :title="header.title"
      :new-button="header.newButton"
      :description="header.description"
      @new="newRecord"
      @search="searchRecords"
    />

    <ListGroup :header="list.header" :groupby="list.groupby" :data="list.data" @edit="editRecord" />
    <Modal v-if="modal.show" :title="modal.title" @close="closeModal">
      <p>Modal Data Goes Here</p>
      <p>Debug:</p>
      <pre>{{modal.data}}</pre>
    </Modal>
  </div>
</template>

<script>
import AppHeader from "@/assets/components/AppHeader";
import ListGroup from "@/assets/components/ListGroup";
import Modal from "@/assets/components/Modal";
import { baseUrl } from "@/assets/libs/baseUrl";

export default {
  name: "Contacts",
  components: { AppHeader, ListGroup, Modal },
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
          { label: "Position", width: 25, key: "name" },
          { label: "Contact Person", width: 30, key: "contactPerson" },
          { label: "Phone", width: 20, key: "phone" },
          { label: "Email", width: 25, key: "email" }
        ],
        groupby: "category",
        data: null
      },
      modal: { show: false }
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
      this.modal.title = "Edit Record";
      this.modal.show = true;
      this.modal.data = this.list.data.filter(n => n.id === id);
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