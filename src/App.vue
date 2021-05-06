<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div id="app">
    <div class="container mx-auto my-6 ">
      <navigation/>
      <router-view/>
   </div> 
  </div>
</template>

<script>

import Navigation from './components/navigation.vue'
// import HelloWorld from './components/HelloWorld.vue'
import "../css/iconfont.css"

export default {
  name: 'App',
  components: {
    // HelloWorld

    Navigation  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
