<template>
  <div
    class="border-0 bg-white rounded-md shadow-md w-full ml-6 px-8 py-4 grid lg:grid-cols-2 grid-cols-1 gap-4"
    v-show="isClick == 2"
  >
    <div class="flex flex-col">
      <span class="text-base font-bold ">导师</span>
      <div class="flex flex-row my-2 border rounded shadow p-2">
        <img
          :src="teacher.image"
          alt="导师头像"
          class="border w-10 rounded-full overflow-hidden"
        />
        <p class="text-sm ml-3 self-center">{{ teacher.name }}</p>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="text-base font-bold">成员</span>
      <div
        v-for="(item, index) in student"
        :key="'c' + index"
        class="flex flex-col"
      >
        <div
          class="flex flex-row my-2 border rounded shadow p-2 items-center w-full"
        >
          <img
            :src="getImages(item.image)"
            alt="学生头像"
            class="border w-10 rounded-full overflow-hidden"
          />
          <div class="flex flex-col ml-3 w-full ">
            <p class="text-sm">{{ item.name }}</p>
            <p class="text-xs text-gray-300">{{ item.intro }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isClick", "student", "teacher"],
  data() {
    return {
      imagUrl: require("../../assets/head.jpg"),
    };
  },
  methods: {
    // 将图片url加入缓存网址
    getImages(_url) {
      if (_url == undefined || _url == null) {
        return this.imagUrl;
      } else {
        let _u = _url.substring(8);
        return "https://images.weserv.nl/?url=" + _u;
      }
    },
  },
};
</script>
