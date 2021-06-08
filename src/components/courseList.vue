<template>
  <div class="w-10/12 ml-12">
    <!-- titile -->
    <span class="text-2xl font-bold justify-center flex"
      >创新实践{{ isPractice }}</span
    >
    <!-- list -->
    <div
      class="border-2 border-gray-300 rounded-md shadow-lg relative flex flex-col px-8"
    >
      <div class="grid grid-cols-2 gap-x-8 w-full mt-4">
        <div v-for="(item, index) in course" :key="index" class="w-full">
          <div
            class="flex flex-col w-full"
            v-if="item.name == '创新实践' + isPractice"
          >
            <div class="flex flex-row mt-4 ">
              <img
                :src="item.teacher.image"
                alt="head"
                class="ring-2 ring-gray-300 shadow w-8 h-8 rounded-full overflow-hidden"
              />
              <p class="text-sm ml-4 self-center font-bold">
                {{ item.teacher.name }}
              </p>
            </div>
            <!-- 学期卡片 -->
            <div class="flex flex-row mt-4 space-x-4 w-full">
              <div
                class="ring-2 ring-gray-300 shadow rounded p-2 flex flex-row"
              >
                <p class="text-xs">第</p>
                <p class="font-bold text-xs ml-1">{{ item.year }}</p>
                <p class="text-xs ml-1">学年</p>
                <p class="text-xs ml-1">第</p>
                <p class="font-bold text-xs ml-1">{{ item.semeter }}</p>
                <p class="text-xs ml-1">学期</p>
              </div>
              <div class="ring-2 ring-gray-300 rounded shadow p-2">
                <p class="text-xs">{{ item.weekday }}</p>
              </div>
              <div class="ring-2 ring-gray-300 rounded shadow p-2">
                <p class="text-xs">{{ item.time }}</p>
              </div>
            </div>
            <!-- 书籍卡片 -->
            <div class="flex flex-row mt-4 w-full">
              <div
                class="flex flex-col ring-2 ring-gray-300 rounded shadow-md p-4 w-full"
              >
                <div class="flex flex-row items-center">
                  <label
                    class="iconfont icon-thin-_book_writi text-blue-600 text-base font-bold"
                  ></label>
                  <label class="text-sm text-black ml-2 font-bold"
                    >课程教材</label
                  >
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
                  <label
                    class="iconfont icon-thin-_book_writi text-blue-600 text-base font-bold"
                  ></label>
                  <label class="text-sm text-black ml-2 font-bold"
                    >参考书目</label
                  >
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
