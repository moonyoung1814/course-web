<template>
  <div
    class="flex flex-none items-center border border-gray-100 shadow rounded-b px-2 relative w-screen h-16 bg-white"
  >
    <div class="flex items-end justify-around w-full">
      <!-- title -->
      <span class="text-3xl font-bold tracking-wider">Course</span>
      <!-- 首页+班级+标签导航 -->
      <ul class="list-none flex flex-row flex-none justify-around w-3/12 px-4">
        <li
          class="text-xl cursor-pointer hover:text-blue-500 transition ease-in-out duration-500"
          @click.stop="skipToIndex"
        >
          首页
        </li>
        <li
          class="text-xl cursor-pointer hover:text-blue-500 transition ease-in-out duration-500"
          @click.stop="skipToCourse"
        >
          课程
        </li>
        <li
          class="text-xl cursor-pointer hover:text-blue-500 transition ease-in-out duration-500"
          @click.stop="skipToClass"
        >
          班级
        </li>
      </ul>
      <!-- 头像+关注图标 -->
      <div
        class="flex flex-col items-center"
        @mouseenter="overHead"
        @mouseleave="outHead"
      >
        <!-- 头像 -->
        <div
          :class="[
            'border border-gray-100 shadow rounded-full h-8 w-8 overflow-hidden z-20 transition duration-300 ease-in-out transform-gpu cursor-pointer',
            isHeadOver ? '-translate-y-1 scale-125' : '',
          ]"
        >
          <img :src="person.detail.image" alt="head" v-if="isImage == true" />
          <img
            src="../../assets/head.jpg"
            alt="head"
            v-else-if="isImage == false"
          />
        </div>
        <!-- 头像卡片 -->
        <head-card
          :isHeadOver="isHeadOver"
          :label="label"
          :class="[
            'transition duration-300 ease-in-out transform-gpu origin-top',
            isHeadOver ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0',
          ]"
        ></head-card>
      </div>
      <!-- 搜索框 -->
      <search @searchCheck="searchCheck"></search>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import search from "./search.vue";
import HeadCard from "./headCard.vue";
import cookie from "js-cookie";
export default {
  components: { search, HeadCard },
  props: [],
  data() {
    return {
      isHeadOver: false,
      isCardOver: false,
      person: [],
      isImage: false,
      searchContent: "",
      label: [
        { iconName: "ren", name: "我的空间", fun: "skipToPerson" },
        { iconName: "tuichu", name: "退出登录", fun: "exit" },
      ],
    };
  },
  methods: {
    overHead: function() {
      this.isHeadOver = true;
    },
    outHead: function() {
      setTimeout(() => {
        this.isHeadOver = false;
      }, 1000);
    },
    searchCheck: function(e) {
      this.searchContent = e;
      console.log(this.searchContent);
    },
    skipToClass: function() {
      this.$router.push("/classList");
    },
    skipToIndex: function() {
      this.$router.push("/");
    },
    skipToCourse: function() {
      this.$router.push("/course");
    },
  },
  mounted() {},
  needSerialize: true,
  async created() {
    //let person = (await axios.get('http://api.moonyoung.top/api/admin/account'))
    //console.log(person)
    //this.person = person
    // cookie.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoi5a-85biIIiwiaWQiOjEwLCJkZXRhaWxfaWQiOjEsImlhdCI6MTYyMDc1NTg4NCwiZXhwIjoxNjIxMDE1MDg0fQ.MbdsdSbkIpi0l5NaHfM133yHACXQAkfmnD0iFmHW8Kc');
    let token = cookie.get("token");
    if (token) {
      this.person = (
        await axios.get("http://api.moonyoung.top/api/admin/account", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
      ).data.data;
      console.log(this.person);
      this.isImage = true;
    }
    // var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoi5a-85biIIiwidXNlcm5hbWUiOiJ0ZWFjaGVyIiwiaWQiOjEwLCJpYXQiOjE2MTk2MjA4MzksImV4cCI6MTYxOTg4MDAzOX0.ZaAOBzCdt65dguQQKY7Ynvex-XTi5NXLn4nvMUOFwVQ';
    // axios.get(
    // 'http://api.moonyoung.top/api/admin/account',
    // {
    //   headers:{
    //     'Authorization' :'Bearer ' + token
    //   }
    // })
    // .then(res => {
    //   console.log(res.data.data);
    //   this.person = res.data.data;
    //   this.isImage = true;
    // })
    // .catch(res =>{
    //   console.log(res);
    // })
  },
};
</script>

<style></style>
