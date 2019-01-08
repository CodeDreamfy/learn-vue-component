<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <checkbox @test="handleEvent"></checkbox>
  </div>
</template>

<script>
import checkbox from './checkbox';

export default {
  name: 'index',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    checkbox,
  },
  methods: {
    handleEvent(text) {
      console.log("handleEvent:", text); // eslint-disable-line
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
