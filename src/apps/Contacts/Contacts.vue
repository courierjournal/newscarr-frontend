<template>
  <div class="app-container">
    <AppHeader>
      <template slot="description">
        <div>
          A collection of commonly used phone and email addresses sorted by category.
          Click on the `More` arrow icon to see more contact info including cell/alternate # as well as notes.
          This is a staff curated list, so please update any records you notice are incorrect/out
          of date or add new contacts that you notice are missing.
        </div>
      </template>
    </AppHeader>

    <DataTable
      :header="dataTable.header"
      :loading="dataTable.loading"
      :groupby="dataTable.groupby"
      :data="dataTable.data"
      :newControl="'Create new contact'"
      :filterControl="'Search'"
      @edit="editRecord"
      @new="newRecord"
    >
      <template v-slot:row="rowProps">
        <td>{{rowProps.item.name}}</td>
        <td>{{rowProps.item.contactPerson}}</td>
        <td>
          {{rowProps.item.phone}}
          <span v-if="rowProps.item.ext">x{{rowProps.item.ext}}</span>
          <span v-if="!rowProps.item.phone && rowProps.item.altPhone">(c) {{rowProps.item.altPhone}}</span>
        </td>
        <td>
          <a :href="`mailto:${rowProps.item.email}`">{{rowProps.item.email}}</a>
        </td>
        <td @click="editRecord(rowProps.item.id)" class="icon-more"></td>
      </template>
    </DataTable>

    <Modal :visible="modal.show" :title="modal.title" :size="'large'" @close="closeModal">
      <Form :formData="form.data" @dirty="setFormStatus" @submit="saveRecord">
        <template v-slot:default="formProps">
          <input type="hidden" v-model="formProps.item.id" />
          <div class="row">
            <div class="col-md-4 form-group">
              <label>Category</label>
              <input
                type="text"
                class="form-control"
                v-model="formProps.item.category"
                maxlength="64"
              />
            </div>
            <div class="col-md-4 form-group">
              <label>Contact Name</label>
              <input
                type="text"
                class="form-control"
                v-model="formProps.item.contactPerson"
                maxlength="128"
              />
            </div>
            <div class="col-md-4 form-group">
              <label>Position</label>
              <input type="text" class="form-control" v-model="formProps.item.name" maxlength="128" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 form-group">
              <label>Primary Phone #</label>
              <input
                class="form-control"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                title="Must be in format: ###-###-####"
                maxlength="12"
                v-model="formProps.item.phone"
              />
            </div>
            <div class="col-md-2 form-group">
              <label>Extension</label>
              <input type="text" class="form-control" v-model="formProps.item.ext" maxlength="8" />
            </div>
            <div class="col-md-3 form-group">
              <label>Secondary or Cell #</label>
              <input
                class="form-control"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                title="Must be in format: ###-###-####"
                maxlength="12"
                v-model="formProps.item.altPhone"
              />
            </div>
            <div class="col-md-4 form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                v-model="formProps.item.email"
                maxlength="64"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 form-group">
              <label>Notes</label>
              <textarea class="form-control" v-model="formProps.item.notes" maxlength="1024"></textarea>
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
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMinYMin meet"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="18px"
                  height="18px"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path
                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
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

export default {
  name: "Contacts",
  components: { AppHeader, DataTable, Modal, Form },
  data() {
    return {
      dataTable: {
        loading: true,
        header: [
          { label: "Position", width: 20 },
          { label: "Contact Person", width: 30 },
          { label: "Phone", width: 20 },
          { label: "Email", width: 25 },
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
        category: [],
        data: {},
        dirty: false
      }
    };
  },
  methods: {
    getRecords() {
      this.dataTable.loading = true;
      api
        .get("contacts/get-list")
        .then(data => {
          this.dataTable.data = data;
        })
        .catch(err => {
          console.log(err);
          this.$notification.open({
            type: "danger",
            message: "Could not retrieve contacts from database"
          });
        });
      this.dataTable.loading = false;
    },
    editRecord(id) {
      let record = this.dataTable.data.filter(n => n.id === id)[0];
      this.openModal("Edit Contact Info");
      this.form.data = _.cloneDeep(record);
      this.form.originalData = _.cloneDeep(record);
    },
    newRecord() {
      this.form.data = {
        id: null,
        category: "",
        name: "",
        contactPerson: "",
        phone: "",
        ext: "",
        altPhone: "",
        email: "",
        notes: ""
      };
      this.openModal("New Contact");
    },
    saveRecord(record) {
      api
        .post("contacts/upsert-record", record)
        .then(res => {
          this.closeModal();
          this.$notification.open({
            type: "success",
            message: "Contact successfully saved"
          });
          this.getRecords();
        })
        .catch(err => {
          console.log(err);
          this.$notification.open({
            type: "danger",
            message: "Could not save contact"
          });
        });
    },
    deleteRecord(id) {
      api
        .del("contacts/delete-record", { id })
        .then(res => {
          this.closeModal();
          this.$notification.open({
            type: "success",
            message: "Contact successfully deleted"
          });
          this.getRecords();
        })
        .catch(err => {
          console.log(err);
          this.$notification.open({
            type: "danger",
            message: "Could not delete contact"
          });
        });
    },
    searchRecord(query) {
      this.dataTable.searchQuery = query;
    },
    openModal(title) {
      this.modal.title = title;
      this.modal.show = true;
    },
    closeModal() {
      this.modal.show = false;
    },
    setFormStatus(val) {
      this.form.dirty = val;
    }
  },
  created() {
    this.getRecords();
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