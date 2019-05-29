<template>
  <div class="app-container">
    <div>
      <h2 class="app-title">Gun Violence Database Admin</h2>
      <div>
        <button>Create New</button>
        <input class="input-search" type="text" placeholder="Search">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GunViolenceDatabase",
  data() {
    return {
      incidents: [],
      suspects: [],
      victims: []
    };
  },
  methods: {
    getData() {
      fetch("/api/gun-violence-database/get-data")
        .then(res => res.json())
        .then(data => {
          this.incidents = data.incidents;
          this.suspects = data.suspects;
          this.victims = data.victims;
        })
        .catch(err => {});
    },
    upsertVictimData(id) {
      fetch("/api/gun-violence-database/upsert-victim", {
        method: "POST",
        body: null
      }).catch(err => {});
    },
    upsertSuspectData(id) {
      fetch("/api/gun-violence-database/upsert-suspect", {
        method: "POST",
        body: null
      }).catch(err => {});
    },
    upsertIncidentData(id) {
      fetch("/api/gun-violence-database/upsert-incident", {
        method: "POST",
        body: null
      }).catch(err => {});
    },
    deleteRecord(id, table) {
      fetch("/api/gun-violence-database/delete-record", {
        method: "DELETE",
        body: null
      }).catch(err => {});
    },
    saveImage() {}
  }
};
</script>