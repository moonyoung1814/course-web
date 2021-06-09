<template>
  <div class="w-full ml-8">
    <div class="grid grid-cols-2 gap-x-6">
      <div
        class="border border-gray-100 bg-white rounded-md shadow-lg relative p-8 mb-6"
        v-for="(item, index) in course"
        :key="index"
        v-show="item.name == '创新实践' + isPractice"
      >
        <div class="flex flex-row mt-4 ">
          <img
            :src="item.teacher.image"
            alt="head"
            class="border border-gray-100 shadow w-8 h-8 rounded-full overflow-hidden"
          />
          <p
            class="text-base ml-4 self-center font-bold text-black tracking-wider"
          >
            {{ item.teacher.name }}
          </p>
        </div>
        <!-- 学期卡片 -->
        <div class="flex flex-row mt-4 space-x-4 w-full">
          <div
            class="border border-gray-100 shadow rounded p-2 flex-row flex items-end text-xs"
          >
            <p class="">第</p>
            <p class="mx-2 text-blue-500 transform scale-125">
              {{ item.year }}
            </p>
            <p class="">学年</p>
            <p class="ml-2">第</p>
            <p class="mx-2 text-blue-500 transform scale-125">
              {{ item.semeter }}
            </p>
            <p class="">学期</p>
          </div>
          <div class="border border-gray-100 rounded shadow p-2">
            <p class="text-xs">{{ item.weekday }}</p>
          </div>
          <div class="border border-gray-100 rounded shadow p-2">
            <p class="text-xs">{{ item.time }}</p>
          </div>
        </div>
        <!-- 书籍卡片 -->
        <div class="mt-4 w-full">
          <div
            class="flex flex-col border border-gray-100 rounded-md shadow-md p-4 w-full"
          >
            <div class="flex flex-row items-center">
              <span
                class="iconfont icon-thin-_book_writi text-blue-600 text-base font-bold"
              ></span>
              <span class="text-sm text-black ml-2 font-bold">课程教材</span>
            </div>
            <ol class="text-xs mt-2 text-gray-700 list-decimal list-inside">
              <li
                v-for="(item_, index_) in changeLine(item.book)"
                :key="index_"
              >
                《&nbsp;{{ item_ }}&nbsp;》
              </li>
            </ol>
            <div class="flex flex-row items-center mt-3">
              <span
                class="iconfont icon-thin-_book_writi text-blue-600 text-base font-bold"
              ></span>
              <span class="text-sm text-black ml-2 font-bold">参考书目</span>
            </div>
            <!-- vue 中 用 {{}} 进行数据绑定的时候，字符串换行是不生效的。解决办法:不用上边的方式进行数据绑定，用v-html标签代替{{}} -->
            <ol class="text-xs mt-2 text-gray-700 list-decimal list-inside">
              <li
                v-for="(item_, index_) in changeLine(item.resource)"
                :key="index_"
              >
                《&nbsp;{{ item_ }}&nbsp;》
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //父向子传递数据
  props: ["course", "isPractice"],
  data() {
    return {};
  },
  methods: {
    changeLine: function(str) {
      if (str != null)
        // return str.replace(/\n/g,'<br>') 把/n替换成<br>
        // split按条件分割字符串
        return str.split("\r\n");
    },
  },
};
</script>
