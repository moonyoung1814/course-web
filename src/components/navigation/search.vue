<template>
  <div class="w-56 h-10 relative">
    <div
      class="absolute left-1/2 top-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2"
    >
      <input
        type="text"
        id="search"
        :placeholder="placeholderContent"
        v-model="searchContent"
        @keyup.enter="search"
        @focus="focusInput"
        @blur="blurInput"
        :class="[
          'w-6 h-6 text-xs text-center truncate cursor-pointer bg-opacity-0 border-2 rounded-full overflow-hidden outline-none shadow placeholder-gray-500 transition duration-300 ease-in-out',
          isFocus
            ? 'placeholder-opacity-100 text-opacity-100 border-blue-600'
            : 'placeholder-opacity-0 text-opacity-0 border-blue-400 ',
        ]"
      />
      <span
        :class="[
          'w-0.5 h-3 absolute transform -rotate-45 bg-blue-400 top-3/4 left-full transition duration-300 ease-in-out shadow',
          isFocus ? 'opacity-0' : 'opacity-100',
        ]"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      searchContent: "",
      isFocus: false,
      placeholderContent: "Search Here",
    };
  },
  methods: {
    // 将输入框内容传到导航栏组件
    search: function() {
      var _searchContent = this.searchContent;
      this.$emit("searchCheck", _searchContent);
    },
    focusInput: function() {
      this.isFocus = true;
    },
    blurInput: function() {
      this.isFocus = false;
      this.searchContent = "";
    },
  },
  //初始值,子传父
  mounted: function() {},
};
</script>

<style>
#search {
  transition: 0.3s ease-in-out;
}

#search:focus {
  width: 240px;
}
</style>
