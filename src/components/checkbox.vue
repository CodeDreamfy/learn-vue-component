<template>
  <div class="checkbox-wrap">
    <label for="cbox1">多选框</label><input type="checkbox" id="cbox1" value="first_checkbox">
  </div>
</template>

<script>
export default {
  inject: {
    app: {
      from: 'app',
      default: {},
    },
  },
  mounted() {
    console.log("inject", this.app()); // eslint-disable-line
  },
};
</script>

<style>

</style>
