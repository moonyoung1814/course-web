<template>
  <div
    class="border-0 bg-white rounded-md shadow-md w-full ml-6 p-8 grid grid-cols-2 gap-4"
    v-show="isClick == 2"
  >
    <div class="flex flex-col">
      <label for="" class="text-base font-bold ">导师</label>
      <div v-for="(item, index) in members" :key="'a' + index">
        <div class="flex flex-col" v-if="item.id === '1'">
          <div class="flex flex-row my-2 ring-1 rounded shadow p-2">
            <img
              src="../../assets/head.jpg"
              alt="head"
              class="ring-1 w-8 rounded-full overflow-hidden"
            />
            <p class="text-sm ml-3 self-center">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <label class="text-base font-bold">管理员</label>
      <div v-for="(item, index) in members" :key="'b' + index">
        <div class="flex flex-col" v-if="item.id === '2'">
          <div class="flex flex-row my-2 ring-1 rounded shadow p-2">
            <img
              src="../../assets/head.jpg"
              alt="head"
              class="ring-1 w-8 rounded-full overflow-hidden"
            />
            <p class="text-sm ml-3 self-center">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <label class="text-base font-bold">成员</label>
      <div v-for="(item, index) in members" :key="'c' + index">
        <div class="flex flex-col" v-if="item.id === '3'">
          <div class="flex flex-row my-2 ring-1 rounded shadow p-2">
            <img
              src="../../assets/head.jpg"
              alt="head"
              class="ring-1 w-8 rounded-full overflow-hidden"
            />
            <p class="text-sm ml-3 self-center">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isClick", "members"],
  data() {
    return {};
  },
  methods: {},
};
</script>
