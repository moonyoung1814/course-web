<template>
  <div class="flex flex-row">
    <!-- 头像 -->
    <div
      class="border border-gray-50 rounded-full shadow-md h-10 w-10 overflow-hidden"
    >
      <img src="../../../assets/head.jpg" alt="head" />
    </div>
    <!-- 头像右侧区域 -->
    <div class="ml-6 self-center flex flex-col space-y-1">
      <p class="text-sm text-black font-bold">{{ ask.name }}</p>
      <p class="text-sm text-gray-800">{{ ask.content }}</p>
      <div class="flex flex-row items-center">
        <p class="text-xs text-gray-500">{{ ask.date }}&nbsp;{{ ask.time }}</p>
        <div
          class="flex flex-row items-center ml-4 cursor-pointer"
          @click="answer(ask.id)"
        >
          <span class="iconfont icon-huifu text-gray-600 text-base"></span>
          <span class="text-xs text-gray-500 ml-0.5">回复</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ask"],
  data() {
    return {};
  },
  methods: {
    answer: function(e) {
      this.$emit("changeAnswer", e);
    },
  },
  mounted() {},
};
</script>
