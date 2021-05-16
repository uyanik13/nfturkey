<template>
  <div class="flex font-raleway">
    <p class="digit mr-1">{{ getLeftedTime() }}</p>
  </div>
</template>

<script>
export default {
  name: "countdown",
  components: {},
  props: {
    date: {
      type: String,
    },
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(new Date(this.date)) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    },
  },
  methods: {
    getLeftedTime() {
      let date = "";
      if (this.days > 0) {
        date = this.days + ` day `;
      } else if (this.hours > 0) {
        date += this.hours + ` hours `;
      } else if (this.minutes > 0) {
        date += this.minutes + ` minutes `;
      } else if (this.seconds > 0) {
        date += this.seconds + ` seconds `;
      } else {
        date = "end";
      }
      return date;
    },
    two_digits(value) {
      if (value < 0) {
        return "00";
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value;
    },
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
    };
  },
};
</script>
<style></style>
