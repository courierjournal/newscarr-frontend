<template>
  <div class="notification-container-outer">
    <transition-group name="notification">
      <div
        class="notification"
        :class="notification.type"
        v-for="(notification, index) in notificationState"
        :key="index"
      >
        <div class="notification-title">{{notification.title}}</div>
        <div class="notification-message">{{notification.message}}</div>
        <div class="close" @click="$emit('close', notification.key)">X</div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      notificationState: []
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/palette.less";

.notification-container-outer {
  position: fixed;
  z-index: 1080;
  top: 20px;
  right: 20px;
  width: 384px;
  max-width: calc(100vw - 32px);
  margin-right: 24px;
}

.notification {
  padding: 16px 24px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #fff;
  line-height: 1.5;
  position: relative;
  margin-bottom: 16px;
  overflow: hidden;
  border-left: 5px solid #ccc;
  max-height: 150px;
}

.notification.primary {
  border-left-color: @blue-primary;
}

.notification.danger {
  border-left-color: @red-primary;
}

.notification.success {
  border-left-color: @green-primary;
}

.notification-item {
  display: inline-block;
  margin-right: 10px;
}
.notification-enter-active, .notification-leave-active {
  transition: all .3s;
}
.notification-enter {
  opacity: 0;
  transform: translateX(384px);
}

.notification-leave-to{
  opacity: 0;
  max-height:0;
  padding-top:0;
  padding-bottom:0;
}
</style>