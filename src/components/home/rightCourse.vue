<template>
  <div
    class="grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-2 ml-8 w-full justify-items-auto"
  >
    <div
      v-for="(item, index) in course"
      :key="index"
      class="flex flex-col items-center"
    >
      <!-- 图片 -->
      <div class="relative flex items-center justify-center">
        <p class="text-xs text-white z-10 absolute tracking-widest self-center">
          {{ item.name }}
        </p>
        <img class="z-0" src="../../assets/chalkboard.png" alt="chalkboard" />
      </div>
      <!-- 文字 -->
      <p class="text-xs text-gray-900">课程负责人：{{ item.teacher.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["course"],
  data() {
    return {};
  },
  methods: {},
};
</script>
