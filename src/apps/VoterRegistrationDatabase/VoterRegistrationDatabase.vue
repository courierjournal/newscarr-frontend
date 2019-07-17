<template>
  <div class="app-container">
    <AppHeader :title="header.title" :description="header.description" />
    <VoterSearch @search="search" />
    <ListGroup
      v-if="searchInitiated"
      :header="list.header"
      :groupby="list.groupby"
      :data="list.data"
      @edit="editRecord"
    />
    <Modal v-if="modal.show" :title="modal.title" @close="closeModal">
      <p>Modal Data Goes Here</p>
      <p>Debug:</p>
      <pre>{{modal.data}}</pre>
    </Modal>
  </div>
</template>

<script>
import AppHeader from "@/assets/components/AppHeader";
import VoterSearch from "./VoterSearch";
import ListGroup from "@/assets/components/ListGroup";
import Modal from "@/assets/components/Modal";
import { baseUrl } from "@/assets/libs/baseUrl";

export default {
  name: "VoterRegistrationDatabase",
  components: { AppHeader, VoterSearch, ListGroup, Modal },
  data() {
    return {
      header: {
        title: "Voter Registration Database",
        description:
          "Searchable database for voter registration in Kentucky. You can search by any of the fields below to do a fuzzy lookup (ex: a first name search of \"ben\" will return names like Ben, Benny, Benjamin, Ruben, Alben, etc...). Selecting \"exact match\" will return results that match the fields exactly. Clicking on a row will reveal more information about that person. Searches are limited to 100 matches. Database provided by KY SoS, last updated March 2017."
      },
      list: {
        header: [
          { label: "Name", width: 25, key: "name" },
          { label: "Party", width: 30, key: "contactPerson" },
          { label: "Gender", width: 20, key: "phone" },
          { label: "Address", width: 25, key: "email" }
        ],
        groupby: "category",
        data: null
      },
      modal: { show: false },
      searchInitiated: false
    };
  },
  methods: {
    search(values) {
      this.searchInitiated = true;
      let urlQuery = this.serialize(values);
      fetch(`${baseUrl}/voterdb/search?q=${urlQuery}`)
        .then(res => res.json())
        .then(data => {
          this.list.data = data;
        })
        .catch(err => {
          console.log("Error retrieving voterdb records");
        });
      console.log("search fired", urlQuery);
    },
    serialize(obj) {
      var str = [];
      for (var p in obj)
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      return str.join("&");
    }
  }
};
</script>