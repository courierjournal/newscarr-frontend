<template>
  <transition name="modal">
    <div v-show="visible" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" :class="size">
          <div v-if="title" class="modal-header">
            <h4 class="modal-title">{{title}}</h4>
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
            <slot name="footer">
              <button class="btn modal-default-button" @click="$emit('close')">OK</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: { visible: Boolean, title: String, size: String },
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
  position: relative;
  max-width: 600px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: transform 0.3s ease;
}

.modal-container.large {
  max-width: 860px;
}

.modal-container.small {
  max-width: 400px;
}

.modal-body {
  padding: 24px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px 16px;
  border-top: 1px solid #ccc;
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
  line-height: 28px;
  font-weight: bold;
  color: #888;
  padding: 13px;
}

.close:hover {
  color: #000;
}

.modal-header {
  display: flex;
  border-bottom: 1px solid #ccc;
  align-items: center;
  padding: 16px 24px;
}

.modal-title {
  margin: 0;
  font-family: Lato;
  font-size: 1.2rem;
}

.modal-close-container {
  position: absolute;
  right: 0;
  top: 0;
}
</style>