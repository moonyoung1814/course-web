<template>
  <div class="absolute right-0">
    <div
      :class="[
        'iconfont icon-jiahao self-center text-2xl transition duration-300 ease-in-out',
        isHover ? 'text-blue-500' : 'text-gray-500',
      ]"
      @mouseenter="onEnterTd()"
      @mouseleave="onLeaveTd()"
    ></div>
    <div
      :class="[
        'ring-1 ring-black ring-opacity-5 rounded-md shadow-lg bg-white z-10 w-20 py-2',
        'flex transition duration-300 ease-in-out absolute right-0 transform-gpu origin-top-right',
        isHover ? 'visible scale-y-100' : 'invisible scale-y-50',
      ]"
      @mouseenter="onEnterTd()"
      @mouseleave="onLeaveTd()"
    >
      <p
        class="text-xs text-black hover:bg-gray-300 w-full flex justify-center py-0.5"
        @click="skipToProject()"
      >
        新建项目
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      isHover: false,
    };
  },
  methods: {
    assign: function() {
      var _isHover = this.isHover;
      this.$emit("whichHover", _isHover);
    },
    onEnterTd: function() {
      setTimeout(() => {
        this.isHover = true;
        this.assign();
      }, 1000);
    },
    onLeaveTd: function() {
      setTimeout(() => {
        this.isHover = false;
        this.assign();
      }, 1000);
    },
    skipToProject: function() {
      this.$router.push("/project");
    },
  },
  //初始值,子传父
  mounted: function() {
    this.assign();
  },
};
</script>
