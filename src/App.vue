<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div id="app" class="m-0 p-0 bg-gray-100">
    <navigation />
    <div class="container mx-auto">
      <!-- provide / inject 组合 方式刷新页面 -->
      <router-view v-if="isRouterAlive" />
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
  //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      //控制视图是否显示的变量
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      //先关闭，
      this.isRouterAlive = false;
      this.$nextTick(function() {
        //再打开
        this.isRouterAlive = true;
      });
    },
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
