<template>
  <div>
    <!-- 课程教材标签 -->
    <div
      class="flex flex-row items-center cursor-pointer"
      @click.stop="handleBook(index)"
    >
      <span
        :class="[
          'iconfont icon-jiantou text-blue-600 text-base font-bold transform-gpu transition ease-in-out duration-300',
          isBook[index] === index ? 'rotate-90' : '',
        ]"
      ></span>
      <span class="text-sm text-black ml-2 font-bold cursor-pointer">{{
        labelName
      }}</span>
    </div>
    <!-- 课程教材列表 -->
    <div
      :class="[
        'flex flex-row flex-wrap overflow-hidden origin-bottom text-xs text-gray-700 my-1 relative',
      ]"
    >
      <p
        v-for="(item_, index_) in changeLine(course.book)"
        :key="index_"
        :class="[
          'Overflow Clip transform-gpu transition ease-in-out duration-500',
          isBook[index] === index ? '' : 'absolute -translate-y-full',
        ]"
      >
        《&nbsp;{{ item_ }}&nbsp;》《&nbsp;{{ item_ }}&nbsp;》
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["index", "course", "labelName"],
  data() {
    return {
      isBook: [],
    };
  },
  mounted() {
    this.$emit("whichHandle", this.isBook);
  },
  methods: {
    changeLine: function(str) {
      if (str != null)
        // return str.replace(/\n/g,'<br>') 把/n替换成<br>
        // split按条件分割字符串
        return str.split("\r\n");
    },
    handleBook: function(e) {
      if (this.isBook[e] === undefined) {
        for (let i = 0; i < e; i++) {
          if (this.isBook[i] === undefined) {
            this.isBook.splice(i, 0, -1);
          }
        }
        this.isBook.splice(e, 0, e);
      } else {
        if (this.isBook[e] === -1) {
          this.isBook.splice(e, 1, e);
        } else {
          this.isBook.splice(e, 1, -1);
        }
      }
      console.log(this.isBook);
      this.$emit("whichHandle", this.isBook);
    },
  },
};
</script>
