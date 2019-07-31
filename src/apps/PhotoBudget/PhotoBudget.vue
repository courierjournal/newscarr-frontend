<template>
  <div class="app-container">
    <AppHeader :new-button="'New Request'" @new="newRecord" />
    <div class="app-body">
      <div id="menu-bar">
        <button @click="viewState='list'">List</button>
        <button @click="viewState='calendar'">Calendar</button>
      </div>
      <div id="list-container" v-if="viewState==='list'">
        <List :header="list.header" :loading="list.loading" :data="list.data">
          <template v-slot:row="rowProps">
            <td>{{rowProps.item.photographerName}}</td>
            <td>{{rowProps.item.reporterName}}</td>
            <td class="overflow">{{rowProps.item.slug}}</td>
            <td>{{rowProps.item.requestDate}}</td>
            <td>
              <a
                :href="`https://presto.gannettdigital.com/#!/stories/edit/${rowProps.item.prestoId}`"
                target="_blank"
              >{{rowProps.item.prestoId}}</a>
            </td>
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
            requestDate: "5/1/2019 12:23",
            reporterName: "Sarah Ladd",
            reporterCell: "502-284-3948",
            reporterEmail: "slad@gannett.com",
            photographerName: "",
            photographerCell: "",
            photographerEmail: "",
            contactName: "John Doe",
            contactCell: "502-123-4567",
            locationNotes: "Prospect Housing Project",
            locationAddress: "7412 Shadwell Ln\nProspect, KY 40059",
            description:
              "Take a picture inside the house. Reporter will be present",
            prestoId: 1806125001,
            initialRequest_date: "5/1/2019 12:23",
            lastUpdate: "",
            status: "initial",
            urgent: 0,
            declineReason: ""
          },
          {
            id: 2,
            slug:
              "Havana Rumba, other St. Matthews businesses closed for 'roofing issues'\n",
            requestDate: "6/12/2019 15:43",
            reporterName: "Ben Tobin",
            reporterCell: "502-393-3928",
            reporterEmail: "btobin@gannett.com",
            photographerName: "Matt Stone",
            photographerCell: "502-393-4959",
            photographerEmail: "msstone@gannett.com",
            contactName: "Jane Doe",
            contactCell: "502-193-4958",
            locationNotes: "Havana Rumba Shopping center",
            locationAddress: "4115 Oechsli Ave, Louisville, KY 40207",
            description: "Exterior shots of the roof collapsing",
            prestoId: 1842611001,
            initialRequest_date: "6/12/2019 15:43",
            lastUpdate: "",
            status: "touched",
            urgent: 0,
            declineReason: ""
          },
          {
            id: 3,
            slug:
              "$250 million Sandmann lawsuit against Washington Post dismissed by federal judge",
            requestDate: "7/15/2019 11:00",
            reporterName: "Max Londburg",
            reporterCell: "502-193-3949",
            reporterEmail: "mlondburg@gannett.com",
            photographerName: "Dustin Strupp",
            photographerCell: "502-201-3948",
            photographerEmail: "dstrupp@gannett.com",
            contactName: "Jim Porter",
            contactCell: "502-392-3938",
            locationNotes: "Photo of Sandmann",
            locationAddress: "Cincinnati, OH 45202",
            description: "Photo of the family.",
            prestoId: 1841901001,
            initialRequest_date: "7/15/2019 11:00",
            lastUpdate: "",
            status: "assigned",
            urgent: 1,
            declineReason: ""
          },
          {
            id: 4,
            slug:
              "Noche Mexican BBQ might just be the church of tacos in Louisville\n",
            requestDate: "6/29/2019 18:54",
            reporterName: "Savanah Edans",
            reporterCell: "502-193-4959",
            reporterEmail: "sedans@gannett.com",
            photographerName: "Pat McDonogh",
            photographerCell: "502-393-1939",
            photographerEmail: "pmddonogh@gannett.com",
            contactName: "Ralph Feinstein",
            contactCell: "502-393-3980",
            locationNotes: "Noche",
            locationAddress:
              "1838 Bardstown Rd Suite 100, Louisville, KY 40205",
            description: "Get some pics of the tacos. Don't forget the guac!",
            prestoId: 1806731001,
            initialRequest_date: "6/29/2019 18:54",
            lastUpdate: "",
            status: "touched",
            urgent: 0,
            declineReason: ""
          },
          {
            id: 5,
            slug:
              "Bats in the basement: Reds' farm club owns worst record in Triple-A over last decade",
            requestDate: "7/2/2019 14:30",
            reporterName: "Tim Sullivan",
            reporterCell: "502-201-3948",
            reporterEmail: "tsullivan@gannett.com",
            photographerName: "Sam Upshaw",
            photographerCell: "502-193-3948",
            photographerEmail: "supshaw@gannett.com",
            contactName: "Roy McDugal",
            contactCell: "502-393-3918",
            locationNotes: "Slugger Field",
            locationAddress: "401 E Main St, Louisville, KY 40202",
            description: "Snap a pic of someone hitting a baseball",
            prestoId: 1806984001,
            initialRequest_date: "7/2/2019 14:30",
            lastUpdate: "",
            status: "assigned",
            urgent: 0,
            declineReason: ""
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