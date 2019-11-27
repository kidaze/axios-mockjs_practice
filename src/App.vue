<template>
  <div id="app">
    <img alt="mama logo" src="./assets/mama.jpg">
    <momFly />
  </div>
</template>

<script>
import momFly from './components/momFly.vue'

export default {
  name: 'app',
  components: {
    momFly
  }
}
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
