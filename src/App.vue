<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div id="app" class="m-0 p-0 bg-gray-100 h-full overscroll-auto">
    <navigation />
    <div class="container mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/navigation/navigation.vue";
// import HelloWorld from './components/HelloWorld.vue'
import "../css/iconfont.css";

export default {
  name: "App",
  components: {
    // HelloWorld

    Navigation,
  },
};
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
