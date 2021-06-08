<template>
  <div class="w-10/12 relative" v-show="isClick == 1">
    <create-notice @whichHover="whichHover"></create-notice>
    <div class="grid grid-cols-3 gap-x-8 gap-y-4 mx-8 w-full">
      <div
        v-for="(item, index) in project"
        :key="index"
        class="relative p-4 ring-2 ring-gray-300 rounded-md shadow-lg items-center flex flex-col w-full"
      >
        <!-- 轮播图 -->
        <swiper
          ref="mySwiper"
          :options="swiperOptions"
          class="w-full ring-1 shadow-md rounded-sm"
        >
          <swiper-slide
            v-for="(_item, _index) in item.images"
            :key="'a' + _index"
          >
            <img :src="getImages(_item)" alt="项目封面" class="h-32 w-full" />
          </swiper-slide>
        </swiper>

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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "../../../node_modules/swiper/dist/css/swiper.css";
import createNotice from "./createNotice.vue";
export default {
  components: { createNotice, Swiper, SwiperSlide },
  props: ["isClick", "project"],
  data() {
    return {
      isHover: false,
      // swiper配置
      swiperOptions: {
        notNextTick: true,
        //循环
        loop: true,
        //自动播放+延迟时间
        autoplay: 1000,
        // 设置轮播
        effect: "fade",
        //滑动速度
        speed: 1000,
        //滑动方向
        direction: "horizontal",
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },

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
  mounted() {},
};
</script>
