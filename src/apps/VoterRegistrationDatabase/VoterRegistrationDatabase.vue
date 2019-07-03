<template>
  <div class="app-container">
    <AppHeader
      :title="header.title"
      :description="header.description"
    />

    <VoterSearch/>
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
          "Searchable database for voter registration in Kentucky. Last updated March 2017."
      },
      modal: { show: false }
    };
  }
};
</script>