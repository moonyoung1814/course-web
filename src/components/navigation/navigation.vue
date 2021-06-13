<template>
  <div
    class="flex flex-none items-center border border-gray-100 shadow rounded-b px-2 relative w-screen h-16 bg-white"
  >
    <div class="flex items-center justify-around w-full">
      <!-- title -->
      <h1 class="text-3xl font-bold tracking-widest">Course</h1>
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
          @click.stop="skipToClassList"
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
  inject: ["reload"],
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
    skipToClassList: function() {
      if (this.$route.name == "classList") {
        this.reload();
        this.titleAnimation();
      } else this.$router.push("/classList");
    },
    skipToIndex: function() {
      if (this.$route.name == "home") {
        this.reload();
        this.titleAnimation();
      } else this.$router.push("/");
    },
    skipToCourse: function() {
      if (this.$route.name == "course") {
        this.reload();
        this.titleAnimation();
      } else this.$router.push("/course");
    },
    // 标题动画
    titleAnimation: function() {
      const h1 = document.querySelector("h1");
      h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>");
      document.querySelectorAll("span").forEach((span, index) => {
        span.style.setProperty("--delay", `${index * 0.1}s`);
      });
    },
  },
  // watch用于观察和监听页面上的vue实例，当你需要在数据变化响应时，执行异步操作，或高性能消耗的操作，那么watch为最佳选择
  // 每当路由改变时触发标题动画
  watch: {
    $route: "titleAnimation",
  },
  mounted() {
    this.titleAnimation();
  },
  needSerialize: true,
  async created() {
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
  },
};
</script>

<style>
/* h1的span组件 */
h1 span {
  display: inline-block;
  animation: 0.4s jump ease-in-out;
  animation-delay: var(--delay);
}
/* 设置动画 */
@keyframes jump {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
