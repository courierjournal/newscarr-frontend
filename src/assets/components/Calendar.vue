<template>
  <FullCalendar defaultView="dayGridMonth" :plugins="calendarPlugins" :fixedWeekCount="false" />
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";

export default {
  name: "Calendar",
  components: { FullCalendar },
  data() {
    return {
      calendarPlugins: [dayGridPlugin]
    };
  }
};
</script>

<style lang="less">
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
</style>