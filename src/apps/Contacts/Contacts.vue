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
          <span v-if="rowProps.item.ext">x{{rowProps.item.ext}}</span>
          <span v-if="!rowProps.item.phone && rowProps.item.altPhone">(c) {{rowProps.item.altPhone}}</span>
        </td>
        <td>
          <a :href="`mailto:${rowProps.item.email}`">{{rowProps.item.email}}</a>
        </td>
        <td @click="editRecord(rowProps.item.id)" class="icon-more"></td>
      </template>
    </List>

    <Modal :visible="modal.show" :title="modal.title" :size="'large'" @close="closeModal">
      <template>
        <input type="hidden" v-model="form.data.id" />
        <div class="row">
          <div class="col-md-4 form-group">
            <label>Category</label>
            <input type="text" class="form-control" v-model="form.data.category" />
          </div>
          <div class="col-md-4 form-group">
            <label>Contact Name</label>
            <input type="text" class="form-control" v-model="form.data.contactPerson" />
          </div>
          <div class="col-md-4 form-group">
            <label>Position</label>
            <input type="text" class="form-control" v-model="form.data.name" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 form-group">
            <label>Primary Phone #</label>
            <input
              class="form-control"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              v-model="form.data.phone"
            />
          </div>
          <div class="col-md-2 form-group">
            <label>Extension</label>
            <input type="text" class="form-control" v-model="form.data.ext" />
          </div>
          <div class="col-md-3 form-group">
            <label>Secondary or Cell #</label>
            <input
              class="form-control"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              v-model="form.data.altPhone"
            />
          </div>
          <div class="col-md-4 form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="form.data.email" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 form-group">
            <label>Notes</label>
            <textarea class="form-control" v-model="form.data.notes"></textarea>
          </div>
        </div>
        <template slot="footer">
          <div class="delete-close-save">
            <div>
              <button class="danger" @click="deleteRecord(form.data.id)">
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
              <button class="outline" @click="closeModal">Cancel</button>
              <button class="primary" @click="saveRecord" :disabled="!form.dirty">Save</button>
            </div>
          </div>
        </template>
      </template>
    </Modal>
  </div>
</template>

<script>
import AppHeader from "@/assets/components/AppHeader";
import List from "@/assets/components/List";
import Modal from "@/assets/components/Modal";
import api from "@/assets/libs/api";

export default {
  name: "Contacts",
  components: { AppHeader, List, Modal },
  data() {
    return {
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
        title: ""
      },
      form: {
        data: {},
        originalData: {},
        dirty: false
      }
    };
  },
  watch: {
    "form.data": {
      handler() {
        if (_.isEqual(this.form.data, this.form.originalData)) {
          this.form.dirty = false;
        } else {
          this.form.dirty = true;
        }
      },
      deep: true
    }
  },
  methods: {
    getRecords() {
      this.list.loading = true;
      api
        .get("contacts/get-list")
        .then(data => {
          this.list.data = data;
        })
        .catch(err => {
          console.log(err);
          this.$notification.open({
            type: "danger",
            message: "Could not retrieve contacts from database"
          });
        });
      this.list.loading = false;
    },
    editRecord(id) {
      let record = this.list.data.filter(n => n.id === id)[0];
      this.openModal("Edit Contact Info");
      this.form.data = _.cloneDeep(record);
      this.form.originalData = _.cloneDeep(record);
    },
    newRecord(){
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
      }
      this.openModal("New Contact");
    },
    saveRecord() {
      api
        .post("contacts/upsert-record", this.form.data)
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
    openModal(title) {
      this.modal.title = title;
      this.modal.show = true;
    },
    closeModal() {
      this.modal.show = false;
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