<template>
  <div class="w-full relative pl-6 pr-10" v-show="isClick == 1">
    <create-notice @whichHover="whichHover"></create-notice>
    <div class="grid grid-cols-3 gap-x-8 gap-y-4 w-full">
      <div
        v-for="(item, index) in project"
        :key="index"
        class="relative p-4 border-0 bg-white rounded-md shadow-md items-center flex flex-col w-full"
      >
        <img
          :src="item.images[0]"
          alt="项目封面"
          class="h-32 w-full border-gray-100 rounded shadow"
        />
        <span
          class="text-base font-bold mt-6 cursor-pointer"
          @click="skipToProject(item)"
          >{{ item.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import createNotice from "./createNotice.vue";
export default {
  components: { createNotice },
  props: ["isClick", "project"],
  data() {
    return {
      isHover: false,
    };
  },
  mounted() {},

  methods: {
    // 动态路由
    skipToProject: function(project) {
      this.$router.push({
        name: "project",
        params: { id: project.id },
      });
    },

    whichHover: function(e) {
      this.isHover = e;
    },
    // 将图片url加入缓存网址
    getImages(_url) {
      if (_url !== undefined) {
        let _u = _url.substring(7);
        return "https://images.weserv.nl/?url=" + _u;
      }
    },
  },
};
</script>
