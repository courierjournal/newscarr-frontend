<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <div class="incident-body">
              <div class="modal-header">
                <h3>Incident Details</h3>
              </div>
              <IncidentEntry v-bind:incident="record.incident"/>
            </div>
            <div class="victim-body">
              <div class="modal-header">
                <h3>Victims ({{victimsLength}})</h3>
              </div>
              <Profile
                v-for="(victim, index) in record.victims"
                :key="index"
                v-bind:profileData="victim"
              />
            </div>
            <div class="suspect-body">
              <div class="modal-header">
                <h3>Suspects ({{suspectsLength}})</h3>
              </div>
              <div
                class="suspect-container"
                v-for="(suspect, index) in record.suspects"
                :key="index"
              >{{suspect.name}}</div>
            </div>
          </div>
          <aside class="last-update" v-show="record.updated">Last Updated: {{record.updated}}</aside>
          <div class="modal-footer">
            <button class="modal-default-button" @click="$emit('close')">Delete</button>
            <button class="modal-default-button" @click="$emit('close')">OK</button>
            <button class="modal-default-button" @click="$emit('close')">Save</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import IncidentEntry from "./IncidentEntry"
import Profile from "./Profile";

export default {
  name: "Modal",
  components: { Profile, IncidentEntry },
  props: { record: Object },
  computed: {
    victimsLength: function() {
      if (this.record.victims) {
        return this.record.victims.length;
      }
      return 0;
    },
    suspectsLength: function() {
      if (this.record.suspects) {
        return this.record.suspects.length;
      }
      return 0;
    }
  },
  mounted() {
    document.querySelector("body").classList.add("modal-active");
  },
  destroyed() {
    document.querySelector("body").classList.remove("modal-active");
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-x: hidden;
  overflow-y: auto;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  margin: 3em 0;
}

.modal-container {
  width: 90%;
  max-width: 860px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #555;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

aside.last-update {
  font-size: 12px;
  font-style: italic;
  text-align: right;
}
</style>