<template>
  <div class="ml-2 flex flex-row flex-wrap items-start w-full relative">
    <div
      v-for="(item, index) in course"
      :key="index"
      class="lg:w-1/4 md:w-1/2 max-w-full border-0 px-4"
    >
      <!-- 背景图片不显示问题 -->
      <!-- :style="`background:url(${imageUrl}) no-repeat`" -->
      <!-- :style="{background: 'url(' + require('../../assets/chalkboard.png') + ')'}" -->
      <div
        class="relative justify-center flex items-center overflow-hidden"
        @mouseenter="enterImage(index)"
        @mouseleave="leaveImage()"
      >
        <!-- 课程实例标题 -->
        <p class="text-xs text-white z-10 absolute tracking-widest">
          {{ item.name }}
        </p>
        <!-- 背景图片 -->
        <img class="z-0" src="../../assets/chalkboard_1.png" alt="chalkboard" />
        <!-- 课程实例注释 -->
        <div
          :class="[
            'flex items-end border-0 w-full h-full bg-black absolute bg-opacity-50 z-20 p-2 transform-gpu transition ease-in-out duration-300 origin-bottom',
            isHover == index ? '' : 'translate-y-full',
          ]"
        >
          <p class="text-xs text-gray-300">
            课程负责人：{{ item.teacher.name }}
          </p>
          <p
            class="text-xs text-gray-300 absolute right-2"
            v-if="item.semeter == 2"
          >
            {{ item.year }}年春
          </p>
          <p
            class="text-xs text-gray-300 absolute right-2"
            v-else-if="item.semeter == 1"
          >
            {{ item.year }}年秋
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["course"],
  data() {
    return {
      imageUrl: require("../../assets/chalkboard.png"),
      isHover: -1,
    };
  },
  methods: {
    enterImage: function(e) {
      this.isHover = e;
    },
    leaveImage: function() {
      this.isHover = -1;
    },
  },
};
</script>
