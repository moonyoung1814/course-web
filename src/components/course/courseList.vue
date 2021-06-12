<template>
  <div
    class="ml-4 items-start w-full relative grid lg:grid-cols-3 gap-4 md:grid-cols-2 xs:grid-cols-1"
  >
    <!-- 卡片 -->
    <div
      class="border border-gray-100 bg-white rounded-md shadow-md p-8"
      v-for="(item, index) in course"
      :key="index"
      v-show="item.name == '创新实践' + isPractice"
    >
      <div class="flex flex-row items-start">
        <!-- 教师头像 -->
        <img
          :src="item.teacher.image"
          alt="head"
          class="border border-blue-200 shadow w-14 h-14 rounded"
        />
        <!-- 课程名+教师名字 -->
        <div class="flex flex-col ml-4 w-full">
          <p
            class="text-base font-semibold text-black tracking-widest italic border-gray-300 border-b border-dashed pl-2"
          >
            {{ item.name }}
          </p>
          <p
            class="text-sm text-black tracking-wider border-gray-300 border-b border-dashed pl-2 pt-2"
          >
            {{ item.teacher.name }}
          </p>
        </div>
      </div>

      <!-- 学期卡片 -->
      <div
        class="flex flex-row tracking-wider text-xs border-gray-300 border-b border-dashed px-2 pt-2 "
      >
        <!-- 学年+学期 -->

        <span> {{ item.year }}年</span>
        <span>
          <p v-if="item.semeter == 1">秋</p>
          <p v-else-if="item.semeter == 2">春</p>
        </span>
        <!-- 星期+时间 -->
        <p class="ml-2">{{ item.weekday }}</p>
        <p>
          {{ item.time }}
        </p>
      </div>
      <!-- 书籍列表 -->
      <div
        class="flex flex-col mt-4 w-full border border-gray-100 rounded-md shadow-md relative p-4 transform-gpu transition ease-in-out duration-500"
      >
        <book
          :index="index"
          :course="item"
          :labelName="labelName[0]"
          @whichHandle="handleBook"
        ></book>
        <book
          :index="index"
          :course="item"
          :labelName="labelName[1]"
          @whichHandle="handleResource"
        ></book>
      </div>
    </div>
  </div>
</template>

<script>
import book from "./book.vue";
export default {
  components: { book },
  //父向子传递数据
  props: ["course", "isPractice"],
  data() {
    return {
      isBook: [],
      isResource: [],
      labelName: ["课程教材", "参考书目"],
    };
  },
  methods: {
    changeLine: function(str) {
      if (str != null)
        // return str.replace(/\n/g,'<br>') 把/n替换成<br>
        // split按条件分割字符串
        return str.split("\r\n");
    },
    handleBook: function(e) {
      this.isBook = e;
    },
    handleResource: function(e) {
      this.isResource = e;
    },
  },
};
</script>
