<template>
  <div class="app-container">
    <AppHeader>
      <template slot="description">
        A collection of commonly used websites sorted by category.
        Click on the `More` arrow icon to see more info including username and password.
        This is a staff curated list, so please update add any websites you feel are important
        that may be missing.
      </template>
    </AppHeader>

    <DataTable
      :columns="dataTable.columns"
      :loading="dataTable.loading"
      :groupby="dataTable.groupby"
      :data="dataTable.data"
      :newControl="'Create new contact'"
      :searchable="true"
      @edit="editRecord"
      @new="newRecord"
    >
      <template v-slot:row="rowProps">
        <td>{{rowProps.item.name}}</td>
        <td>
          <a target="_blank" :href="`${rowProps.item.url}`">{{rowProps.item.url}}</a>
        </td>
        <td>{{rowProps.item.notes}}</td>

        <td @click="editRecord(rowProps.item.id)" class="icon-more"></td>
      </template>
    </DataTable>

    <Modal :visible="modal.show" :title="modal.title" @close="closeModal">
      <Form :data="form.data" @dirty="setFormStatus" @submit="saveRecord">
        <template v-slot:default="formProps">
          <input type="hidden" v-model="formProps.item.id" />
          <div class="row">
            <div class="col-md-6 form-group">
              <label>Category</label>
              <input
                type="text"
                list="form-categories-list"
                class="form-control"
                v-model="formProps.item.category"
                maxlength="32"
              />
              <datalist id="form-categories-list">
                <option v-for="(item, index) in form.categories" :key="index" :value="item"></option>
              </datalist>
            </div>
            <div class="col-md-6 form-group">
              <label>Name</label>
              <input type="text" class="form-control" v-model="formProps.item.name" maxlength="64" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 form-group">
              <label>URL</label>
              <input class="form-control" type="text" maxlength="512" v-model="formProps.item.url" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 form-group">
              <label>Notes</label>
              <textarea
                class="form-control"
                v-model="formProps.item.notes"
                maxlength="1024"
                rows="4"
              ></textarea>
            </div>
          </div>

          <div class="delete-close-save">
            <div>
              <button
                v-show="form.data.id !== null"
                type="button"
                class="btn danger"
                @click="deleteRecord(form.data.id)"
              >
                <trash-2-icon size="1.5x" />
              </button>
            </div>
            <div>
              <button class="btn outline" type="button" @click="closeModal">Cancel</button>
              <button class="btn primary" type="submit" :disabled="!form.dirty">Save</button>
            </div>
          </div>
        </template>
      </Form>
    </Modal>
  </div>
</template>

<script>
import AppHeader from "@/assets/components/AppHeader";
import DataTable from "@/assets/components/DataTable";
import Modal from "@/assets/components/Modal";
import Form from "@/assets/components/Form";
import api from "@/assets/libs/api";
import { Trash2Icon } from "vue-feather-icons";

export default {
  name: "Contacts",
  components: { AppHeader, DataTable, Modal, Form, Trash2Icon },
  data() {
    return {
      dataTable: {
        loading: true,
        columns: [
          { label: "Name", width: 20 },
          { label: "URL", width: 45 },
          { label: "Notes", width: 30 },
          { label: "More", width: 5 }
        ],
        groupby: "category",
        data: []
      },
      modal: {
        show: false,
        title: ""
      },
      form: {
        categories: [],
        data: {},
        dirty: false
      }
    };
  },
  created() {
    this.getRecords();
  },
  methods: {
    getRecords() {
      this.dataTable.loading = true;
      api
        .get("bookmarks/get-list")
        .then(data => {
          this.dataTable.data = data;
          this.form.categories = [
            ...new Set(this.dataTable.data.map(item => item.category))
          ];
          this.dataTable.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.$notification.open({
            type: "danger",
            message: "Could not retrieve bookmarks from database"
          });
        });
    },
    editRecord(id) {
      let record = this.dataTable.data.filter(n => n.id === id)[0];
      this.openModal("Edit Bookmark Info");
      this.form.data = record;
    },
    newRecord() {
      this.openModal("New Bookmark");
      this.form.data = {
        id: null,
        category: "",
        name: "",
        url: "",
        notes: ""
      };
    },
    saveRecord(record) {
      api
        .post("bookmarks/upsert-record", record)
        .then(res => {
          this.closeModal();
          this.$notification.open({
            type: "success",
            message: "Bookmark successfully saved"
          });
          this.getRecords();
        })
        .catch(err => {
          console.log(err);
          this.$notification.open({
            type: "danger",
            message: "Could not save bookmark"
          });
        });
    },
    deleteRecord(id) {
      api
        .del("bookmarks/delete-record", { id })
        .then(res => {
          this.closeModal();
          this.$notification.open({
            type: "success",
            message: "Bookmark successfully deleted"
          });
          this.getRecords();
        })
        .catch(err => {
          console.log(err);
          this.$notification.open({
            type: "danger",
            message: "Could not delete Bookmark"
          });
        });
    },
    setFormStatus(val) {
      this.form.dirty = val;
    },
    openModal(title) {
      this.modal.title = title;
      this.modal.show = true;
    },
    closeModal() {
      this.modal.show = false;
      this.form.data = {};
    }
  }
};
</script>

<style scoped>
.delete-close-save {
  display: flex;
  width: 100%;
}

.delete-close-save > div:first-child {
  flex: 1;
}
.delete-close-save > div:last-child > button {
  margin: 0 4px;
}
</style>