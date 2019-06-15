<template>
  <div class="incident">
    <div class="form-row">
      <div class="form-group col-md-4">
        <label>Date</label>
        <input class="form-control" type="date" v-model="incident.date">
      </div>
      <div class="form-group col-md-4">
        <label>Time</label>
        <input class="form-control" type="time" v-model="incident.time">
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-5">
        <label>Address</label>
        <input class="form-control" type="text" v-model="incident.address">
      </div>
      <div class="form-group col-md-3">
        <label>City</label>
        <input class="form-control" type="text" v-model="incident.city">
      </div>
      <div class="form-group col-md-2">
        <label>State</label>
        <input class="form-control" type="text" maxlength="2" v-model="incident.state">
      </div>
      <div class="form-group col-md-2">
        <label>Zip</label>
        <input class="form-control" type="text" maxlength="5" v-model="incident.zip">
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Narrative</label>
        <textarea class="form-control" rows="3" v-model="incident.narrative"></textarea>
      </div>
      <div class="form-group col-md-6">
        <label>Notes</label>
        <textarea class="form-control" rows="3" v-model="incident.notes"></textarea>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Guns</label>
        <textarea class="form-control" rows="3" v-model="incident.guns"></textarea>
      </div>
      <div class="form-group col-md-6">
        <label>Source(s)</label>
        <textarea class="form-control" rows="3" v-model="incident.source"></textarea>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-12">
        <label>Article Link</label>
        <input class="form-control" type="text" v-model="incident.story">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncidentEntry",
  props: { incident: Object }
};
</script>