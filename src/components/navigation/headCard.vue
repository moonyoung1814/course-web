<template>
  <div
    :class="[
      'border border-gray-100 rounded-md shadow-md bg-white w-28 h-28 flex flex-col',
      'justify-center items-center z-10 absolute mt-4 divide-y divide-gray-300 ',
    ]"
  >
    <div
      class="flex flex-row items-center p-1 cursor-pointer text-gray-600 hover:text-blue-500 transition ease-in-out duration-500 transform-gpu scale-90 hover:scale-100"
      v-for="(item, index) in label"
      :key="index"
      @click="skip(item.fun)"
    >
      <span
        :class="[
          'iconfont ',
          'icon-' + item.iconName,
          'text-base font-semibold',
        ]"
      ></span>
      <span class="ml-1 text-base">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isHeadOver", "label"],
  data() {
    return {
      searchContent: "",
    };
  },
  methods: {
    //v-for中不同元素绑定不同的事件
    skip: function(fun) {
      this[fun]();
    },
    //跳转到外部链接
    skipToPerson: function() {
      window.location.href = "http://home.moonyoung.top";
    },
    exit: function() {},
  },
  //初始值,子传父
  mounted: function() {},
};
</script>
