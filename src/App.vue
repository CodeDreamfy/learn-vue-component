<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide: () => ({
    app: () => this,
  }),
  data: () => ({
    kim: 0,
  }),
  mounted() {
    this.broadcast('checkbox', 'on-message', 'hello Vue.js');
    this.$on('on-message', () => {
      console.log("HELLO App"); // eslint-disable-line
    });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
