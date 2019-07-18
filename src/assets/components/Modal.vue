<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <div class="modal-title">{{title}}</div>
            <div class="modal-close-container">
              <button type="button" class="close" @click="$emit('close')">
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
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
export default {
  name: "Modal",
  props: { title: String },
  components: {},
  mounted() {
    document.querySelector("body").classList.add("modal-active");
  },
  destroyed() {
    document.querySelector("body").classList.remove("modal-active");
  }
};
</script>

<style scoped>
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

.close {
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  border: 0;
  font-size: 32px;
  font-weight: bold;
  color: #888;
}

.close:hover {
  color: #000;
}

.modal-header {
  display: flex;
}

.modal-close-container {
  margin-left: auto;
}
</style>