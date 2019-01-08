<template>
  <div class="checkbox-wrap">
    <label for="cbox1">多选框</label>
    <input type="checkbox" id="cbox1" value="first_checkbox" @click="handleEmitEvent">
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  inject: {
    app: {
      from: 'app',
      default: {},
    },
  },
  created() {
    this.$on('on-message', (val) => {
      console.log("child:", val); // eslint-disable-line
    });
  },
  mounted() {
    // console.log("inject", this.app()); // eslint-disable-line
    this.$on('test', (text) => {
      console.log("child:", text); // eslint-disable-line
    });
    setTimeout(() => {
      this.dispatch('App', 'on-message');
    }, 3000);
  },
  methods: {
    handleEmitEvent() {
      this.$emit('test', 'hello, i`m checkbox');
    },
  },
};
</script>

<style>

</style>
