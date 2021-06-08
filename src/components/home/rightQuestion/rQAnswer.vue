<template>
  <div v-show="isAnswer">
    <div class="flex flex-row ml-16 mt-6 items-center">
      <div
        class="border-2 border-purple-300 rounded-full shadow-md h-8 w-8 overflow-hidden"
      >
        <img src="../../../assets/head.jpg" alt="head" />
      </div>
      <div class="ml-6 w-9/12">
        <input
          type="text"
          class="border border-purple-300 placeholder-gray-300 rounded-md text-black 
                        w-full h-16 text-sm focus:outline-none focus:border-blue-300 focus:ring-2 shadow-md py-1 px-2"
          placeholder="输入回复"
        />
      </div>
      <div class="ml-6">
        <button
          class="w-16 h-16 text-center bg-purple-500 text-white text-base border-1
                        border-purple-500 rounded"
        >
          发表
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isAnswer"],
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
