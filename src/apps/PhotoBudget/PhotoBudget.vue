<template>
  <div class="app-container">
    <AppHeader :new-button="'New Request'" @new="newRecord" @search="searchRecords" />
    <div class="app-body">
      <div id="menu-bar">
        <button @click="viewState='list'">List</button>
        <button @click="viewState='calendar'">Calendar</button>
        </div>
      <div id="list-container" v-if="viewState==='list'">
        <List
          :header="list.header"
          :loading="list.loading"
          :groupby="list.groupby"
          :data="list.data"
        >
          <template v-slot:row="rowProps">
            <td>{{rowProps.item.photographerName}}</td>
            <td>{{rowProps.item.reporterName}}</td>
            <td>{{rowProps.item.slug}}</td>
            <td>{{rowProps.item.requestDate}}</td>
            <td>{{rowProps.item.prestoId}}</td>
            <td>...</td>
          </template>
        </List>
      </div>
      <div id="calendar-container" v-if="viewState==='calendar'">
        <Calendar />
      </div>
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
          <div class="col-md-7 form-group">
            <label>Story Title</label>
            <input type="text" class="form-control" v-model="modal.data.slug" required />
          </div>
          <div class="col-md-3 form-group">
            <label>Presto ID</label>
            <input class="form-control" type="text" v-model="modal.data.prestoId" />
          </div>
          <div class="col-md-2 form-group">
            <label>Urgent</label>
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
          <div class="col-md-4 form-group">
            <label>Request Date + Time</label>
            <input type="datetime-local" class="form-control" v-model="modal.data.dateRequested" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 form-group">
            <label>Reporter Name</label>
            <input
              class="form-control"
              type="text"
              list="datalist-reporter-name"
              v-model="modal.data.reporterName"
            />
            <datalist id="datalist-reporter-name">
              <option
                v-for="(reporter, index) in newsroomContacts.reporters"
                :key="index"
              >{{reporter.name}}</option>
            </datalist>
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
            <input class="form-control" type="email" v-model="modal.data.reporterEmail" />
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
        <div v-if="modal.modalType=='admin'">
          <hr />
          <div class="row">
            <div class="col-md-4 form-group">
              <label>Photographer Name</label>
              <input class="form-control" type="text" v-model="modal.data.reporterName" />
            </div>
            <div class="col-md-4 form-group">
              <label>Photographer Cell</label>
              <input
                class="form-control"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                v-model="modal.data.reporterCell"
              />
            </div>
            <div class="col-md-4 form-group">
              <label>Photographer Email</label>
              <input class="form-control" type="email" v-model="modal.data.reporterEmail" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 form-group">
              <label>Decline Reason</label>
              <textarea class="form-control"></textarea>
            </div>
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
      viewState: "list",
      list: {
        loading: false,
        header: [
          { label: "Photographer", width: 20 },
          { label: "Reporter", width: 20 },
          { label: "Title", width: 25 },
          { label: "Shoot Date", width: 20 },
          { label: "Presto ID", width: 10 },
          { label: "Edit", width: 5 }
        ],
        data: [
          {
            id: 1,
            slug:
              "Socialism' in Prospect? Residents angry over new affordable housing plan",
            request_date: "5/1/2019 12:23",
            reporter_name: "",
            reporter_cell: "",
            reporter_email: "",
            photographer_name: "",
            photographer_cell: "",
            photographer_email: "",
            contact_name: "",
            contact_cell: "",
            location_notes: "",
            location_address: "",
            description: "",
            presto_id: 1806125001,
            initial_request_date: "5/1/2019 12:23",
            last_update: "",
            status: "",
            urgent: 0,
            decline_reason: ""
          },
          {
            id: 2,
            slug:
              "Havana Rumba, other St. Matthews businesses closed for 'roofing issues'\n",
            request_date: "6/12/2019 15:43",
            reporter_name: "",
            reporter_cell: "",
            reporter_email: "",
            photographer_name: "",
            photographer_cell: "",
            photographer_email: "",
            contact_name: "",
            contact_cell: "",
            location_notes: "",
            location_address: "",
            description: "",
            presto_id: 1842611001,
            initial_request_date: "6/12/2019 15:43",
            last_update: "",
            status: "",
            urgent: 0,
            decline_reason: ""
          },
          {
            id: 3,
            slug:
              "$250 million Sandmann lawsuit against Washington Post dismissed by federal judge",
            request_date: "7/15/2019 11:00",
            reporter_name: "",
            reporter_cell: "",
            reporter_email: "",
            photographer_name: "",
            photographer_cell: "",
            photographer_email: "",
            contact_name: "",
            contact_cell: "",
            location_notes: "",
            location_address: "",
            description: "",
            presto_id: 1841901001,
            initial_request_date: "7/15/2019 11:00",
            last_update: "",
            status: "",
            urgent: 0,
            decline_reason: ""
          },
          {
            id: 4,
            slug:
              "Noche Mexican BBQ might just be the church of tacos in Louisville\n",
            request_date: "6/29/2019 18:54",
            reporter_name: "",
            reporter_cell: "",
            reporter_email: "",
            photographer_name: "",
            photographer_cell: "",
            photographer_email: "",
            contact_name: "",
            contact_cell: "",
            location_notes: "",
            location_address: "",
            description: "",
            presto_id: 1806731001,
            initial_request_date: "6/29/2019 18:54",
            last_update: "",
            status: "",
            urgent: 0,
            decline_reason: ""
          },
          {
            id: 5,
            slug:
              "Bats in the basement: Reds' farm club owns worst record in Triple-A over last decade",
            request_date: "7/2/2019 14:30",
            reporter_name: "Tim Sullivan",
            reporter_cell: "",
            reporter_email: "",
            photographer_name: "",
            photographer_cell: "",
            photographer_email: "",
            contact_name: "",
            contact_cell: "",
            location_notes: "",
            location_address: "",
            description: "",
            presto_id: 1806984001,
            initial_request_date: "7/2/2019 14:30",
            last_update: "",
            status: "",
            urgent: 0,
            decline_reason: ""
          }
        ]
      },
      newsroomContacts: {},
      modal: {
        show: false,
        modalType: "",
        data: {},
        title: "",
        footer: ["save", "done"]
      }
    };
  },
  mounted() {
    this.getNewsroomContacts();
    this.getPhotoBudget();
  },
  methods: {
    getNewsroomContacts() {
      console.log("Getting list of newsroom contacts");
    },
    getPhotoBudget(date = new Date()) {
      console.log("Getting photo budget for:", date);
    },
    fillContact(type, keys) {},
    newRecord() {
      this.openModal("New Photo Request", "request");
    },
    searchRecords() {},
    openModal(title, type) {
      this.modal.title = title;
      this.modal.modalType = type;
      this.modal.show = true;
    },
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